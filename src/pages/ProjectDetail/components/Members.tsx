import { Avatar, AvatarImage } from '../../../components/ui';

const Members = () => {
  return (
    <>
      <p className="mb-3 font-bold">Project Members</p>
      <div className="grid grid-cols-2 rounded-lg bg-white px-3 pt-3 text-sm">
        <div className="flex items-center">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={
                'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg'
              }
              alt="avatar"
            />
          </Avatar>
          <div>
            <p>Nguyễn Thị Bình</p>
            <p>Project Owner</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
