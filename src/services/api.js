import request, { gql } from 'graphql-request'


const graphqlAPI = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clt7dm9ka0qwf07ut5wtabc3r/master'

export const getMySites = async () => {
	const query = gql`
    query MySitesId {
      mySitesId {
        description
        githubLink
        publishedAt
        slug
        title
        updatedAt
        vercelLink
        image {
          url
        }
      }
    }
	`

	const  sites  = await request(graphqlAPI, query)
	return sites
}

