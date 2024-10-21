import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-svh rounded-xl bg-[#EEF2F5] px-3 pt-10">
      <p className="text-xl font-bold">Project Management</p>
      <ul className="mt-7">
        <li className="mt-2">
          <Link to="/" className="font-semibold text-[#013C5A]">
            Task Management
          </Link>
        </li>
        <li className="mt-2">
          <Link to="/" className="">
            Timeline
          </Link>
        </li>
        <li className="mt-2">
          <Link to="/" className="mt-2">
            Calendar Mentor
          </Link>
        </li>
        <li className="mt-2">
          <Link to="/" className="mt-2">
            Financial Report
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
