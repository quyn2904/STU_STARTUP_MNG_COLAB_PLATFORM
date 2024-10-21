import { FaPlus } from 'react-icons/fa6';
import { HiDotsHorizontal } from 'react-icons/hi';
import TaskItem from './TaskItem';
import { Avatar, AvatarImage } from '../../../components/ui/avatar';

const TaskManagementForm = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <p className="text-4xl font-bold">Task Management</p>
        <div className="flex items-center gap-2">
          <div className="flex h-fit items-center justify-center rounded bg-[#3099E5] bg-opacity-20 p-0.5">
            <FaPlus className="text-[8px] text-[#16425B]" />
          </div>
          <p className="text-lg">Invite</p>
          <div className="flex">
            <Avatar className="h-8 w-8 border-2 border-white">
              <AvatarImage
                src="https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg"
                alt="avatar"
              />
            </Avatar>
            <Avatar className="h-8 w-8 -translate-x-2 border-2 border-white">
              <AvatarImage
                src="https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg"
                alt="avatar"
              />
            </Avatar>
          </div>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-4">
        <div className="h-svh rounded-xl bg-[#EEF2F5] px-3 py-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-bold">To do</p>
            <div className="flex gap-2">
              <FaPlus />
              <HiDotsHorizontal />
            </div>
          </div>
          <div>
            <TaskItem
              header="Moodboard"
              tag="Design"
              users={[
                {
                  name: 'ahihi',
                  avatar_url:
                    'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg',
                },
              ]}
              description="Create a moodboard for the new project"
            />
            <TaskItem
              header="Moodboard"
              tag="Design"
              users={[
                {
                  name: 'ahihi',
                  avatar_url:
                    'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg',
                },
              ]}
              description="Create a moodboard for the new project"
            />
            <TaskItem
              header="Moodboard"
              tag="Design"
              users={[
                {
                  name: 'ahihi',
                  avatar_url:
                    'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg',
                },
              ]}
              description="Create a moodboard for the new project"
            />
          </div>
        </div>
        <div className="h-svh rounded-xl bg-[#EEF2F5] px-3 py-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-bold">Doing</p>
            <div className="flex gap-2">
              <FaPlus />
              <HiDotsHorizontal />
            </div>
          </div>
          <TaskItem
            header="Moodboard"
            tag="Design"
            users={[
              {
                name: 'ahihi',
                avatar_url:
                  'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg',
              },
            ]}
            description="Create a moodboard for the new project"
          />
        </div>
        <div className="h-svh rounded-xl bg-[#EEF2F5] px-3 py-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-bold">Done</p>
            <div className="flex gap-2">
              <FaPlus />
              <HiDotsHorizontal />
            </div>
          </div>
          <TaskItem
            header="Moodboard"
            tag="Design"
            users={[
              {
                name: 'ahihi',
                avatar_url:
                  'https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg',
              },
            ]}
            description="Create a moodboard for the new project"
          />
        </div>
        <div className="h-fit rounded-xl bg-[#EEF2F5] px-3 py-3">
          <div className="mb-3 flex items-center gap-1">
            <FaPlus className="text-sm" />
            <p className="font-bold">Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagementForm;
