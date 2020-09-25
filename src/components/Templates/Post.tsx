import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import Container from '../Atoms/Container'
import Link from '../Atoms/Link'
import Wrapper from '../Atoms/Wrapper'
import Entry from './Entry'

interface IPostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        type: string
        description: string
        featuredImageAlt: string
        featuredImage: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
        title: string
        date: string
        categories: string[]
        tags: string[]
      }
    }
    nextPost?: {
      frontmatter: {
        title: string
      }
      fields: {
        slug: string
      }
    }
    prevPost?: {
      frontmatter: {
        title: string
      }
      fields: {
        slug: string
      }
    }
  }
}

const PostTemplate: FC<IPostTemplateProps> = ({ data }) => {
  const { title, description } = data.webinyHeadlessCms.getPost.data
  return (
    <Entry pageTitle={title} pageDescription={description}>
      <Wrapper>
        <Container>
          <article className="h-entry">
            <header>
              <h1>{title}</h1>
              {/* {featuredImage && (
                <Img fluid={featuredImage.childImageSharp.fluid} alt={featuredImageAlt} />
              )} */}
            </header>
            {/* <section dangerouslySetInnerHTML={{ __html: html }} />
            {type !== 'page' && (
              <footer>
                <time>Published on: {date}</time>
                {categories ? (
                  <>
                    <h4>Categories:</h4>
                    <ul>
                      {categories.map((category) => (
                        <li key={category}>
                          <Link href={`/categories/${category.replace(/ /g, '-')}`}>
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </footer>
            )} */}
          </article>
        </Container>
      </Wrapper>
    </Entry>
  )
}

export default PostTemplate

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    webinyHeadlessCms {
      getPost(where: { slug: $slug }) {
        data {
          title
          slug
          description
          createdOn
        }
      }
    }
  }
`
