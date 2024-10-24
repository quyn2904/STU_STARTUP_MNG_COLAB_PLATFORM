import FeaturedEvents from './components/FeaturedEvents';
import Welcome from './components/Welcome';

const Homepage = (): JSX.Element => {
  return (
    <>
      <Welcome />
      <FeaturedEvents />
      <div className="h-[100vh]"></div>
    </>
  );
};

export default Homepage;
