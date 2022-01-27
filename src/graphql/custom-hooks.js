import { useQuery } from '@apollo/client';
import { GET_CHARACTERS, GET_FILTERED_CHARACTER, GET_DETAILED_CHARACTER } from './character-queries';
import { GET_EPISODES  } from './episodes-queries';

export const useCharacters = (pageNumber) =>  {
    const result = useQuery(GET_CHARACTERS, {
        variables: { pageNumber },
    });
    return result;
}

export const useCharacter = (characterId) =>  {
    const result = useQuery(GET_DETAILED_CHARACTER, {
        variables: { characterId },
    });
    return result;
}

export const useCharacterByName = ( pageNumber, nameToSearch ) => {
    const result = useQuery(GET_FILTERED_CHARACTER, { 
        variables: { pageNumber, nameToSearch },
    });   
    return result;
}

export const useEpisodes = (pageNumber) =>  {
    const result = useQuery(GET_EPISODES, {
        variables: { pageNumber },
    });
    return result;
}

