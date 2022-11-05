import { useQuery } from '@tanstack/react-query';
import axios from './configurations/axios';
import { HomeType } from './types/database';

enum KEY {
  HOME = 'home'
}

export const useHome = () => {
  const { data, isLoading } = useQuery<HomeType>(
    [KEY.HOME],
    async () => {
      const response = await axios.get(`/${KEY.HOME}.json`);

      return response.data;
    },
    {
      initialData: {
        welcome: {
          button: '',
          feature: '',
          headline: '',
          text: '',
          slideshow: []
        }
      } as HomeType
    }
  );

  return { data, isLoading };
};
