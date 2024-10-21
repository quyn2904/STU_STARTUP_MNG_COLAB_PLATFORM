import { FaPlus } from 'react-icons/fa6';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  let { projectId } = useParams<{ projectId: string }>();

  return (
    <div className="mt-4">
      <div className="flex items-center">
        <p className="text-4xl font-bold">{projectId}</p>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-4">
        <div className="h-fit rounded-xl bg-[#EEF2F5] px-3 py-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-bold">To do</p>
            <div className="flex gap-2">
              <FaPlus />
              <HiDotsHorizontal />
            </div>
          </div>
          <div></div>
        </div>
        <div className="h-fit rounded-xl bg-[#EEF2F5] px-3 py-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-bold">Doing</p>
            <div className="flex gap-2">
              <FaPlus />
              <HiDotsHorizontal />
            </div>
          </div>
        </div>
        <div className="h-fit rounded-xl bg-[#EEF2F5] px-3 py-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-bold">Done</p>
            <div className="flex gap-2">
              <FaPlus />
              <HiDotsHorizontal />
            </div>
          </div>
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

export default ProjectDetail;
