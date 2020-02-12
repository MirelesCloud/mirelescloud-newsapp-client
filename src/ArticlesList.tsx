import * as React from 'react'
import { ArticlesListQuery } from './generated/graphql'
import { CardContainer, CardBody, CardImage, InfoDetails,
  CardHeader, CardText, CardFooter
} from './Styles'

interface Props {
  data: ArticlesListQuery
}

const ArticlesList: React.FC<Props> = ({ data }) => {
  return (
    <>
      {!!data.articles &&
        data.articles.map((article, i) => (
          !!article && (
            <CardContainer key={i}>
              <CardImage src={article.urlToImage!}/>
              <CardBody>
                <CardHeader>{article?.title}</CardHeader>
                <CardText>{article?.description}</CardText>
                <CardFooter>{article?.source?.name}</CardFooter>
              </CardBody>
            </CardContainer>
          )
        ))
      }
    </>

  )
}

export default ArticlesList;

