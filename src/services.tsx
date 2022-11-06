import { useQuery } from '@tanstack/react-query';
import axios from './configurations/axios';
import { HomeType, Error404Type } from './types/database';

enum KEY {
  HOME = 'home',
  ERROR404 = 'error404'
}

export const useError404 = () => {
  const { data, isLoading } = useQuery<Error404Type>(
    [KEY.ERROR404],
    async () => axios.get(`/${KEY.ERROR404}.json`).then(
      (response) => response.data
    ),
    {
      initialData: {
        button: '',
        description: '',
        message: '',
        statusCode: ''
      } as Error404Type
    }
  );

  return { data, isLoading };
};

export const useHome = () => {
  const { data, isLoading } = useQuery<HomeType>(
    [KEY.HOME],
    async () => axios.get(`/${KEY.HOME}.json`).then(
      (response) => response.data
    ),
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
