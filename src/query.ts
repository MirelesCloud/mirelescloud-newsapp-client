import gql from 'graphql-tag'

export const QUERY_ARTICLES_LIST = gql`
  query ArticlesList {
    articles {
      title
      description
      content
      urlToImage
      source {
        id
        name
      }
    }
  }
`