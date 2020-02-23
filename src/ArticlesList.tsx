import * as React from 'react'
import { useState } from 'react'
import { ArticlesListQuery } from './generated/graphql'
import { Card, 
  CardBody, 
  CardImage,
  CardHeader, 
  CardFooter, 
  ModalWrapper, 
  ModalContainer, 
  ModalHeader,
  ModalText,
  CloseModal
} from './Styles'
import { Modal } from './Modal'

interface Props {
  data: ArticlesListQuery
}

const ArticlesList: React.FC<Props> = ({ data }) => {
  
  return (
    <>
      {!!data.articles &&
        data.articles.map((article, i) => (
          !!article && (
            <Card key={i}>
              <Article urlToImage={article.urlToImage!} title={article?.title!} description={article?.description!} content={article?.content!} />
              <CardFooter>{article?.source?.name!}</CardFooter>
            </Card>
          )
        ))
      }
    </>
  )
}

export default ArticlesList;

interface IArticle {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
}

const Article: React.FC<IArticle> = ({ title, description, urlToImage, content}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <CardImage src={urlToImage} alt={title} onClick={() => setIsModalOpen(true)}/>
      <CardBody>{title}</CardBody>

      {isModalOpen && 
        <Modal>

          <ModalWrapper>
            <ModalContainer>
            <CloseModal onClick={() => setIsModalOpen(false)}><span aria-hidden="true">&times;</span></CloseModal>


              <ModalHeader>
                {description}
              </ModalHeader>
              <ModalText>
                {content}
              </ModalText>
            </ModalContainer>
          </ModalWrapper>
        </Modal>
      }
    </>
  )
}