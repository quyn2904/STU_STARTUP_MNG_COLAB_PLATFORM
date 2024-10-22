import { FaPlus } from 'react-icons/fa6';
import { HiDotsHorizontal } from 'react-icons/hi';
import TaskItem, { TaskItemProps, TaskStatus } from './TaskItem';
import { Avatar, AvatarImage } from '../../components/ui';
import { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import DroppableField from './DroppableField';

const TaskManagement = () => {
  const [tasks, setTasks] = useState<TaskItemProps[]>([
    {
      id: '1',
      header: 'Moodboard 1',
      tag: 'Design',
      status: 'doing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
      users: [
        {
          name: 'simmy',
          avatar_url:
            'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474095hSm/anh-avatar-con-meo-cute_051723184.jpg',
        },
        {
          name: 'pika pika',
          avatar_url: 'https://lacdau.com/media/product/250-2332-4.jpg',
        },
        {
          name: 'zo tri',
          avatar_url:
            'https://cdn.diendanxaydung.net.vn/wp-content/uploads/2024/09/avatar-vo-tri-cute-meo-1.jpg',
        },
      ],
      comments: [
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
      ],
      files: [new File([''], 'file1'), new File([''], 'file2')],
    },
    {
      id: '2',
      header: 'Moodboard 2',
      tag: 'Development',
      status: 'todo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
      users: [
        {
          name: 'simmy',
          avatar_url:
            'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474095hSm/anh-avatar-con-meo-cute_051723184.jpg',
        },
        {
          name: 'pika pika',
          avatar_url: 'https://lacdau.com/media/product/250-2332-4.jpg',
        },
        {
          name: 'zo tri',
          avatar_url:
            'https://cdn.diendanxaydung.net.vn/wp-content/uploads/2024/09/avatar-vo-tri-cute-meo-1.jpg',
        },
      ],
      comments: [
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
      ],
      files: [new File([''], 'file1'), new File([''], 'file2')],
    },
    {
      id: '3',
      header: 'Moodboard3',
      tag: 'Design',
      status: 'todo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
      users: [
        {
          name: 'simmy',
          avatar_url:
            'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474095hSm/anh-avatar-con-meo-cute_051723184.jpg',
        },
        {
          name: 'pika pika',
          avatar_url: 'https://lacdau.com/media/product/250-2332-4.jpg',
        },
        {
          name: 'zo tri',
          avatar_url:
            'https://cdn.diendanxaydung.net.vn/wp-content/uploads/2024/09/avatar-vo-tri-cute-meo-1.jpg',
        },
      ],
      comments: [
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
      ],
      files: [new File([''], 'file1'), new File([''], 'file2')],
    },
    {
      id: '4',
      header: 'Moodboard 4',
      tag: 'Development',
      status: 'done',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
      users: [
        {
          name: 'simmy',
          avatar_url:
            'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474095hSm/anh-avatar-con-meo-cute_051723184.jpg',
        },
        {
          name: 'pika pika',
          avatar_url: 'https://lacdau.com/media/product/250-2332-4.jpg',
        },
        {
          name: 'zo tri',
          avatar_url:
            'https://cdn.diendanxaydung.net.vn/wp-content/uploads/2024/09/avatar-vo-tri-cute-meo-1.jpg',
        },
      ],
      comments: [
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
      ],
      files: [new File([''], 'file1'), new File([''], 'file2')],
    },
    {
      id: '5',
      header: 'Moodboard 5',
      tag: 'Development',
      status: 'todo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
      users: [
        {
          name: 'simmy',
          avatar_url:
            'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474095hSm/anh-avatar-con-meo-cute_051723184.jpg',
        },
        {
          name: 'pika pika',
          avatar_url: 'https://lacdau.com/media/product/250-2332-4.jpg',
        },
        {
          name: 'zo tri',
          avatar_url:
            'https://cdn.diendanxaydung.net.vn/wp-content/uploads/2024/09/avatar-vo-tri-cute-meo-1.jpg',
        },
      ],
      comments: [
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
        {
          author: 'ahihi',
          content: 'ahihi',
        },
      ],
      files: [new File([''], 'file1'), new File([''], 'file2')],
    },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over) {
      const newTasks = tasks.map((task) => {
        if (task.id === active.id) {
          return { ...task, status: over?.id as TaskStatus };
        }
        return task;
      });
      over && setTasks(newTasks);
    }
  };

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
        <DndContext onDragEnd={handleDragEnd}>
          <div className="h-fit rounded-xl bg-[#EEF2F5] px-3 py-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-bold">To do</p>
              <div className="flex gap-2">
                <FaPlus />
                <HiDotsHorizontal />
              </div>
            </div>
            <DroppableField key="todo" id="todo">
              {tasks
                .filter((task) => task.status === 'todo')
                .map((task) => (
                  <TaskItem key={task.id} props={task} />
                ))}
            </DroppableField>
          </div>
          <div className="h-fit rounded-xl bg-[#EEF2F5] px-3 py-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-bold">Doing</p>
              <div className="flex gap-2">
                <FaPlus />
                <HiDotsHorizontal />
              </div>
            </div>
            <DroppableField key="doing" id="doing">
              {tasks
                .filter((task) => task.status === 'doing')
                .map((task) => (
                  <TaskItem key={task.id} props={task} />
                ))}
            </DroppableField>
          </div>
          <div className="h-fit rounded-xl bg-[#EEF2F5] px-3 py-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-bold">Done</p>
              <div className="flex gap-2">
                <FaPlus />
                <HiDotsHorizontal />
              </div>
            </div>
            <DroppableField key="done" id="done">
              {tasks
                .filter((task) => task.status === 'done')
                .map((task) => (
                  <TaskItem key={task.id} props={task} />
                ))}
            </DroppableField>
          </div>
          <div className="h-fit rounded-xl bg-[#EEF2F5] px-3 py-3">
            <div className="mb-3 flex items-center gap-1">
              <FaPlus className="text-sm" />
              <p className="font-bold">Add to cart</p>
            </div>
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default TaskManagement;
