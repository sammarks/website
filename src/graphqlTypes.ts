export type Maybe<T> = T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  JSON: any
}

export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars['Boolean']>
  ne: Maybe<Scalars['Boolean']>
  in: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq: Maybe<Scalars['Date']>
  ne: Maybe<Scalars['Date']>
  gt: Maybe<Scalars['Date']>
  gte: Maybe<Scalars['Date']>
  lt: Maybe<Scalars['Date']>
  lte: Maybe<Scalars['Date']>
  in: Maybe<Array<Maybe<Scalars['Date']>>>
  nin: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  birthtime: Maybe<Scalars['Date']>
  birthtimeMs: Maybe<Scalars['Float']>
  blksize: Maybe<Scalars['Int']>
  blocks: Maybe<Scalars['Int']>
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next: Maybe<Directory>
  node: Directory
  previous: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>
  absolutePath: Maybe<StringQueryOperatorInput>
  relativePath: Maybe<StringQueryOperatorInput>
  extension: Maybe<StringQueryOperatorInput>
  size: Maybe<IntQueryOperatorInput>
  prettySize: Maybe<StringQueryOperatorInput>
  modifiedTime: Maybe<DateQueryOperatorInput>
  accessTime: Maybe<DateQueryOperatorInput>
  changeTime: Maybe<DateQueryOperatorInput>
  birthTime: Maybe<DateQueryOperatorInput>
  root: Maybe<StringQueryOperatorInput>
  dir: Maybe<StringQueryOperatorInput>
  base: Maybe<StringQueryOperatorInput>
  ext: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  relativeDirectory: Maybe<StringQueryOperatorInput>
  dev: Maybe<IntQueryOperatorInput>
  mode: Maybe<IntQueryOperatorInput>
  nlink: Maybe<IntQueryOperatorInput>
  uid: Maybe<IntQueryOperatorInput>
  gid: Maybe<IntQueryOperatorInput>
  rdev: Maybe<IntQueryOperatorInput>
  ino: Maybe<FloatQueryOperatorInput>
  atimeMs: Maybe<FloatQueryOperatorInput>
  mtimeMs: Maybe<FloatQueryOperatorInput>
  ctimeMs: Maybe<FloatQueryOperatorInput>
  atime: Maybe<DateQueryOperatorInput>
  mtime: Maybe<DateQueryOperatorInput>
  ctime: Maybe<DateQueryOperatorInput>
  birthtime: Maybe<DateQueryOperatorInput>
  birthtimeMs: Maybe<FloatQueryOperatorInput>
  blksize: Maybe<IntQueryOperatorInput>
  blocks: Maybe<IntQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight: Scalars['String']
  shadow: Scalars['String']
  opacity: Maybe<Scalars['Int']>
}

export type File = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  birthtime: Maybe<Scalars['Date']>
  birthtimeMs: Maybe<Scalars['Float']>
  blksize: Maybe<Scalars['Int']>
  blocks: Maybe<Scalars['Int']>
  publicURL: Maybe<Scalars['String']>
  childImageSharp: Maybe<ImageSharp>
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
  childMarkdownRemark: Maybe<MarkdownRemark>
}

export type FileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  next: Maybe<File>
  node: File
  previous: Maybe<File>
}

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterLayout = 'childMarkdownRemark___frontmatter___layout',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkFieldsLayout = 'childMarkdownRemark___fields___layout',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type FileFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>
  absolutePath: Maybe<StringQueryOperatorInput>
  relativePath: Maybe<StringQueryOperatorInput>
  extension: Maybe<StringQueryOperatorInput>
  size: Maybe<IntQueryOperatorInput>
  prettySize: Maybe<StringQueryOperatorInput>
  modifiedTime: Maybe<DateQueryOperatorInput>
  accessTime: Maybe<DateQueryOperatorInput>
  changeTime: Maybe<DateQueryOperatorInput>
  birthTime: Maybe<DateQueryOperatorInput>
  root: Maybe<StringQueryOperatorInput>
  dir: Maybe<StringQueryOperatorInput>
  base: Maybe<StringQueryOperatorInput>
  ext: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  relativeDirectory: Maybe<StringQueryOperatorInput>
  dev: Maybe<IntQueryOperatorInput>
  mode: Maybe<IntQueryOperatorInput>
  nlink: Maybe<IntQueryOperatorInput>
  uid: Maybe<IntQueryOperatorInput>
  gid: Maybe<IntQueryOperatorInput>
  rdev: Maybe<IntQueryOperatorInput>
  ino: Maybe<FloatQueryOperatorInput>
  atimeMs: Maybe<FloatQueryOperatorInput>
  mtimeMs: Maybe<FloatQueryOperatorInput>
  ctimeMs: Maybe<FloatQueryOperatorInput>
  atime: Maybe<DateQueryOperatorInput>
  mtime: Maybe<DateQueryOperatorInput>
  ctime: Maybe<DateQueryOperatorInput>
  birthtime: Maybe<DateQueryOperatorInput>
  birthtimeMs: Maybe<FloatQueryOperatorInput>
  blksize: Maybe<IntQueryOperatorInput>
  blocks: Maybe<IntQueryOperatorInput>
  publicURL: Maybe<StringQueryOperatorInput>
  childImageSharp: Maybe<ImageSharpFilterInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>
}

export type FileGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars['Float']>
  ne: Maybe<Scalars['Float']>
  gt: Maybe<Scalars['Float']>
  gte: Maybe<Scalars['Float']>
  lt: Maybe<Scalars['Float']>
  lte: Maybe<Scalars['Float']>
  in: Maybe<Array<Maybe<Scalars['Float']>>>
  nin: Maybe<Array<Maybe<Scalars['Float']>>>
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
  fixed: Maybe<ImageSharpFixed>
  resolutions: Maybe<ImageSharpResolutions>
  fluid: Maybe<ImageSharpFluid>
  sizes: Maybe<ImageSharpSizes>
  original: Maybe<ImageSharpOriginal>
  resize: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width: Maybe<Scalars['Int']>
  height: Maybe<Scalars['Int']>
  base64Width: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone: Maybe<DuotoneGradient>
  traceSVG: Maybe<Potrace>
  quality: Maybe<Scalars['Int']>
  jpegQuality: Maybe<Scalars['Int']>
  pngQuality: Maybe<Scalars['Int']>
  webpQuality: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpResolutionsArgs = {
  width: Maybe<Scalars['Int']>
  height: Maybe<Scalars['Int']>
  base64Width: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone: Maybe<DuotoneGradient>
  traceSVG: Maybe<Potrace>
  quality: Maybe<Scalars['Int']>
  jpegQuality: Maybe<Scalars['Int']>
  pngQuality: Maybe<Scalars['Int']>
  webpQuality: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars['Int']>
  maxHeight: Maybe<Scalars['Int']>
  base64Width: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone: Maybe<DuotoneGradient>
  traceSVG: Maybe<Potrace>
  quality: Maybe<Scalars['Int']>
  jpegQuality: Maybe<Scalars['Int']>
  pngQuality: Maybe<Scalars['Int']>
  webpQuality: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpSizesArgs = {
  maxWidth: Maybe<Scalars['Int']>
  maxHeight: Maybe<Scalars['Int']>
  base64Width: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone: Maybe<DuotoneGradient>
  traceSVG: Maybe<Potrace>
  quality: Maybe<Scalars['Int']>
  jpegQuality: Maybe<Scalars['Int']>
  pngQuality: Maybe<Scalars['Int']>
  webpQuality: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpResizeArgs = {
  width: Maybe<Scalars['Int']>
  height: Maybe<Scalars['Int']>
  quality: Maybe<Scalars['Int']>
  jpegQuality: Maybe<Scalars['Int']>
  pngQuality: Maybe<Scalars['Int']>
  webpQuality: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars['Boolean']>
  traceSVG: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  next: Maybe<ImageSharp>
  node: ImageSharp
  previous: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed: Maybe<ImageSharpFixedFilterInput>
  resolutions: Maybe<ImageSharpResolutionsFilterInput>
  fluid: Maybe<ImageSharpFluidFilterInput>
  sizes: Maybe<ImageSharpSizesFilterInput>
  original: Maybe<ImageSharpOriginalFilterInput>
  resize: Maybe<ImageSharpResizeFilterInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type ImageSharpFixed = {
  base64: Maybe<Scalars['String']>
  tracedSVG: Maybe<Scalars['String']>
  aspectRatio: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp: Maybe<Scalars['String']>
  srcSetWebp: Maybe<Scalars['String']>
  originalName: Maybe<Scalars['String']>
}

export type ImageSharpFixedFilterInput = {
  base64: Maybe<StringQueryOperatorInput>
  tracedSVG: Maybe<StringQueryOperatorInput>
  aspectRatio: Maybe<FloatQueryOperatorInput>
  width: Maybe<FloatQueryOperatorInput>
  height: Maybe<FloatQueryOperatorInput>
  src: Maybe<StringQueryOperatorInput>
  srcSet: Maybe<StringQueryOperatorInput>
  srcWebp: Maybe<StringQueryOperatorInput>
  srcSetWebp: Maybe<StringQueryOperatorInput>
  originalName: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluid = {
  base64: Maybe<Scalars['String']>
  tracedSVG: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp: Maybe<Scalars['String']>
  srcSetWebp: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg: Maybe<Scalars['String']>
  originalName: Maybe<Scalars['String']>
  presentationWidth: Maybe<Scalars['Int']>
  presentationHeight: Maybe<Scalars['Int']>
}

export type ImageSharpFluidFilterInput = {
  base64: Maybe<StringQueryOperatorInput>
  tracedSVG: Maybe<StringQueryOperatorInput>
  aspectRatio: Maybe<FloatQueryOperatorInput>
  src: Maybe<StringQueryOperatorInput>
  srcSet: Maybe<StringQueryOperatorInput>
  srcWebp: Maybe<StringQueryOperatorInput>
  srcSetWebp: Maybe<StringQueryOperatorInput>
  sizes: Maybe<StringQueryOperatorInput>
  originalImg: Maybe<StringQueryOperatorInput>
  originalName: Maybe<StringQueryOperatorInput>
  presentationWidth: Maybe<IntQueryOperatorInput>
  presentationHeight: Maybe<IntQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type ImageSharpOriginal = {
  width: Maybe<Scalars['Float']>
  height: Maybe<Scalars['Float']>
  src: Maybe<Scalars['String']>
}

export type ImageSharpOriginalFilterInput = {
  width: Maybe<FloatQueryOperatorInput>
  height: Maybe<FloatQueryOperatorInput>
  src: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResize = {
  src: Maybe<Scalars['String']>
  tracedSVG: Maybe<Scalars['String']>
  width: Maybe<Scalars['Int']>
  height: Maybe<Scalars['Int']>
  aspectRatio: Maybe<Scalars['Float']>
  originalName: Maybe<Scalars['String']>
}

export type ImageSharpResizeFilterInput = {
  src: Maybe<StringQueryOperatorInput>
  tracedSVG: Maybe<StringQueryOperatorInput>
  width: Maybe<IntQueryOperatorInput>
  height: Maybe<IntQueryOperatorInput>
  aspectRatio: Maybe<FloatQueryOperatorInput>
  originalName: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResolutions = {
  base64: Maybe<Scalars['String']>
  tracedSVG: Maybe<Scalars['String']>
  aspectRatio: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp: Maybe<Scalars['String']>
  srcSetWebp: Maybe<Scalars['String']>
  originalName: Maybe<Scalars['String']>
}

export type ImageSharpResolutionsFilterInput = {
  base64: Maybe<StringQueryOperatorInput>
  tracedSVG: Maybe<StringQueryOperatorInput>
  aspectRatio: Maybe<FloatQueryOperatorInput>
  width: Maybe<FloatQueryOperatorInput>
  height: Maybe<FloatQueryOperatorInput>
  src: Maybe<StringQueryOperatorInput>
  srcSet: Maybe<StringQueryOperatorInput>
  srcWebp: Maybe<StringQueryOperatorInput>
  srcSetWebp: Maybe<StringQueryOperatorInput>
  originalName: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSizes = {
  base64: Maybe<Scalars['String']>
  tracedSVG: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp: Maybe<Scalars['String']>
  srcSetWebp: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg: Maybe<Scalars['String']>
  originalName: Maybe<Scalars['String']>
  presentationWidth: Maybe<Scalars['Int']>
  presentationHeight: Maybe<Scalars['Int']>
}

export type ImageSharpSizesFilterInput = {
  base64: Maybe<StringQueryOperatorInput>
  tracedSVG: Maybe<StringQueryOperatorInput>
  aspectRatio: Maybe<FloatQueryOperatorInput>
  src: Maybe<StringQueryOperatorInput>
  srcSet: Maybe<StringQueryOperatorInput>
  srcWebp: Maybe<StringQueryOperatorInput>
  srcSetWebp: Maybe<StringQueryOperatorInput>
  sizes: Maybe<StringQueryOperatorInput>
  originalImg: Maybe<StringQueryOperatorInput>
  originalName: Maybe<StringQueryOperatorInput>
  presentationWidth: Maybe<IntQueryOperatorInput>
  presentationHeight: Maybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Internal = {
  content: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description: Maybe<Scalars['String']>
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType: Maybe<Scalars['Boolean']>
  mediaType: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>
  contentDigest: Maybe<StringQueryOperatorInput>
  description: Maybe<StringQueryOperatorInput>
  fieldOwners: Maybe<StringQueryOperatorInput>
  ignoreType: Maybe<BooleanQueryOperatorInput>
  mediaType: Maybe<StringQueryOperatorInput>
  owner: Maybe<StringQueryOperatorInput>
  type: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars['Int']>
  ne: Maybe<Scalars['Int']>
  gt: Maybe<Scalars['Int']>
  gte: Maybe<Scalars['Int']>
  lt: Maybe<Scalars['Int']>
  lte: Maybe<Scalars['Int']>
  in: Maybe<Array<Maybe<Scalars['Int']>>>
  nin: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type JsonQueryOperatorInput = {
  eq: Maybe<Scalars['JSON']>
  ne: Maybe<Scalars['JSON']>
  in: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex: Maybe<Scalars['JSON']>
  glob: Maybe<Scalars['JSON']>
}

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
  value: Maybe<Scalars['String']>
  depth: Maybe<Scalars['Int']>
}

export type MarkdownHeadingFilterInput = {
  value: Maybe<StringQueryOperatorInput>
  depth: Maybe<IntQueryOperatorInput>
}

export type MarkdownHeadingFilterListInput = {
  elemMatch: Maybe<MarkdownHeadingFilterInput>
}

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  id: Scalars['ID']
  frontmatter: Maybe<MarkdownRemarkFrontmatter>
  excerpt: Maybe<Scalars['String']>
  rawMarkdownBody: Maybe<Scalars['String']>
  fileAbsolutePath: Maybe<Scalars['String']>
  fields: Maybe<MarkdownRemarkFields>
  html: Maybe<Scalars['String']>
  htmlAst: Maybe<Scalars['JSON']>
  excerptAst: Maybe<Scalars['JSON']>
  headings: Maybe<Array<Maybe<MarkdownHeading>>>
  timeToRead: Maybe<Scalars['Int']>
  tableOfContents: Maybe<Scalars['String']>
  wordCount: Maybe<MarkdownWordCount>
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
  format?: Maybe<MarkdownExcerptFormats>
}

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
}

export type MarkdownRemarkHeadingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>
  pathToSlugField?: Maybe<Scalars['String']>
  maxDepth: Maybe<Scalars['Int']>
  heading: Maybe<Scalars['String']>
}

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int']
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<MarkdownRemarkGroupConnection>
}

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkEdge = {
  next: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous: Maybe<MarkdownRemark>
}

export type MarkdownRemarkFields = {
  slug: Maybe<Scalars['String']>
  layout: Maybe<Scalars['String']>
}

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterLayout = 'frontmatter___layout',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  FieldsLayout = 'fields___layout',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFieldsFilterInput = {
  slug: Maybe<StringQueryOperatorInput>
  layout: Maybe<StringQueryOperatorInput>
}

export type MarkdownRemarkFilterInput = {
  id: Maybe<StringQueryOperatorInput>
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>
  excerpt: Maybe<StringQueryOperatorInput>
  rawMarkdownBody: Maybe<StringQueryOperatorInput>
  fileAbsolutePath: Maybe<StringQueryOperatorInput>
  fields: Maybe<MarkdownRemarkFieldsFilterInput>
  html: Maybe<StringQueryOperatorInput>
  htmlAst: Maybe<JsonQueryOperatorInput>
  excerptAst: Maybe<JsonQueryOperatorInput>
  headings: Maybe<MarkdownHeadingFilterListInput>
  timeToRead: Maybe<IntQueryOperatorInput>
  tableOfContents: Maybe<StringQueryOperatorInput>
  wordCount: Maybe<MarkdownWordCountFilterInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type MarkdownRemarkFrontmatter = {
  title: Maybe<Scalars['String']>
  layout: Maybe<Scalars['String']>
}

export type MarkdownRemarkFrontmatterFilterInput = {
  title: Maybe<StringQueryOperatorInput>
  layout: Maybe<StringQueryOperatorInput>
}

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type MarkdownRemarkSortInput = {
  fields: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MarkdownWordCount = {
  paragraphs: Maybe<Scalars['Int']>
  sentences: Maybe<Scalars['Int']>
  words: Maybe<Scalars['Int']>
}

export type MarkdownWordCountFilterInput = {
  paragraphs: Maybe<IntQueryOperatorInput>
  sentences: Maybe<IntQueryOperatorInput>
  words: Maybe<IntQueryOperatorInput>
}

export type Node = {
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>
}

export type PageInfo = {
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage: Maybe<Scalars['Int']>
}

export type Potrace = {
  turnPolicy: Maybe<PotraceTurnPolicy>
  turdSize: Maybe<Scalars['Float']>
  alphaMax: Maybe<Scalars['Float']>
  optCurve: Maybe<Scalars['Boolean']>
  optTolerance: Maybe<Scalars['Float']>
  threshold: Maybe<Scalars['Int']>
  blackOnWhite: Maybe<Scalars['Boolean']>
  color: Maybe<Scalars['String']>
  background: Maybe<Scalars['String']>
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  file: Maybe<File>
  allFile: FileConnection
  directory: Maybe<Directory>
  allDirectory: DirectoryConnection
  sitePage: Maybe<SitePage>
  allSitePage: SitePageConnection
  site: Maybe<Site>
  allSite: SiteConnection
  markdownRemark: Maybe<MarkdownRemark>
  allMarkdownRemark: MarkdownRemarkConnection
  imageSharp: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  siteBuildMetadata: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export type QueryFileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>
  absolutePath: Maybe<StringQueryOperatorInput>
  relativePath: Maybe<StringQueryOperatorInput>
  extension: Maybe<StringQueryOperatorInput>
  size: Maybe<IntQueryOperatorInput>
  prettySize: Maybe<StringQueryOperatorInput>
  modifiedTime: Maybe<DateQueryOperatorInput>
  accessTime: Maybe<DateQueryOperatorInput>
  changeTime: Maybe<DateQueryOperatorInput>
  birthTime: Maybe<DateQueryOperatorInput>
  root: Maybe<StringQueryOperatorInput>
  dir: Maybe<StringQueryOperatorInput>
  base: Maybe<StringQueryOperatorInput>
  ext: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  relativeDirectory: Maybe<StringQueryOperatorInput>
  dev: Maybe<IntQueryOperatorInput>
  mode: Maybe<IntQueryOperatorInput>
  nlink: Maybe<IntQueryOperatorInput>
  uid: Maybe<IntQueryOperatorInput>
  gid: Maybe<IntQueryOperatorInput>
  rdev: Maybe<IntQueryOperatorInput>
  ino: Maybe<FloatQueryOperatorInput>
  atimeMs: Maybe<FloatQueryOperatorInput>
  mtimeMs: Maybe<FloatQueryOperatorInput>
  ctimeMs: Maybe<FloatQueryOperatorInput>
  atime: Maybe<DateQueryOperatorInput>
  mtime: Maybe<DateQueryOperatorInput>
  ctime: Maybe<DateQueryOperatorInput>
  birthtime: Maybe<DateQueryOperatorInput>
  birthtimeMs: Maybe<FloatQueryOperatorInput>
  blksize: Maybe<IntQueryOperatorInput>
  blocks: Maybe<IntQueryOperatorInput>
  publicURL: Maybe<StringQueryOperatorInput>
  childImageSharp: Maybe<ImageSharpFilterInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>
}

export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>
  sort: Maybe<FileSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>
  absolutePath: Maybe<StringQueryOperatorInput>
  relativePath: Maybe<StringQueryOperatorInput>
  extension: Maybe<StringQueryOperatorInput>
  size: Maybe<IntQueryOperatorInput>
  prettySize: Maybe<StringQueryOperatorInput>
  modifiedTime: Maybe<DateQueryOperatorInput>
  accessTime: Maybe<DateQueryOperatorInput>
  changeTime: Maybe<DateQueryOperatorInput>
  birthTime: Maybe<DateQueryOperatorInput>
  root: Maybe<StringQueryOperatorInput>
  dir: Maybe<StringQueryOperatorInput>
  base: Maybe<StringQueryOperatorInput>
  ext: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  relativeDirectory: Maybe<StringQueryOperatorInput>
  dev: Maybe<IntQueryOperatorInput>
  mode: Maybe<IntQueryOperatorInput>
  nlink: Maybe<IntQueryOperatorInput>
  uid: Maybe<IntQueryOperatorInput>
  gid: Maybe<IntQueryOperatorInput>
  rdev: Maybe<IntQueryOperatorInput>
  ino: Maybe<FloatQueryOperatorInput>
  atimeMs: Maybe<FloatQueryOperatorInput>
  mtimeMs: Maybe<FloatQueryOperatorInput>
  ctimeMs: Maybe<FloatQueryOperatorInput>
  atime: Maybe<DateQueryOperatorInput>
  mtime: Maybe<DateQueryOperatorInput>
  ctime: Maybe<DateQueryOperatorInput>
  birthtime: Maybe<DateQueryOperatorInput>
  birthtimeMs: Maybe<FloatQueryOperatorInput>
  blksize: Maybe<IntQueryOperatorInput>
  blocks: Maybe<IntQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>
  sort: Maybe<DirectorySortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path: Maybe<StringQueryOperatorInput>
  component: Maybe<StringQueryOperatorInput>
  internalComponentName: Maybe<StringQueryOperatorInput>
  componentChunkName: Maybe<StringQueryOperatorInput>
  matchPath: Maybe<StringQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>
  context: Maybe<SitePageContextFilterInput>
  pluginCreator: Maybe<SitePluginFilterInput>
  pluginCreatorId: Maybe<StringQueryOperatorInput>
  componentPath: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>
  sort: Maybe<SitePageSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>
  port: Maybe<IntQueryOperatorInput>
  host: Maybe<StringQueryOperatorInput>
  polyfill: Maybe<BooleanQueryOperatorInput>
  pathPrefix: Maybe<StringQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>
  sort: Maybe<SiteSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QueryMarkdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>
  excerpt: Maybe<StringQueryOperatorInput>
  rawMarkdownBody: Maybe<StringQueryOperatorInput>
  fileAbsolutePath: Maybe<StringQueryOperatorInput>
  fields: Maybe<MarkdownRemarkFieldsFilterInput>
  html: Maybe<StringQueryOperatorInput>
  htmlAst: Maybe<JsonQueryOperatorInput>
  excerptAst: Maybe<JsonQueryOperatorInput>
  headings: Maybe<MarkdownHeadingFilterListInput>
  timeToRead: Maybe<IntQueryOperatorInput>
  tableOfContents: Maybe<StringQueryOperatorInput>
  wordCount: Maybe<MarkdownWordCountFilterInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>
  sort: Maybe<MarkdownRemarkSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>
  resolutions: Maybe<ImageSharpResolutionsFilterInput>
  fluid: Maybe<ImageSharpFluidFilterInput>
  sizes: Maybe<ImageSharpSizesFilterInput>
  original: Maybe<ImageSharpOriginalFilterInput>
  resize: Maybe<ImageSharpResizeFilterInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>
  sort: Maybe<ImageSharpSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  buildTime: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>
  sort: Maybe<SiteBuildMetadataSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  resolve: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs: Maybe<StringQueryOperatorInput>
  browserAPIs: Maybe<StringQueryOperatorInput>
  ssrAPIs: Maybe<StringQueryOperatorInput>
  pluginFilepath: Maybe<StringQueryOperatorInput>
  packageJson: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>
  sort: Maybe<SitePluginSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type Site = Node & {
  buildTime: Maybe<Scalars['Date']>
  siteMetadata: Maybe<SiteSiteMetadata>
  port: Maybe<Scalars['Int']>
  host: Maybe<Scalars['String']>
  polyfill: Maybe<Scalars['Boolean']>
  pathPrefix: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  buildTime: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next: Maybe<Site>
  node: Site
  previous: Maybe<Site>
}

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataKeywords = 'siteMetadata___keywords',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>
  port: Maybe<IntQueryOperatorInput>
  host: Maybe<StringQueryOperatorInput>
  polyfill: Maybe<BooleanQueryOperatorInput>
  pathPrefix: Maybe<StringQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type SiteGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>
  context: Maybe<SitePageContext>
  pluginCreator: Maybe<SitePlugin>
  pluginCreatorId: Maybe<Scalars['String']>
  componentPath: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  slug: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
  slug: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
  next: Maybe<SitePage>
  node: SitePage
  previous: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsWrapperStyle = 'pluginCreator___pluginOptions___wrapperStyle',
  PluginCreatorPluginOptionsIgnoreFileExtensions = 'pluginCreator___pluginOptions___ignoreFileExtensions',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsQuality = 'pluginCreator___pluginOptions___quality',
  PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  PluginCreatorPluginOptionsPathPrefix = 'pluginCreator___pluginOptions___pathPrefix',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
  PluginCreatorPluginOptionsShowCaptions = 'pluginCreator___pluginOptions___showCaptions',
  PluginCreatorPluginOptionsMarkdownCaptions = 'pluginCreator___pluginOptions___markdownCaptions',
  PluginCreatorPluginOptionsWithWebp = 'pluginCreator___pluginOptions___withWebp',
  PluginCreatorPluginOptionsTracedSvg = 'pluginCreator___pluginOptions___tracedSVG',
  PluginCreatorPluginOptionsLoading = 'pluginCreator___pluginOptions___loading',
  PluginCreatorPluginOptionsDisableBgImageOnAlpha = 'pluginCreator___pluginOptions___disableBgImageOnAlpha',
  PluginCreatorPluginOptionsDisableBgImage = 'pluginCreator___pluginOptions___disableBgImage',
  PluginCreatorPluginOptionsSiteUrl = 'pluginCreator___pluginOptions___siteUrl',
  PluginCreatorPluginOptionsJavascriptEnabled = 'pluginCreator___pluginOptions___javascriptEnabled',
  PluginCreatorPluginOptionsModifyVarsBlue = 'pluginCreator___pluginOptions___modifyVars____blue',
  PluginCreatorPluginOptionsModifyVarsBlueLight = 'pluginCreator___pluginOptions___modifyVars____blue_light',
  PluginCreatorPluginOptionsModifyVarsRed = 'pluginCreator___pluginOptions___modifyVars____red',
  PluginCreatorPluginOptionsModifyVarsRedLight = 'pluginCreator___pluginOptions___modifyVars____red_light',
  PluginCreatorPluginOptionsModifyVarsGreen = 'pluginCreator___pluginOptions___modifyVars____green',
  PluginCreatorPluginOptionsModifyVarsGreenLight = 'pluginCreator___pluginOptions___modifyVars____green_light',
  PluginCreatorPluginOptionsModifyVarsOrange = 'pluginCreator___pluginOptions___modifyVars____orange',
  PluginCreatorPluginOptionsModifyVarsOrangeLight = 'pluginCreator___pluginOptions___modifyVars____orange_light',
  PluginCreatorPluginOptionsModifyVarsGray_0 = 'pluginCreator___pluginOptions___modifyVars____gray_0',
  PluginCreatorPluginOptionsModifyVarsGray_1 = 'pluginCreator___pluginOptions___modifyVars____gray_1',
  PluginCreatorPluginOptionsModifyVarsGray_2 = 'pluginCreator___pluginOptions___modifyVars____gray_2',
  PluginCreatorPluginOptionsModifyVarsGray_3 = 'pluginCreator___pluginOptions___modifyVars____gray_3',
  PluginCreatorPluginOptionsModifyVarsGray_4 = 'pluginCreator___pluginOptions___modifyVars____gray_4',
  PluginCreatorPluginOptionsModifyVarsGray_5 = 'pluginCreator___pluginOptions___modifyVars____gray_5',
  PluginCreatorPluginOptionsModifyVarsGray_6 = 'pluginCreator___pluginOptions___modifyVars____gray_6',
  PluginCreatorPluginOptionsModifyVarsGray_7 = 'pluginCreator___pluginOptions___modifyVars____gray_7',
  PluginCreatorPluginOptionsModifyVarsSizeXxs = 'pluginCreator___pluginOptions___modifyVars____size_xxs',
  PluginCreatorPluginOptionsModifyVarsSizeXs = 'pluginCreator___pluginOptions___modifyVars____size_xs',
  PluginCreatorPluginOptionsModifyVarsSizeS = 'pluginCreator___pluginOptions___modifyVars____size_s',
  PluginCreatorPluginOptionsModifyVarsSizeXm = 'pluginCreator___pluginOptions___modifyVars____size_xm',
  PluginCreatorPluginOptionsModifyVarsSizeM = 'pluginCreator___pluginOptions___modifyVars____size_m',
  PluginCreatorPluginOptionsModifyVarsSizeL = 'pluginCreator___pluginOptions___modifyVars____size_l',
  PluginCreatorPluginOptionsModifyVarsSizeXl = 'pluginCreator___pluginOptions___modifyVars____size_xl',
  PluginCreatorPluginOptionsModifyVarsSizeXxl = 'pluginCreator___pluginOptions___modifyVars____size_xxl',
  PluginCreatorPluginOptionsModifyVarsFontFamily = 'pluginCreator___pluginOptions___modifyVars____font_family',
  PluginCreatorPluginOptionsModifyVarsCodeFamily = 'pluginCreator___pluginOptions___modifyVars____code_family',
  PluginCreatorPluginOptionsModifyVarsShadowColor = 'pluginCreator___pluginOptions___modifyVars____shadow_color',
  PluginCreatorPluginOptionsModifyVarsShadowSmall = 'pluginCreator___pluginOptions___modifyVars____shadow_small',
  PluginCreatorPluginOptionsModifyVarsShadowMedium = 'pluginCreator___pluginOptions___modifyVars____shadow_medium',
  PluginCreatorPluginOptionsModifyVarsShadowLarge = 'pluginCreator___pluginOptions___modifyVars____shadow_large',
  PluginCreatorPluginOptionsModifyVarsComponentBackground = 'pluginCreator___pluginOptions___modifyVars____component_background',
  PluginCreatorPluginOptionsModifyVarsBackgroundColorLight = 'pluginCreator___pluginOptions___modifyVars____background_color_light',
  PluginCreatorPluginOptionsModifyVarsBackgroundColorBase = 'pluginCreator___pluginOptions___modifyVars____background_color_base',
  PluginCreatorPluginOptionsModifyVarsBackgroundColorDark = 'pluginCreator___pluginOptions___modifyVars____background_color_dark',
  PluginCreatorPluginOptionsModifyVarsBackgroundColorBlack = 'pluginCreator___pluginOptions___modifyVars____background_color_black',
  PluginCreatorPluginOptionsModifyVarsTextColorDark = 'pluginCreator___pluginOptions___modifyVars____text_color_dark',
  PluginCreatorPluginOptionsModifyVarsTextColorSecondaryDark = 'pluginCreator___pluginOptions___modifyVars____text_color_secondary_dark',
  PluginCreatorPluginOptionsModifyVarsInputBg = 'pluginCreator___pluginOptions___modifyVars____input_bg',
  PluginCreatorPluginOptionsModifyVarsPickerBg = 'pluginCreator___pluginOptions___modifyVars____picker_bg',
  PluginCreatorPluginOptionsModifyVarsBtnDefaultBg = 'pluginCreator___pluginOptions___modifyVars____btn_default_bg',
  PluginCreatorPluginOptionsModifyVarsSelectBackground = 'pluginCreator___pluginOptions___modifyVars____select_background',
  PluginCreatorPluginOptionsModifyVarsItemHoverBg = 'pluginCreator___pluginOptions___modifyVars____item_hover_bg',
  PluginCreatorPluginOptionsModifyVarsPrimaryColor = 'pluginCreator___pluginOptions___modifyVars____primary_color',
  PluginCreatorPluginOptionsModifyVarsTextColor = 'pluginCreator___pluginOptions___modifyVars____text_color',
  PluginCreatorPluginOptionsModifyVarsTextColorSecondary = 'pluginCreator___pluginOptions___modifyVars____text_color_secondary',
  PluginCreatorPluginOptionsModifyVarsHeadingColor = 'pluginCreator___pluginOptions___modifyVars____heading_color',
  PluginCreatorPluginOptionsModifyVarsBorderColorBase = 'pluginCreator___pluginOptions___modifyVars____border_color_base',
  PluginCreatorPluginOptionsModifyVarsBorderColorSplit = 'pluginCreator___pluginOptions___modifyVars____border_color_split',
  PluginCreatorPluginOptionsModifyVarsBorderRadiusBase = 'pluginCreator___pluginOptions___modifyVars____border_radius_base',
  PluginCreatorPluginOptionsModifyVarsBorderWidthBase = 'pluginCreator___pluginOptions___modifyVars____border_width_base',
  PluginCreatorPluginOptionsModifyVarsBorderColorDark = 'pluginCreator___pluginOptions___modifyVars____border_color_dark',
  PluginCreatorPluginOptionsModifyVarsMenuBg = 'pluginCreator___pluginOptions___modifyVars____menu_bg',
  PluginCreatorPluginOptionsModifyVarsMenuInlineToplevelItemHeight = 'pluginCreator___pluginOptions___modifyVars____menu_inline_toplevel_item_height',
  PluginCreatorPluginOptionsModifyVarsDropdownLineHeight = 'pluginCreator___pluginOptions___modifyVars____dropdown_line_height',
  PluginCreatorPluginOptionsModifyVarsTabsHorizontalMargin = 'pluginCreator___pluginOptions___modifyVars____tabs_horizontal_margin',
  PluginCreatorPluginOptionsModifyVarsTabsHorizontalPadding = 'pluginCreator___pluginOptions___modifyVars____tabs_horizontal_padding',
  PluginCreatorPluginOptionsModifyVarsTabsHorizontalPaddingLg = 'pluginCreator___pluginOptions___modifyVars____tabs_horizontal_padding_lg',
  PluginCreatorPluginOptionsModifyVarsTabsHorizontalPaddingSm = 'pluginCreator___pluginOptions___modifyVars____tabs_horizontal_padding_sm',
  PluginCreatorPluginOptionsModifyVarsCheckboxSize = 'pluginCreator___pluginOptions___modifyVars____checkbox_size',
  PluginCreatorPluginOptionsModifyVarsCheckboxCheckBg = 'pluginCreator___pluginOptions___modifyVars____checkbox_check_bg',
  PluginCreatorPluginOptionsModifyVarsPageHeaderPadding = 'pluginCreator___pluginOptions___modifyVars____page_header_padding',
  PluginCreatorPluginOptionsModifyVarsPageHeaderPaddingVertical = 'pluginCreator___pluginOptions___modifyVars____page_header_padding_vertical',
  PluginCreatorPluginOptionsModifyVarsPageHeaderBackColor = 'pluginCreator___pluginOptions___modifyVars____page_header_back_color',
  PluginCreatorPluginOptionsModifyVarsCollapseHeaderPadding = 'pluginCreator___pluginOptions___modifyVars____collapse_header_padding',
  PluginCreatorPluginOptionsModifyVarsCollapseHeaderBg = 'pluginCreator___pluginOptions___modifyVars____collapse_header_bg',
  PluginCreatorPluginOptionsModifyVarsCollapseContentPadding = 'pluginCreator___pluginOptions___modifyVars____collapse_content_padding',
  PluginCreatorPluginOptionsModifyVarsAvatarBg = 'pluginCreator___pluginOptions___modifyVars____avatar_bg',
  PluginCreatorPluginOptionsModifyVarsModalFooterPaddingVertical = 'pluginCreator___pluginOptions___modifyVars____modal_footer_padding_vertical',
  PluginCreatorPluginOptionsModifyVarsModalBodyPadding = 'pluginCreator___pluginOptions___modifyVars____modal_body_padding',
  PluginCreatorPluginOptionsModifyVarsModalFooterPaddingHorizontal = 'pluginCreator___pluginOptions___modifyVars____modal_footer_padding_horizontal',
  PluginCreatorPluginOptionsModifyVarsHeading_1Size = 'pluginCreator___pluginOptions___modifyVars____heading_1_size',
  PluginCreatorPluginOptionsModifyVarsHeading_2Size = 'pluginCreator___pluginOptions___modifyVars____heading_2_size',
  PluginCreatorPluginOptionsModifyVarsHeading_3Size = 'pluginCreator___pluginOptions___modifyVars____heading_3_size',
  PluginCreatorPluginOptionsModifyVarsFontSizeBase = 'pluginCreator___pluginOptions___modifyVars____font_size_base',
  PluginCreatorPluginOptionsModifyVarsFontSizeLg = 'pluginCreator___pluginOptions___modifyVars____font_size_lg',
  PluginCreatorPluginOptionsModifyVarsFontSizeSm = 'pluginCreator___pluginOptions___modifyVars____font_size_sm',
  PluginCreatorPluginOptionsModifyVarsPaddingLg = 'pluginCreator___pluginOptions___modifyVars____padding_lg',
  PluginCreatorPluginOptionsModifyVarsPaddingMd = 'pluginCreator___pluginOptions___modifyVars____padding_md',
  PluginCreatorPluginOptionsModifyVarsPaddingSm = 'pluginCreator___pluginOptions___modifyVars____padding_sm',
  PluginCreatorPluginOptionsModifyVarsPaddingXs = 'pluginCreator___pluginOptions___modifyVars____padding_xs',
  PluginCreatorPluginOptionsModifyVarsFormItemMarginBottom = 'pluginCreator___pluginOptions___modifyVars____form_item_margin_bottom',
  PluginCreatorPluginOptionsModifyVarsInputHeightBase = 'pluginCreator___pluginOptions___modifyVars____input_height_base',
  PluginCreatorPluginOptionsModifyVarsInputHeightLg = 'pluginCreator___pluginOptions___modifyVars____input_height_lg',
  PluginCreatorPluginOptionsModifyVarsInputHeightSm = 'pluginCreator___pluginOptions___modifyVars____input_height_sm',
  PluginCreatorPluginOptionsModifyVarsBtnHeightBase = 'pluginCreator___pluginOptions___modifyVars____btn_height_base',
  PluginCreatorPluginOptionsModifyVarsBtnHeightLg = 'pluginCreator___pluginOptions___modifyVars____btn_height_lg',
  PluginCreatorPluginOptionsModifyVarsBtnHeightSm = 'pluginCreator___pluginOptions___modifyVars____btn_height_sm',
  PluginCreatorPluginOptionsModifyVarsLineHeightBase = 'pluginCreator___pluginOptions___modifyVars____line_height_base',
  PluginCreatorPluginOptionsLibraryName = 'pluginCreator___pluginOptions___libraryName',
  PluginCreatorPluginOptionsStyle = 'pluginCreator___pluginOptions___style',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path: Maybe<StringQueryOperatorInput>
  component: Maybe<StringQueryOperatorInput>
  internalComponentName: Maybe<StringQueryOperatorInput>
  componentChunkName: Maybe<StringQueryOperatorInput>
  matchPath: Maybe<StringQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>
  context: Maybe<SitePageContextFilterInput>
  pluginCreator: Maybe<SitePluginFilterInput>
  pluginCreatorId: Maybe<StringQueryOperatorInput>
  componentPath: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  version: Maybe<Scalars['String']>
  pluginOptions: Maybe<SitePluginPluginOptions>
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath: Maybe<Scalars['String']>
  packageJson: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next: Maybe<SitePlugin>
  node: SitePlugin
  previous: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsWrapperStyle = 'pluginOptions___plugins___pluginOptions___wrapperStyle',
  PluginOptionsPluginsPluginOptionsIgnoreFileExtensions = 'pluginOptions___plugins___pluginOptions___ignoreFileExtensions',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsQuality = 'pluginOptions___plugins___pluginOptions___quality',
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  PluginOptionsPluginsPluginOptionsPathPrefix = 'pluginOptions___plugins___pluginOptions___pathPrefix',
  PluginOptionsPluginsPluginOptionsBackgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
  PluginOptionsPluginsPluginOptionsShowCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  PluginOptionsPluginsPluginOptionsMarkdownCaptions = 'pluginOptions___plugins___pluginOptions___markdownCaptions',
  PluginOptionsPluginsPluginOptionsWithWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  PluginOptionsPluginsPluginOptionsTracedSvg = 'pluginOptions___plugins___pluginOptions___tracedSVG',
  PluginOptionsPluginsPluginOptionsLoading = 'pluginOptions___plugins___pluginOptions___loading',
  PluginOptionsPluginsPluginOptionsDisableBgImageOnAlpha = 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha',
  PluginOptionsPluginsPluginOptionsDisableBgImage = 'pluginOptions___plugins___pluginOptions___disableBgImage',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
  PluginOptionsIgnoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsQuality = 'pluginOptions___quality',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsPathPrefix = 'pluginOptions___pathPrefix',
  PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsMarkdownCaptions = 'pluginOptions___markdownCaptions',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsTracedSvg = 'pluginOptions___tracedSVG',
  PluginOptionsLoading = 'pluginOptions___loading',
  PluginOptionsDisableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
  PluginOptionsDisableBgImage = 'pluginOptions___disableBgImage',
  PluginOptionsSiteUrl = 'pluginOptions___siteUrl',
  PluginOptionsJavascriptEnabled = 'pluginOptions___javascriptEnabled',
  PluginOptionsModifyVarsBlue = 'pluginOptions___modifyVars____blue',
  PluginOptionsModifyVarsBlueLight = 'pluginOptions___modifyVars____blue_light',
  PluginOptionsModifyVarsRed = 'pluginOptions___modifyVars____red',
  PluginOptionsModifyVarsRedLight = 'pluginOptions___modifyVars____red_light',
  PluginOptionsModifyVarsGreen = 'pluginOptions___modifyVars____green',
  PluginOptionsModifyVarsGreenLight = 'pluginOptions___modifyVars____green_light',
  PluginOptionsModifyVarsOrange = 'pluginOptions___modifyVars____orange',
  PluginOptionsModifyVarsOrangeLight = 'pluginOptions___modifyVars____orange_light',
  PluginOptionsModifyVarsGray_0 = 'pluginOptions___modifyVars____gray_0',
  PluginOptionsModifyVarsGray_1 = 'pluginOptions___modifyVars____gray_1',
  PluginOptionsModifyVarsGray_2 = 'pluginOptions___modifyVars____gray_2',
  PluginOptionsModifyVarsGray_3 = 'pluginOptions___modifyVars____gray_3',
  PluginOptionsModifyVarsGray_4 = 'pluginOptions___modifyVars____gray_4',
  PluginOptionsModifyVarsGray_5 = 'pluginOptions___modifyVars____gray_5',
  PluginOptionsModifyVarsGray_6 = 'pluginOptions___modifyVars____gray_6',
  PluginOptionsModifyVarsGray_7 = 'pluginOptions___modifyVars____gray_7',
  PluginOptionsModifyVarsSizeXxs = 'pluginOptions___modifyVars____size_xxs',
  PluginOptionsModifyVarsSizeXs = 'pluginOptions___modifyVars____size_xs',
  PluginOptionsModifyVarsSizeS = 'pluginOptions___modifyVars____size_s',
  PluginOptionsModifyVarsSizeXm = 'pluginOptions___modifyVars____size_xm',
  PluginOptionsModifyVarsSizeM = 'pluginOptions___modifyVars____size_m',
  PluginOptionsModifyVarsSizeL = 'pluginOptions___modifyVars____size_l',
  PluginOptionsModifyVarsSizeXl = 'pluginOptions___modifyVars____size_xl',
  PluginOptionsModifyVarsSizeXxl = 'pluginOptions___modifyVars____size_xxl',
  PluginOptionsModifyVarsFontFamily = 'pluginOptions___modifyVars____font_family',
  PluginOptionsModifyVarsCodeFamily = 'pluginOptions___modifyVars____code_family',
  PluginOptionsModifyVarsShadowColor = 'pluginOptions___modifyVars____shadow_color',
  PluginOptionsModifyVarsShadowSmall = 'pluginOptions___modifyVars____shadow_small',
  PluginOptionsModifyVarsShadowMedium = 'pluginOptions___modifyVars____shadow_medium',
  PluginOptionsModifyVarsShadowLarge = 'pluginOptions___modifyVars____shadow_large',
  PluginOptionsModifyVarsComponentBackground = 'pluginOptions___modifyVars____component_background',
  PluginOptionsModifyVarsBackgroundColorLight = 'pluginOptions___modifyVars____background_color_light',
  PluginOptionsModifyVarsBackgroundColorBase = 'pluginOptions___modifyVars____background_color_base',
  PluginOptionsModifyVarsBackgroundColorDark = 'pluginOptions___modifyVars____background_color_dark',
  PluginOptionsModifyVarsBackgroundColorBlack = 'pluginOptions___modifyVars____background_color_black',
  PluginOptionsModifyVarsTextColorDark = 'pluginOptions___modifyVars____text_color_dark',
  PluginOptionsModifyVarsTextColorSecondaryDark = 'pluginOptions___modifyVars____text_color_secondary_dark',
  PluginOptionsModifyVarsInputBg = 'pluginOptions___modifyVars____input_bg',
  PluginOptionsModifyVarsPickerBg = 'pluginOptions___modifyVars____picker_bg',
  PluginOptionsModifyVarsBtnDefaultBg = 'pluginOptions___modifyVars____btn_default_bg',
  PluginOptionsModifyVarsSelectBackground = 'pluginOptions___modifyVars____select_background',
  PluginOptionsModifyVarsItemHoverBg = 'pluginOptions___modifyVars____item_hover_bg',
  PluginOptionsModifyVarsPrimaryColor = 'pluginOptions___modifyVars____primary_color',
  PluginOptionsModifyVarsTextColor = 'pluginOptions___modifyVars____text_color',
  PluginOptionsModifyVarsTextColorSecondary = 'pluginOptions___modifyVars____text_color_secondary',
  PluginOptionsModifyVarsHeadingColor = 'pluginOptions___modifyVars____heading_color',
  PluginOptionsModifyVarsBorderColorBase = 'pluginOptions___modifyVars____border_color_base',
  PluginOptionsModifyVarsBorderColorSplit = 'pluginOptions___modifyVars____border_color_split',
  PluginOptionsModifyVarsBorderRadiusBase = 'pluginOptions___modifyVars____border_radius_base',
  PluginOptionsModifyVarsBorderWidthBase = 'pluginOptions___modifyVars____border_width_base',
  PluginOptionsModifyVarsBorderColorDark = 'pluginOptions___modifyVars____border_color_dark',
  PluginOptionsModifyVarsMenuBg = 'pluginOptions___modifyVars____menu_bg',
  PluginOptionsModifyVarsMenuInlineToplevelItemHeight = 'pluginOptions___modifyVars____menu_inline_toplevel_item_height',
  PluginOptionsModifyVarsDropdownLineHeight = 'pluginOptions___modifyVars____dropdown_line_height',
  PluginOptionsModifyVarsTabsHorizontalMargin = 'pluginOptions___modifyVars____tabs_horizontal_margin',
  PluginOptionsModifyVarsTabsHorizontalPadding = 'pluginOptions___modifyVars____tabs_horizontal_padding',
  PluginOptionsModifyVarsTabsHorizontalPaddingLg = 'pluginOptions___modifyVars____tabs_horizontal_padding_lg',
  PluginOptionsModifyVarsTabsHorizontalPaddingSm = 'pluginOptions___modifyVars____tabs_horizontal_padding_sm',
  PluginOptionsModifyVarsCheckboxSize = 'pluginOptions___modifyVars____checkbox_size',
  PluginOptionsModifyVarsCheckboxCheckBg = 'pluginOptions___modifyVars____checkbox_check_bg',
  PluginOptionsModifyVarsPageHeaderPadding = 'pluginOptions___modifyVars____page_header_padding',
  PluginOptionsModifyVarsPageHeaderPaddingVertical = 'pluginOptions___modifyVars____page_header_padding_vertical',
  PluginOptionsModifyVarsPageHeaderBackColor = 'pluginOptions___modifyVars____page_header_back_color',
  PluginOptionsModifyVarsCollapseHeaderPadding = 'pluginOptions___modifyVars____collapse_header_padding',
  PluginOptionsModifyVarsCollapseHeaderBg = 'pluginOptions___modifyVars____collapse_header_bg',
  PluginOptionsModifyVarsCollapseContentPadding = 'pluginOptions___modifyVars____collapse_content_padding',
  PluginOptionsModifyVarsAvatarBg = 'pluginOptions___modifyVars____avatar_bg',
  PluginOptionsModifyVarsModalFooterPaddingVertical = 'pluginOptions___modifyVars____modal_footer_padding_vertical',
  PluginOptionsModifyVarsModalBodyPadding = 'pluginOptions___modifyVars____modal_body_padding',
  PluginOptionsModifyVarsModalFooterPaddingHorizontal = 'pluginOptions___modifyVars____modal_footer_padding_horizontal',
  PluginOptionsModifyVarsHeading_1Size = 'pluginOptions___modifyVars____heading_1_size',
  PluginOptionsModifyVarsHeading_2Size = 'pluginOptions___modifyVars____heading_2_size',
  PluginOptionsModifyVarsHeading_3Size = 'pluginOptions___modifyVars____heading_3_size',
  PluginOptionsModifyVarsFontSizeBase = 'pluginOptions___modifyVars____font_size_base',
  PluginOptionsModifyVarsFontSizeLg = 'pluginOptions___modifyVars____font_size_lg',
  PluginOptionsModifyVarsFontSizeSm = 'pluginOptions___modifyVars____font_size_sm',
  PluginOptionsModifyVarsPaddingLg = 'pluginOptions___modifyVars____padding_lg',
  PluginOptionsModifyVarsPaddingMd = 'pluginOptions___modifyVars____padding_md',
  PluginOptionsModifyVarsPaddingSm = 'pluginOptions___modifyVars____padding_sm',
  PluginOptionsModifyVarsPaddingXs = 'pluginOptions___modifyVars____padding_xs',
  PluginOptionsModifyVarsFormItemMarginBottom = 'pluginOptions___modifyVars____form_item_margin_bottom',
  PluginOptionsModifyVarsInputHeightBase = 'pluginOptions___modifyVars____input_height_base',
  PluginOptionsModifyVarsInputHeightLg = 'pluginOptions___modifyVars____input_height_lg',
  PluginOptionsModifyVarsInputHeightSm = 'pluginOptions___modifyVars____input_height_sm',
  PluginOptionsModifyVarsBtnHeightBase = 'pluginOptions___modifyVars____btn_height_base',
  PluginOptionsModifyVarsBtnHeightLg = 'pluginOptions___modifyVars____btn_height_lg',
  PluginOptionsModifyVarsBtnHeightSm = 'pluginOptions___modifyVars____btn_height_sm',
  PluginOptionsModifyVarsLineHeightBase = 'pluginOptions___modifyVars____line_height_base',
  PluginOptionsLibraryName = 'pluginOptions___libraryName',
  PluginOptionsStyle = 'pluginOptions___style',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  resolve: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs: Maybe<StringQueryOperatorInput>
  browserAPIs: Maybe<StringQueryOperatorInput>
  ssrAPIs: Maybe<StringQueryOperatorInput>
  pluginFilepath: Maybe<StringQueryOperatorInput>
  packageJson: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  name: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  version: Maybe<Scalars['String']>
  main: Maybe<Scalars['String']>
  author: Maybe<Scalars['String']>
  license: Maybe<Scalars['String']>
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  name: Maybe<Scalars['String']>
  version: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  name: Maybe<Scalars['String']>
  version: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name: Maybe<StringQueryOperatorInput>
  description: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
  main: Maybe<StringQueryOperatorInput>
  author: Maybe<StringQueryOperatorInput>
  license: Maybe<StringQueryOperatorInput>
  dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  name: Maybe<Scalars['String']>
  version: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  plugins: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>
  name: Maybe<Scalars['String']>
  path: Maybe<Scalars['String']>
  wrapperStyle: Maybe<Scalars['String']>
  ignoreFileExtensions: Maybe<Array<Maybe<Scalars['String']>>>
  maxWidth: Maybe<Scalars['Int']>
  quality: Maybe<Scalars['Int']>
  linkImagesToOriginal: Maybe<Scalars['Boolean']>
  pathPrefix: Maybe<Scalars['String']>
  backgroundColor: Maybe<Scalars['String']>
  showCaptions: Maybe<Scalars['Boolean']>
  markdownCaptions: Maybe<Scalars['Boolean']>
  withWebp: Maybe<Scalars['Boolean']>
  tracedSVG: Maybe<Scalars['Boolean']>
  loading: Maybe<Scalars['String']>
  disableBgImageOnAlpha: Maybe<Scalars['Boolean']>
  disableBgImage: Maybe<Scalars['Boolean']>
  siteUrl: Maybe<Scalars['String']>
  javascriptEnabled: Maybe<Scalars['Boolean']>
  modifyVars: Maybe<SitePluginPluginOptionsModifyVars>
  libraryName: Maybe<Scalars['String']>
  style: Maybe<Scalars['Boolean']>
  short_name: Maybe<Scalars['String']>
  start_url: Maybe<Scalars['String']>
  background_color: Maybe<Scalars['String']>
  theme_color: Maybe<Scalars['String']>
  display: Maybe<Scalars['String']>
  icon: Maybe<Scalars['String']>
  pathCheck: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsFilterInput = {
  plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>
  name: Maybe<StringQueryOperatorInput>
  path: Maybe<StringQueryOperatorInput>
  wrapperStyle: Maybe<StringQueryOperatorInput>
  ignoreFileExtensions: Maybe<StringQueryOperatorInput>
  maxWidth: Maybe<IntQueryOperatorInput>
  quality: Maybe<IntQueryOperatorInput>
  linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>
  pathPrefix: Maybe<StringQueryOperatorInput>
  backgroundColor: Maybe<StringQueryOperatorInput>
  showCaptions: Maybe<BooleanQueryOperatorInput>
  markdownCaptions: Maybe<BooleanQueryOperatorInput>
  withWebp: Maybe<BooleanQueryOperatorInput>
  tracedSVG: Maybe<BooleanQueryOperatorInput>
  loading: Maybe<StringQueryOperatorInput>
  disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>
  disableBgImage: Maybe<BooleanQueryOperatorInput>
  siteUrl: Maybe<StringQueryOperatorInput>
  javascriptEnabled: Maybe<BooleanQueryOperatorInput>
  modifyVars: Maybe<SitePluginPluginOptionsModifyVarsFilterInput>
  libraryName: Maybe<StringQueryOperatorInput>
  style: Maybe<BooleanQueryOperatorInput>
  short_name: Maybe<StringQueryOperatorInput>
  start_url: Maybe<StringQueryOperatorInput>
  background_color: Maybe<StringQueryOperatorInput>
  theme_color: Maybe<StringQueryOperatorInput>
  display: Maybe<StringQueryOperatorInput>
  icon: Maybe<StringQueryOperatorInput>
  pathCheck: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsModifyVars = {
  _blue: Maybe<Scalars['String']>
  _blue_light: Maybe<Scalars['String']>
  _red: Maybe<Scalars['String']>
  _red_light: Maybe<Scalars['String']>
  _green: Maybe<Scalars['String']>
  _green_light: Maybe<Scalars['String']>
  _orange: Maybe<Scalars['String']>
  _orange_light: Maybe<Scalars['String']>
  _gray_0: Maybe<Scalars['String']>
  _gray_1: Maybe<Scalars['String']>
  _gray_2: Maybe<Scalars['String']>
  _gray_3: Maybe<Scalars['String']>
  _gray_4: Maybe<Scalars['String']>
  _gray_5: Maybe<Scalars['String']>
  _gray_6: Maybe<Scalars['String']>
  _gray_7: Maybe<Scalars['String']>
  _size_xxs: Maybe<Scalars['String']>
  _size_xs: Maybe<Scalars['String']>
  _size_s: Maybe<Scalars['String']>
  _size_xm: Maybe<Scalars['String']>
  _size_m: Maybe<Scalars['String']>
  _size_l: Maybe<Scalars['String']>
  _size_xl: Maybe<Scalars['String']>
  _size_xxl: Maybe<Scalars['String']>
  _font_family: Maybe<Scalars['String']>
  _code_family: Maybe<Scalars['String']>
  _shadow_color: Maybe<Scalars['String']>
  _shadow_small: Maybe<Scalars['String']>
  _shadow_medium: Maybe<Scalars['String']>
  _shadow_large: Maybe<Scalars['String']>
  _component_background: Maybe<Scalars['String']>
  _background_color_light: Maybe<Scalars['String']>
  _background_color_base: Maybe<Scalars['String']>
  _background_color_dark: Maybe<Scalars['String']>
  _background_color_black: Maybe<Scalars['String']>
  _text_color_dark: Maybe<Scalars['String']>
  _text_color_secondary_dark: Maybe<Scalars['String']>
  _input_bg: Maybe<Scalars['String']>
  _picker_bg: Maybe<Scalars['String']>
  _btn_default_bg: Maybe<Scalars['String']>
  _select_background: Maybe<Scalars['String']>
  _item_hover_bg: Maybe<Scalars['String']>
  _primary_color: Maybe<Scalars['String']>
  _text_color: Maybe<Scalars['String']>
  _text_color_secondary: Maybe<Scalars['String']>
  _heading_color: Maybe<Scalars['String']>
  _border_color_base: Maybe<Scalars['String']>
  _border_color_split: Maybe<Scalars['String']>
  _border_radius_base: Maybe<Scalars['String']>
  _border_width_base: Maybe<Scalars['String']>
  _border_color_dark: Maybe<Scalars['String']>
  _menu_bg: Maybe<Scalars['String']>
  _menu_inline_toplevel_item_height: Maybe<Scalars['String']>
  _dropdown_line_height: Maybe<Scalars['String']>
  _tabs_horizontal_margin: Maybe<Scalars['String']>
  _tabs_horizontal_padding: Maybe<Scalars['String']>
  _tabs_horizontal_padding_lg: Maybe<Scalars['String']>
  _tabs_horizontal_padding_sm: Maybe<Scalars['String']>
  _checkbox_size: Maybe<Scalars['String']>
  _checkbox_check_bg: Maybe<Scalars['String']>
  _page_header_padding: Maybe<Scalars['String']>
  _page_header_padding_vertical: Maybe<Scalars['String']>
  _page_header_back_color: Maybe<Scalars['String']>
  _collapse_header_padding: Maybe<Scalars['String']>
  _collapse_header_bg: Maybe<Scalars['String']>
  _collapse_content_padding: Maybe<Scalars['String']>
  _avatar_bg: Maybe<Scalars['String']>
  _modal_footer_padding_vertical: Maybe<Scalars['String']>
  _modal_body_padding: Maybe<Scalars['String']>
  _modal_footer_padding_horizontal: Maybe<Scalars['String']>
  _heading_1_size: Maybe<Scalars['String']>
  _heading_2_size: Maybe<Scalars['String']>
  _heading_3_size: Maybe<Scalars['String']>
  _font_size_base: Maybe<Scalars['String']>
  _font_size_lg: Maybe<Scalars['String']>
  _font_size_sm: Maybe<Scalars['String']>
  _padding_lg: Maybe<Scalars['String']>
  _padding_md: Maybe<Scalars['String']>
  _padding_sm: Maybe<Scalars['String']>
  _padding_xs: Maybe<Scalars['String']>
  _form_item_margin_bottom: Maybe<Scalars['String']>
  _input_height_base: Maybe<Scalars['String']>
  _input_height_lg: Maybe<Scalars['String']>
  _input_height_sm: Maybe<Scalars['String']>
  _btn_height_base: Maybe<Scalars['String']>
  _btn_height_lg: Maybe<Scalars['String']>
  _btn_height_sm: Maybe<Scalars['String']>
  _line_height_base: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsModifyVarsFilterInput = {
  _blue: Maybe<StringQueryOperatorInput>
  _blue_light: Maybe<StringQueryOperatorInput>
  _red: Maybe<StringQueryOperatorInput>
  _red_light: Maybe<StringQueryOperatorInput>
  _green: Maybe<StringQueryOperatorInput>
  _green_light: Maybe<StringQueryOperatorInput>
  _orange: Maybe<StringQueryOperatorInput>
  _orange_light: Maybe<StringQueryOperatorInput>
  _gray_0: Maybe<StringQueryOperatorInput>
  _gray_1: Maybe<StringQueryOperatorInput>
  _gray_2: Maybe<StringQueryOperatorInput>
  _gray_3: Maybe<StringQueryOperatorInput>
  _gray_4: Maybe<StringQueryOperatorInput>
  _gray_5: Maybe<StringQueryOperatorInput>
  _gray_6: Maybe<StringQueryOperatorInput>
  _gray_7: Maybe<StringQueryOperatorInput>
  _size_xxs: Maybe<StringQueryOperatorInput>
  _size_xs: Maybe<StringQueryOperatorInput>
  _size_s: Maybe<StringQueryOperatorInput>
  _size_xm: Maybe<StringQueryOperatorInput>
  _size_m: Maybe<StringQueryOperatorInput>
  _size_l: Maybe<StringQueryOperatorInput>
  _size_xl: Maybe<StringQueryOperatorInput>
  _size_xxl: Maybe<StringQueryOperatorInput>
  _font_family: Maybe<StringQueryOperatorInput>
  _code_family: Maybe<StringQueryOperatorInput>
  _shadow_color: Maybe<StringQueryOperatorInput>
  _shadow_small: Maybe<StringQueryOperatorInput>
  _shadow_medium: Maybe<StringQueryOperatorInput>
  _shadow_large: Maybe<StringQueryOperatorInput>
  _component_background: Maybe<StringQueryOperatorInput>
  _background_color_light: Maybe<StringQueryOperatorInput>
  _background_color_base: Maybe<StringQueryOperatorInput>
  _background_color_dark: Maybe<StringQueryOperatorInput>
  _background_color_black: Maybe<StringQueryOperatorInput>
  _text_color_dark: Maybe<StringQueryOperatorInput>
  _text_color_secondary_dark: Maybe<StringQueryOperatorInput>
  _input_bg: Maybe<StringQueryOperatorInput>
  _picker_bg: Maybe<StringQueryOperatorInput>
  _btn_default_bg: Maybe<StringQueryOperatorInput>
  _select_background: Maybe<StringQueryOperatorInput>
  _item_hover_bg: Maybe<StringQueryOperatorInput>
  _primary_color: Maybe<StringQueryOperatorInput>
  _text_color: Maybe<StringQueryOperatorInput>
  _text_color_secondary: Maybe<StringQueryOperatorInput>
  _heading_color: Maybe<StringQueryOperatorInput>
  _border_color_base: Maybe<StringQueryOperatorInput>
  _border_color_split: Maybe<StringQueryOperatorInput>
  _border_radius_base: Maybe<StringQueryOperatorInput>
  _border_width_base: Maybe<StringQueryOperatorInput>
  _border_color_dark: Maybe<StringQueryOperatorInput>
  _menu_bg: Maybe<StringQueryOperatorInput>
  _menu_inline_toplevel_item_height: Maybe<StringQueryOperatorInput>
  _dropdown_line_height: Maybe<StringQueryOperatorInput>
  _tabs_horizontal_margin: Maybe<StringQueryOperatorInput>
  _tabs_horizontal_padding: Maybe<StringQueryOperatorInput>
  _tabs_horizontal_padding_lg: Maybe<StringQueryOperatorInput>
  _tabs_horizontal_padding_sm: Maybe<StringQueryOperatorInput>
  _checkbox_size: Maybe<StringQueryOperatorInput>
  _checkbox_check_bg: Maybe<StringQueryOperatorInput>
  _page_header_padding: Maybe<StringQueryOperatorInput>
  _page_header_padding_vertical: Maybe<StringQueryOperatorInput>
  _page_header_back_color: Maybe<StringQueryOperatorInput>
  _collapse_header_padding: Maybe<StringQueryOperatorInput>
  _collapse_header_bg: Maybe<StringQueryOperatorInput>
  _collapse_content_padding: Maybe<StringQueryOperatorInput>
  _avatar_bg: Maybe<StringQueryOperatorInput>
  _modal_footer_padding_vertical: Maybe<StringQueryOperatorInput>
  _modal_body_padding: Maybe<StringQueryOperatorInput>
  _modal_footer_padding_horizontal: Maybe<StringQueryOperatorInput>
  _heading_1_size: Maybe<StringQueryOperatorInput>
  _heading_2_size: Maybe<StringQueryOperatorInput>
  _heading_3_size: Maybe<StringQueryOperatorInput>
  _font_size_base: Maybe<StringQueryOperatorInput>
  _font_size_lg: Maybe<StringQueryOperatorInput>
  _font_size_sm: Maybe<StringQueryOperatorInput>
  _padding_lg: Maybe<StringQueryOperatorInput>
  _padding_md: Maybe<StringQueryOperatorInput>
  _padding_sm: Maybe<StringQueryOperatorInput>
  _padding_xs: Maybe<StringQueryOperatorInput>
  _form_item_margin_bottom: Maybe<StringQueryOperatorInput>
  _input_height_base: Maybe<StringQueryOperatorInput>
  _input_height_lg: Maybe<StringQueryOperatorInput>
  _input_height_sm: Maybe<StringQueryOperatorInput>
  _btn_height_base: Maybe<StringQueryOperatorInput>
  _btn_height_lg: Maybe<StringQueryOperatorInput>
  _btn_height_sm: Maybe<StringQueryOperatorInput>
  _line_height_base: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsPlugins = {
  resolve: Maybe<Scalars['String']>
  id: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  version: Maybe<Scalars['String']>
  pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve: Maybe<StringQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
  pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>
  browserAPIs: Maybe<StringQueryOperatorInput>
  pluginFilepath: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>
}

export type SitePluginPluginOptionsPluginsPluginOptions = {
  wrapperStyle: Maybe<Scalars['String']>
  ignoreFileExtensions: Maybe<Array<Maybe<Scalars['String']>>>
  maxWidth: Maybe<Scalars['Int']>
  quality: Maybe<Scalars['Int']>
  linkImagesToOriginal: Maybe<Scalars['Boolean']>
  pathPrefix: Maybe<Scalars['String']>
  backgroundColor: Maybe<Scalars['String']>
  showCaptions: Maybe<Scalars['Boolean']>
  markdownCaptions: Maybe<Scalars['Boolean']>
  withWebp: Maybe<Scalars['Boolean']>
  tracedSVG: Maybe<Scalars['Boolean']>
  loading: Maybe<Scalars['String']>
  disableBgImageOnAlpha: Maybe<Scalars['Boolean']>
  disableBgImage: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  wrapperStyle: Maybe<StringQueryOperatorInput>
  ignoreFileExtensions: Maybe<StringQueryOperatorInput>
  maxWidth: Maybe<IntQueryOperatorInput>
  quality: Maybe<IntQueryOperatorInput>
  linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>
  pathPrefix: Maybe<StringQueryOperatorInput>
  backgroundColor: Maybe<StringQueryOperatorInput>
  showCaptions: Maybe<BooleanQueryOperatorInput>
  markdownCaptions: Maybe<BooleanQueryOperatorInput>
  withWebp: Maybe<BooleanQueryOperatorInput>
  tracedSVG: Maybe<BooleanQueryOperatorInput>
  loading: Maybe<StringQueryOperatorInput>
  disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>
  disableBgImage: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  title: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  keywords: Maybe<Scalars['String']>
  siteUrl: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  title: Maybe<StringQueryOperatorInput>
  description: Maybe<StringQueryOperatorInput>
  keywords: Maybe<StringQueryOperatorInput>
  siteUrl: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars['String']>
  ne: Maybe<Scalars['String']>
  in: Maybe<Array<Maybe<Scalars['String']>>>
  nin: Maybe<Array<Maybe<Scalars['String']>>>
  regex: Maybe<Scalars['String']>
  glob: Maybe<Scalars['String']>
}

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<
  ImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type PagesQueryQueryVariables = {}

export type PagesQueryQuery = { allSitePage: { nodes: Array<Pick<SitePage, 'path'>> } }

export type IndexLayoutQueryQueryVariables = {}

export type IndexLayoutQueryQuery = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'keywords'>> }> }

export type PageTemplateQueryQueryVariables = {
  slug: Scalars['String']
}

export type PageTemplateQueryQuery = {
  site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }>
  markdownRemark: Maybe<Pick<MarkdownRemark, 'html' | 'excerpt'> & { frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'title'>> }>
}
