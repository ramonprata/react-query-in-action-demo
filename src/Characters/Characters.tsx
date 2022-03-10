import React, { useState } from 'react';
import { useQuery } from 'react-query';
// import { ICharacter } from '../types/Character';

import * as APIService from '../services/APIService';
import CharacterItem from '../CharacterItem/CharacterItem';
import { ICharacterInfo } from '../types/ICharacterInfo';
import Controls from '../Controls/Controls';

interface CharactersProps { }

const Characters: React.FC<CharactersProps> = () => {
  const [page, setPage] = useState(1);

  const loadData = async (qParams: any) => {

    return await APIService.fetchCharacters(qParams?.queryKey[1]);
  }

  const { data, isLoading, isError } = useQuery<unknown, unknown, ICharacterInfo>(['characters-page', page], loadData, {
    keepPreviousData: true
  });

  const characters = data?.results;

  if (isError) {
    return <div>ERROR</div>
  }

  if (isLoading) {
    return <div>LOADING...</div>
  }


  return (
    <div className='content'>

      <div className='characters'>
        {characters?.map(character => (
          <CharacterItem character={character} key={character.name} />
        ))}
      </div>

      <Controls page={page} onChangePage={(value) => setPage(newPage => newPage += value)} disableNext={!!data?.next === null} />
    </div>)
};

export default Characters;
