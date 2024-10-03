import Logo from '../common/components/Logo';

const Header = () => {
  return (
    <div className="grid h-16 grid-cols-10 items-center gap-10 px-20 pb-5 pt-7">
      <div className="col-span-1">
        <Logo />
      </div>
      <div className="col-span-7 pl-20">
        <ul className="flex gap-7">
          <li className="text-main krona-one-regular font-semibold underline decoration-yellow-500 underline-offset-4">
            Home
          </li>
          <li className="text-main krona-one-regular font-semibold decoration-yellow-500 hover:underline hover:underline-offset-4">
            New Feed
          </li>
          <li className="text-main krona-one-regular font-semibold decoration-yellow-500 hover:underline hover:underline-offset-4">
            Projects
          </li>
        </ul>
      </div>
      <div className="col-span-2 flex justify-end gap-5">
        <button className="text-main border-main h-9 w-24 rounded-3xl border-2 px-2 py-1 font-semibold">
          Login
        </button>
        <button className="bg-main h-9 w-24 rounded-3xl border px-2 py-1 font-semibold text-white">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Header;
