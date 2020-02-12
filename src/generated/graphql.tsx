import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};

export type Articles = {
   __typename?: 'Articles',
  source?: Maybe<Source>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  urlToImage?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Query = {
   __typename?: 'Query',
  articles?: Maybe<Array<Maybe<Articles>>>,
};

export type Source = {
   __typename?: 'Source',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};


export type ArticlesListQueryVariables = {};


export type ArticlesListQuery = (
  { __typename?: 'Query' }
  & { articles: Maybe<Array<Maybe<(
    { __typename?: 'Articles' }
    & Pick<Articles, 'title' | 'description' | 'content' | 'urlToImage'>
    & { source: Maybe<(
      { __typename?: 'Source' }
      & Pick<Source, 'id' | 'name'>
    )> }
  )>>> }
);


export const ArticlesListDocument = gql`
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
    `;
export type ArticlesListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ArticlesListQuery, ArticlesListQueryVariables>, 'query'>;

    export const ArticlesListComponent = (props: ArticlesListComponentProps) => (
      <ApolloReactComponents.Query<ArticlesListQuery, ArticlesListQueryVariables> query={ArticlesListDocument} {...props} />
    );
    
export type ArticlesListProps<TChildProps = {}> = ApolloReactHoc.DataProps<ArticlesListQuery, ArticlesListQueryVariables> & TChildProps;
export function withArticlesList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ArticlesListQuery,
  ArticlesListQueryVariables,
  ArticlesListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ArticlesListQuery, ArticlesListQueryVariables, ArticlesListProps<TChildProps>>(ArticlesListDocument, {
      alias: 'articlesList',
      ...operationOptions
    });
};

/**
 * __useArticlesListQuery__
 *
 * To run a query within a React component, call `useArticlesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useArticlesListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ArticlesListQuery, ArticlesListQueryVariables>) {
        return ApolloReactHooks.useQuery<ArticlesListQuery, ArticlesListQueryVariables>(ArticlesListDocument, baseOptions);
      }
export function useArticlesListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArticlesListQuery, ArticlesListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ArticlesListQuery, ArticlesListQueryVariables>(ArticlesListDocument, baseOptions);
        }
export type ArticlesListQueryHookResult = ReturnType<typeof useArticlesListQuery>;
export type ArticlesListLazyQueryHookResult = ReturnType<typeof useArticlesListLazyQuery>;
export type ArticlesListQueryResult = ApolloReactCommon.QueryResult<ArticlesListQuery, ArticlesListQueryVariables>;