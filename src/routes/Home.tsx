import Loading from '../components/Loading';
import Welcome from '../components/Welcome';
import { useHome } from '../services';

const Home = (): JSX.Element => {
  const { data: { welcome }, isLoading } = useHome();

  return (
    isLoading ? <Loading />
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
