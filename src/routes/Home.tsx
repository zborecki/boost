import Welcome from '../components/Welcome';
import { useHome } from '../services';

const Home = (): JSX.Element => {
  const { data: { welcome }, isLoading } = useHome();

  return (
    isLoading ? <span>Loading...</span>
      : (
        <>
          <Welcome data={welcome} />
          <div />
        </>
      )
  );
};

export default Home;
