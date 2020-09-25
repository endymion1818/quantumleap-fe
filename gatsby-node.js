const path = require(`path`)
const _ = require(`lodash`)
const { paginate } = require(`gatsby-awesome-pagination`)
// const { useRichTextSerialiser } = require(webiny-richtext-serializer')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/components/Templates/Post.tsx`)
  const categoryTemplate = path.resolve(`./src/components/Templates/Category.tsx`)
  const archiveTemplate = path.resolve(`./src/components/Templates/Archive.tsx`)

  return graphql(
    `
      {
        webinyHeadlessCms {
          listPosts {
            data {
              id
              slug
            }
          }
        }
        webinyHeadlessCms {
          listEpisodes {
            data {
              id
              slug
            }
          }
        }
        webinyHeadlessCms {
          listPages {
            data {
              id
              slug
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }
    // const stuff = [
    //   ...result.data.webinyHeadlessCms.listPosts.data,
    //   ...result.data.webinyHeadlessCms.listEpisodes.data,
    //   ...result.data.webinyHeadlessCms.listPages.data,
    // ]

    const posts = result.data.webinyHeadlessCms.listPosts.data

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: `/post/${post.slug}`,
        component: blogPostTemplate,
        context: {
          slug: post.slug,
          previous,
          next,
        },
      })
    })
    const episodes = result.data.webinyHeadlessCms.listEpisodes.data

    episodes.forEach((post, index) => {
      const previous = index === episodes.length - 1 ? null : episodes[index + 1].node
      const next = index === 0 ? null : episodes[index - 1].node
      createPage({
        path: `/episode/${post.slug}`,
        component: blogPostTemplate,
        context: {
          slug: post.slug,
          previous,
          next,
        },
      })
    })
    const pages = result.data.webinyHeadlessCms.listPages.data

    pages.forEach((post, index) => {
      const previous = index === pages.length - 1 ? null : pages[index + 1].node
      const next = index === 0 ? null : pages[index - 1].node
      createPage({
        path: `/${post.slug}`,
        component: blogPostTemplate,
        context: {
          slug: post.slug,
          previous,
          next,
        },
      })
    })
    // archive pages
    paginate({
      createPage,
      items: pages,
      itemsPerPage: 10,
      pathPrefix: '/pages/',
      component: archiveTemplate,
    })
    // taxonomy pages
    // let categories = []
    // _.each(posts, (edge) => {
    //   if (_.get(edge, `node.frontmatter.categories`)) {
    //     categories = categories.concat(posts.)
    //   }
    // })
    // categories = _.uniq(categories)

    // categories.forEach((category) => {
    //   createPage({
    //     path: `/categories/${_.kebabCase(category)}/`,
    //     component: categoryTemplate,
    //     context: {
    //       category,
    //     },
    //   })
    // })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // console.log(node)

  // if (node.internal.type === `MarkdownRemark`) {
  //   const slug = createFilePath({ node, getNode, basePath: `pages` })
  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value: slug,
  //   })
  // }
}
