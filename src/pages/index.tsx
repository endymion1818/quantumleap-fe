import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Atoms/Container'
import Wrapper from '../components/Atoms/Wrapper'
import Entry from '../components/Templates/Entry'
import Row from '../components/Atoms/Row'

export interface IIndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export const frontmatter = {
  title: 'Home',
  path: '/',
  description: 'Welcome to Free Babylon 5 campaign site.',
  MainNavOrder: 1,
  secondaryNavMenu: 'About',
  secondaryNavOrder: 1,
  primaryNavMenu: 'About',
  primaryNavOrder: 1,
}

const IndexPage: FC<IIndexPageProps> = ({ data }) => (
  <Entry pageTitle={frontmatter.title} pageDescription={frontmatter.description}>
    <Wrapper>
      <Container>
        <Row size={1}>
          <h1>Home</h1>
          {console.log(data)}
          {data.webinyHeadlessCms.listPosts.data.map((post) => (
            <div>{post.title}</div>
          ))}
        </Row>
      </Container>
    </Wrapper>
  </Entry>
)

export const query = graphql`
  {
    webinyHeadlessCms {
      listPosts {
        data {
          id
          createdOn
          title
          body
        }
      }
    }
  }
`

export default IndexPage
