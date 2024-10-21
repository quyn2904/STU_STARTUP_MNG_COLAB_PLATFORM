import Header from '../../layouts/Header';
import Sidebar from './components/Sidebar';
import TaskManagementForm from './components/TaskManagementForm';

const ProjectManagementPage = () => {
  return (
    <>
      <Header />
      <div className="mx-auto mt-7 grid grid-cols-11 gap-5 pl-16 pr-8">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <TaskManagementForm />
        </div>
      </div>
    </>
  );
};

export default ProjectManagementPage;
