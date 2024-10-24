import { Outlet } from 'react-router-dom';
import Header from '../layouts/Header';

const Base = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Base;
