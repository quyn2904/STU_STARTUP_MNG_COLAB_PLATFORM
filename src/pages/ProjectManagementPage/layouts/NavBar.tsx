import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="mt-8 flex items-center justify-between bg-[#EEF2F5] px-20 py-4">
      <Link
        to="/project-management"
        className="text-2xl font-semibold hover:text-blue-500"
      >
        Task Management
      </Link>
      <Link to="/project-management" className="text-2xl font-semibold">
        Timeline
      </Link>
      <Link to="/project-management" className="text-2xl font-semibold">
        Calender Mentor
      </Link>
      <Link to="/project-management" className="text-2xl font-semibold">
        Financial Report
      </Link>
    </div>
  );
};

export default NavBar;
