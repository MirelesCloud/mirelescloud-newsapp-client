import * as React from 'react'
import { useState } from 'react'
import { ArticlesListQuery } from './generated/graphql'
import { CardContainer, CardBody, CardImage, InfoDetails,
  CardHeader, CardText, CardFooter, ModalWrapper, ModalContainer, ModalContent, ModalHeader, ModalSubHeader,
  ModalText, CloseModal
} from './Styles'
import { Modal, ModalProvider } from './Modal'

interface Props {
  data: ArticlesListQuery
}

const ArticlesList: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <>
      {!!data.articles &&
        data.articles.map((article, i) => (
          !!article && (
            <CardContainer key={i}>
              <Article urlToImage={article.urlToImage!} title={article?.title!} description={article?.description!} content={article?.content!}/>
             
            </CardContainer>
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
const Article: React.FC<IArticle> = ({ title, description, urlToImage, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <CardImage src={urlToImage} alt={title} onClick={() => setIsModalOpen(true)}/>
      <CardBody>
        <CardHeader>{title}</CardHeader>
        <CardText>{description}</CardText>
      </CardBody>

      {isModalOpen && 
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalWrapper>
            <ModalContainer>
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