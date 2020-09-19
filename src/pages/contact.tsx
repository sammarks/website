import React, { useState } from 'react'
import { Row, Col, Form, Input, Button, message } from 'antd'
import { styled, H1, Body, Block, H2 } from '@thesisedu/web/dist'
import axios from 'axios'
import CheckCircleFilled from '@ant-design/icons/lib/icons/CheckCircleFilled'
import IndexLayout from '../layouts'
import { Container } from '../components/styled'
import { Header } from '../components/Header'
import { SocialLinks } from '../components/SocialLinks'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'

const FORM_URL = 'https://getform.io/f/3e1a2329-e0d6-43b1-9960-d6c80ed8ef94'
const SubmittedContainer = styled.div`
  margin-top: ${props => props.theme['@size-xxl']};
`

const Posts = () => {
  const [form] = Form.useForm()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  let content
  if (submitted) {
    content = (
      <SubmittedContainer>
        <Body color={'@green'}>
          <CheckCircleFilled style={{ fontSize: 60 }} />
        </Body>
        <H2 style={{ marginTop: 16 }}>Thanks for reaching out!</H2>
        <Body>Your message has been submitted. I'll get back with you as soon as possible!</Body>
      </SubmittedContainer>
    )
  } else {
    content = (
      <Form
        layout={'vertical'}
        form={form}
        onFinish={async values => {
          setLoading(true)
          const formData = new FormData()
          Object.keys(values).forEach(key => {
            formData.append(key, values[key])
          })
          try {
            const result = await axios.post(FORM_URL, formData)
            if (result.status < 400) {
              setSubmitted(true)
            } else {
              message.error('There was an error submitting your message.')
            }
          } catch (err) {
            message.error('There was an error submitting your message.')
          }
          setLoading(false)
        }}
      >
        <Form.Item name={'name'} label={'Name'} rules={[{ required: true, message: 'Your name is required.' }]}>
          <Input placeholder={'John Doe'} />
        </Form.Item>
        <Form.Item
          name={'email'}
          label={'Email'}
          rules={[{ required: true, type: 'email', message: 'A valid email address is required.' }]}
        >
          <Input type={'email'} placeholder={'john@doetech.com'} />
        </Form.Item>
        <Form.Item name={'company'} label={'Company'}>
          <Input placeholder={'DoeTech'} />
        </Form.Item>
        <Form.Item name={'subject'} label={'Subject'} rules={[{ required: true, message: 'A subject is required.' }]}>
          <Input placeholder={'What would you like to discuss?'} />
        </Form.Item>
        <Form.Item name={'message'} label={'Message'} rules={[{ required: true, message: 'A message is required.' }]}>
          <Input.TextArea autoSize={{ minRows: 6, maxRows: 12 }} placeholder={'What would you like to say?'} />
        </Form.Item>
        <Block marginBottom={'@size-xl'}>
          <Button type={'primary'} onClick={() => form.submit()} loading={loading}>
            Send Message &rarr;
          </Button>
        </Block>
      </Form>
    )
  }
  return (
    <IndexLayout>
      <SEO title={'Contact'} url={'/contact'} />
      <Container>
        <Header />
        <Row justify={'center'}>
          <Col xs={24} lg={16}>
            <Block marginTop={'@size-xl'}>
              <H1>Get in Touch</H1>
            </Block>
            <Body isBlock>
              Thanks for your interest! Fill out the form below and I'll get back with you as soon as possible. Alternatively, you can reach
              me in the following places:
            </Body>
            <Block marginBottom={'@size-m'}>
              <SocialLinks />
            </Block>
            {content}
          </Col>
        </Row>
        <Footer />
      </Container>
    </IndexLayout>
  )
}

export default Posts
