import React from 'react';
import { useArticlesListQuery } from './generated/graphql';
import ArticlesList from './ArticlesList'
import { MainContainer, ContentWrapper } from './Styles'


const App = () => {
  const { data, error, loading } = useArticlesListQuery();

   if (loading) {
     return <div>Loading...</div>
   }

   if (error ?? !data) {
     return <div>We have a major malfunction!!!</div>
   }
  return (
    <MainContainer>
      <ContentWrapper>
        <ArticlesList data={data} />
      </ContentWrapper>
    </MainContainer>
   )
}

export default App;
