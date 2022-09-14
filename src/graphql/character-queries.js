import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
query EpisodesPagination($pageNumber:Int!) {
	characters(page:$pageNumber) {
    info {
      count
      pages
      next
      prev
    }     
    results {
      id
      name
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }

      image

    }     
  }
}`;


export const GET_DETAILED_CHARACTER = gql`
query getCharacter($characterId: ID!){
  character(id:$characterId) {
      id
      name
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }
      image  
  }
}   
`;

export const GET_FILTERED_CHARACTER = gql`
query getCharacterByName($pageNumber:Int!, $nameToSearch: String!){
  characters(page: $pageNumber, filter:{name:$nameToSearch }) {
    info {
      count
      pages
    }
    results {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image          
    }
  }
}  
`;

/* export const GET_DETAILED_CHARACTER = gql`
query getCharacter($id:ID!){
  character(id:$ID) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image          
  }
}  
`; */