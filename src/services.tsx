import { useQuery } from '@tanstack/react-query';
import axios from './configurations/axios';
import { HomeType } from './types/database';

// TODO: Defining initial data

enum KEY {
  HOME = 'home'
}

export const useHome = () => {
  const { data, isLoading } = useQuery<HomeType>(
    [KEY.HOME],
    async () => axios.get(`/${KEY.HOME}.json`).then((response) => response.data),
    {
      initialData: {
        welcome: {
          button: '',
          feature: '',
          headline: '',
          text: ''
        }
      } as HomeType
    }
  );

  return { data, isLoading };
};
