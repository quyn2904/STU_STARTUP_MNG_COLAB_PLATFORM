import { Avatar, AvatarImage } from '../../../components/ui';
import { AiOutlineLike } from 'react-icons/ai';
import { timeAgo } from '../../../utils/time';

const Comment = [
  {
    id: 1,
    author: {
      name: 'Brooklyn',
      avatar:
        'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg',
      id: 1,
    },
    content:
      'we are 1 week away from launch! Thank you for every team member for their hard work.',
    timestamp: '2021-09-01T12:00:00Z',
    liked: {
      count: 5,
      isLiked: true,
    },
  },
  {
    id: 2,
    author: {
      name: 'Brooklyn',
      avatar:
        'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg',
      id: 1,
    },
    content:
      'we are 1 week away from launch! Thank you for every team member for their hard work.',
    timestamp: '2024-10-01T12:00:00Z',
    liked: {
      count: 5,
      isLiked: true,
    },
  },
  {
    id: 3,
    author: {
      name: 'Brooklyn',
      avatar:
        'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg',
      id: 1,
    },
    content:
      'we are 1 week away from launch! Thank you for every team member for their hard work.',
    timestamp: '2024-11-20T12:00:00Z',
    liked: {
      count: 5,
      isLiked: true,
    },
  },
];

const Comments = () => {
  return (
    <>
      <p className="mb-3 font-bold">Comments</p>
      <div className="rounded-lg bg-white px-3 pt-3 text-sm">
        {Comment.map(({ author, content, id, liked, timestamp }) => (
          <div className="mt-3 grid grid-cols-6" key={id}>
            <div>
              <Avatar className="h-7 w-7">
                <AvatarImage src={author.avatar} alt="avatar" />
              </Avatar>
            </div>
            <div className="col-span-5">
              <p className="text-base font-semibold">{author.name}</p>
              <p className="">{content}</p>
              <div className="flex items-center gap-4">
                <p className="text-xs text-[#BDBDBD]">{timeAgo(timestamp)}</p>
                <div className="flex gap-1 text-blue-500">
                  <p className="">{liked.count}</p>
                  <AiOutlineLike className="translate-y-[1px]" />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-4 grid grid-cols-6">
          <div>
            <Avatar className="h-7 w-7">
              <AvatarImage
                src={
                  'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg'
                }
                alt="avatar"
              />
            </Avatar>
          </div>
          <div className="col-span-5 rounded-lg border">
            <div className="min-h-10"></div>
            <div className="flex items-center justify-between">
              <div>Icon</div>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
