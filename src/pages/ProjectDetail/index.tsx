import { useParams } from 'react-router-dom';
import { DateTimePicker } from '../../common/components/DateTimePicker';
import { useState } from 'react';

const ProjectDetail = () => {
  let { projectId } = useParams<{ projectId: string }>();
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="mt-4">
      <div className="flex items-center">
        <p className="text-4xl font-bold">{projectId}</p>
      </div>

      <div className="mt-2 grid grid-cols-4 gap-4">
        <div className="h-[76.5vh] rounded-xl bg-[#EEF2F5] px-3 py-3">
          <p className="mb-3 font-bold">Description</p>
          <div className="h-max rounded-lg bg-white px-3 py-3 text-justify text-sm">
            <p>
              All designs need to be responsive. The requirement is that it fits
              all web and mobile screens.All designs need to be responsive. The
              requirement is that it fits all web and mobile screens.All designs
              need to be responsive. The requirement is that it fits all web and
              mobile screens.
              <br /> <br />
              All designs need to be responsive. The re is that it fits all web
              and mobile screens. All designs need to be responsive. The
              requirement is that it fits all web and mobile screens.
              <br /> <br />
              All designs need to be responsive. The requirement is that it fits
              all web and mobile screens.
            </p>
          </div>
        </div>

        <div>
          <div className="h-fit rounded-xl bg-[#EEF2F5] px-3 py-3">
            <p className="mb-3 font-bold">Time</p>
            <div className="rounded-lg bg-white px-3 py-3 text-sm">
              <p>Start date</p>
              <DateTimePicker value={date} onChange={setDate} />
              <p>Due date</p>
              <DateTimePicker value={date} onChange={setDate} />
            </div>
          </div>
          <div className="mt-4 h-fit rounded-xl bg-[#EEF2F5] px-3 py-3">
            <p className="mb-3 font-bold">Project Status</p>
            <div>{/* content here */}</div>
          </div>
        </div>

        <div className="h-[76.5vh] rounded-xl bg-[#EEF2F5] px-3 py-3">
          <p className="mb-3 font-bold">Comments</p>
          <div>{/* content here */}</div>
        </div>

        <div>
          <div className="h-fit rounded-xl bg-[#EEF2F5] px-3 py-3">
            <p className="mb-3 font-bold">Project Members</p>
            <div>{/* content here */}</div>
          </div>

          <div className="mt-4 h-fit rounded-xl bg-[#EEF2F5] px-3 py-3">
            <p className="mb-3 font-bold">Project Members</p>
            <div>{/* content here */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
