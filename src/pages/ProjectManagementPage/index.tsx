import { Outlet } from 'react-router-dom';
import NavBar from './layouts/NavBar';

const ProjectManagementPage = () => {
  return (
    <>
      <NavBar />
      <div className="mx-auto mt-7 px-5">
        <Outlet />
      </div>
    </>
  );
};

export default ProjectManagementPage;
