import { Outlet } from 'react-router-dom';
import Header from '../../layouts/Header';
import Sidebar from './components/Sidebar';

const ProjectManagementPage = () => {
  return (
    <>
      <Header />
      <div className="mx-auto mt-7 grid grid-cols-11 gap-5 pl-16 pr-8">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ProjectManagementPage;
