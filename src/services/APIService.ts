import { ICharacterInfo } from '../types/ICharacterInfo';

export const fetchCharacters = async (page: number): Promise<{ data: ICharacterInfo }> => {
  const URL = `https://rickandmortyapi.com/api/character?page=${page}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
