import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query GetPosts {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
    const query = gql`
        query GetRecentPosts {
        posts(last: 3, orderBy: createdAt_ASC) {
          createdAt
          featuredImage {
            url
          }
          slug
          title
        }
      }
    `;
    const result = await request(graphqlAPI, query);

    return result.posts;
};