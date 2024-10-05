import Header from '../../layouts/Header';
import FeaturedEvents from './components/FeaturedEvents';
import FeaturedProjects from './components/FeaturedProjects';
import Welcome from './components/Welcome';

const Homepage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Welcome />
      <FeaturedEvents />
      <FeaturedProjects/>
      <div className="h-[100vh]"></div>
    </>
  );
};

export default Homepage;
