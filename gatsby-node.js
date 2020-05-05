const path = require('path')
const puppeteer = require('puppeteer')
const fs = require('fs-extra')

const metaPathFromSlug = slug => {
  return `${path.join('public', 'meta-images', slug).replace(/\/$/, '')}.png`
}
const metaHtmlFromSlug = slug => {
  return path.join(__dirname, 'public', '__meta', slug, 'index.html')
}

const imageFromHtml = async (browser, filePath, slug) => {
  const page = await browser.newPage()
  const pagePath = `file://${filePath}`
  const destination = path.join(__dirname, metaPathFromSlug(slug))
  await page.goto(pagePath)
  await page.evaluateHandle('document.fonts.ready')
  await page.setViewport({ width: 1200, height: 630 })
  const file = await page.screenshot({ type: 'png' })
  fs.writeFileSync(destination, file)
}

let browser = null

exports.onPreInit = async () => {
  browser = await puppeteer.launch({ headless: true })
}

exports.onPostBuild = async ({ graphql }) => {
  if (browser) {
    const data = await graphql(`
      query allPostsForMeta {
        content: allFile(filter: { sourceInstanceName: { eq: "content" }, relativeDirectory: { glob: "posts**" } }) {
          edges {
            node {
              id
              childMarkdownRemark {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      }
    `).then(r => {
      if (r.errors) {
        throw new Error(r.errors.join(', '))
      }

      return r.data
    })

    await fs.mkdirp(path.resolve('./public/meta-images/posts'))
    await Promise.all(
      data.content.edges.map(async ({ node }) => {
        const { slug } = node.childMarkdownRemark.fields
        const pagePath = metaHtmlFromSlug(slug)
        await imageFromHtml(browser, pagePath, slug)
      })
    )

    await browser.close()
  }
}

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout } = node.frontmatter
      const { relativePath } = getNode(node.parent)

      let slug = permalink

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      })

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      })

      createNodeField({
        node,
        name: 'socialImagePath',
        value: metaPathFromSlug(slug).replace('public', '')
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw new Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        slug
      }
    })

    // Create the meta page.
    createPage({
      path: `/__meta${slug}`,
      component: path.resolve(`./src/templates/${layout || 'page'}-meta.tsx`),
      context: { slug }
    })
  })
}
