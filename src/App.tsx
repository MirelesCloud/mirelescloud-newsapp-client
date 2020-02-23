import React, { Fragment } from 'react'
import { useArticlesListQuery } from './generated/graphql'
import ArticlesList from './ArticlesList'
import Header from './Header'
import { MainContainer, ContentWrapper, Footer } from './Styles'
import { ModalProvider } from './Modal'
import { LoadContainer, PageContainer } from './Styles'

const App = () => {
  const { data, error, loading } = useArticlesListQuery();

   if (loading) {
     return (<LoadContainer><h3>Loading...</h3></LoadContainer>)
   }

   if (error ?? !data) {
     return (<LoadContainer><h3>Error! Houston we have a problem</h3></LoadContainer>)
   }
  return (
    <PageContainer>
      <Header/>
      <MainContainer>
        <ModalProvider>
          <ContentWrapper>
            <ArticlesList data={data} />
          </ContentWrapper>
        </ModalProvider>
        <Footer><p>&copy; 2020 <a href="https://mirelescloud.com" target="_blank"><span style={{color: "#000000"}}>MirelesCloud</span></a></p></Footer>
      </MainContainer>
      
    </PageContainer>
   )
}

export default App;
