import { useTheme } from 'styled-components';
import Loading from '../components/Loading';
import Welcome from '../components/Welcome';
import { useHome } from '../services';

const Home = (): JSX.Element => {
  const { data: { welcome }, isLoading } = useHome();
  const { loading } = useTheme();

  return (
    isLoading ? (
      <Loading
        background={loading.background}
        color={loading.color}
      />
    )
      : (
        <>
          <Welcome
            data={welcome}
            className="welcome"
          />
          <div />
        </>
      )
  );
};

export default Home;
