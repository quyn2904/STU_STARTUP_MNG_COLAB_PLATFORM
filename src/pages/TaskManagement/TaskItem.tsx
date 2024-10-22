import { HiDotsHorizontal } from 'react-icons/hi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FaRegFileLines } from 'react-icons/fa6';
import { Avatar, AvatarImage } from '../../components/ui/avatar';
import { useDraggable } from '@dnd-kit/core';

type TaskType = 'Design' | 'Development';
export type TaskStatus = 'todo' | 'doing' | 'done';
const color: Record<
  TaskType,
  {
    bgColor: string;
    textColor: string;
  }
> = {
  Design: {
    bgColor: '#DFA874',
    textColor: '#D58D49',
  },
  Development: {
    bgColor: '#83C29D',
    textColor: '#68B266',
  },
};

export type TaskItemProps = {
  id: string;
  tag: TaskType;
  header: string;
  description?: string;
  status: TaskStatus;
  users: {
    name: string;
    avatar_url: string;
  }[];
  comments?: {
    author: string;
    content: string;
  }[];
  files?: File[];
};

const TaskItem = ({ props }: { props: TaskItemProps }) => {
  const {
    id,
    tag,
    header,
    description,
    users,
    comments = [],
    files = [],
  } = props;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="mt-2 min-w-[85%] rounded-lg bg-white px-3 py-3"
    >
      <div className="flex items-center justify-between">
        <p
          style={{
            backgroundColor: `${color[tag].bgColor}20`,
            color: color[tag].textColor,
          }}
          className={`rounded-lg px-2 py-1`}
        >
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
          {users.length > 1 &&
            users.slice(1).map((user) => (
              <Avatar
                key={user.avatar_url}
                className="h-6 w-6 -translate-x-1 border-2 border-white"
              >
                <AvatarImage src={user.avatar_url} alt="avatar" />
              </Avatar>
            ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-opacity-80">
          <div className="flex gap-1">
            <FaRegCommentAlt />
            <p>{comments.length} comments</p>
          </div>
          <div className="flex gap-1">
            <FaRegFileLines />
            <p>{files.length} files</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
