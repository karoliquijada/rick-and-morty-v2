import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
query EpisodesPagination($pageNumber:Int!) {
	episodes(page:$pageNumber) {
    info {
      count
      pages
    }   
    results {
      id
      name
      air_date
    }     
  }
}`;