import IconWithNum from '../common/components/IconWithNum';
import Logo from '../common/components/Logo';
import { Avatar, AvatarImage } from '../components/ui/avatar';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { VscMail } from 'react-icons/vsc';

const user = {
  name: 'John Doe',
  avatar_url:
    'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg',
};

const Header = () => {
  return (
    <div className="grid h-16 grid-cols-10 items-center gap-10 px-20 pb-5 pt-7">
      <div className="col-span-1">
        <Logo />
      </div>
      <div className="col-span-6 pl-20">
        <ul className="flex gap-7">
          <li className="krona-one-regular font-semibold text-main underline decoration-yellow-500 underline-offset-4">
            Home
          </li>
          <li className="krona-one-regular font-semibold text-main decoration-yellow-500 hover:underline hover:underline-offset-4">
            New Feed
          </li>
          <li className="krona-one-regular font-semibold text-main decoration-yellow-500 hover:underline hover:underline-offset-4">
            Projects
          </li>
        </ul>
      </div>
      {user ? (
        <div className="col-span-3 flex items-center justify-end gap-5">
          <button className="h-9 w-40 rounded-3xl border-2 border-main px-2 py-1 font-semibold text-main">
            Create A Project
          </button>
          <IconWithNum
            Icon={VscMail}
            number={0}
            onClick={() => console.log('ahihi')}
          />
          <IconWithNum
            Icon={IoMdNotificationsOutline}
            number={1}
            onClick={() => console.log('ahihi')}
          />
          <Avatar>
            <AvatarImage src={user.avatar_url} alt="avatar" />
          </Avatar>
        </div>
      ) : (
        <div className="col-span-3 flex justify-end gap-5">
          <button className="h-9 w-24 rounded-3xl border-2 border-main px-2 py-1 font-semibold text-main">
            Login
          </button>
          <button className="h-9 w-24 rounded-3xl border bg-main px-2 py-1 font-semibold text-white">
            Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
