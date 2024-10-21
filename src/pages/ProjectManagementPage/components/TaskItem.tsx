import { HiDotsHorizontal } from 'react-icons/hi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FaRegFileLines } from 'react-icons/fa6';
import { Avatar, AvatarImage } from '../../../components/ui/avatar';
type taskType = 'Design' | 'Development';

type TaskItemProps = {
  tag: taskType;
  header: string;
  description?: string;
  users: {
    name: string;
    avatar_url: string;
  }[];
  comment?: {
    author: string;
    content: string;
  }[];
  items?: File[];
};

const TaskItem = ({
  header,
  tag,
  users,
  comment,
  description,
  items,
}: TaskItemProps) => {
  return (
    <div className="mt-2 min-w-[85%] rounded-lg bg-white px-3 py-3">
      <div className="flex items-center justify-between">
        <p className="rounded-lg bg-[#D58D49] bg-opacity-20 px-2 py-1 text-[#D58D49]">
          {tag}
        </p>
        <HiDotsHorizontal />
      </div>
      <p className="mt-2 text-lg font-semibold">{header}</p>
      <p className="mt-2 text-justify text-sm leading-none">{description}</p>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex">
          <Avatar className="h-6 w-6 border-2 border-white">
            <AvatarImage src={users[0].avatar_url} alt="avatar" />
          </Avatar>
          <Avatar className="h-6 w-6 -translate-x-1 border-2 border-white">
            <AvatarImage src={users[0].avatar_url} alt="avatar" />
          </Avatar>
        </div>
        <div className="flex items-center gap-2 text-xs text-opacity-80">
          <div className="flex gap-1">
            <FaRegCommentAlt />
            <p>9 comments</p>
          </div>
          <div className="flex gap-1">
            <FaRegFileLines />
            <p>10 files</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
