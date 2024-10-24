import { Avatar, AvatarImage } from '../../../components/ui';
import { Progress } from '../../../components/ui/progress';
import { IoMdCheckmark } from 'react-icons/io';
import { Textarea } from '../../../components/ui/textarea';

type StatusType = 'On Track' | 'At Risk' | 'Off Track';
const StatusColor: Record<StatusType, string> = {
  'On Track': '#219653',
  'At Risk': '#F2994A',
  'Off Track': '#EB5757',
};

const Status = () => {
  return (
    <>
      <p className="mb-3 font-bold">Project Status</p>
      <div>
        <div className="rounded-lg bg-white px-3 py-3 text-sm">
          <div className="flex items-center justify-between">
            <div
              className="flex h-4 w-4 items-center justify-center rounded-full"
              style={{ background: StatusColor['On Track'] }}
            >
              <IoMdCheckmark className="h-full w-full p-[2px] text-white" />
            </div>
            <div className="w-[70%]">
              <p className="text-sm">Research Moodbood</p>
              <div className="flex items-center gap-2 text-[#BDBDBD]">
                <Progress
                  bgColor={StatusColor['On Track']}
                  value={100}
                  className="w-full"
                />
                <p className="w-11 text-end">100%</p>
              </div>
            </div>
            <Avatar className="h-7 w-7">
              <AvatarImage
                src="https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg"
                alt="avatar"
              />
            </Avatar>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="h-4 w-4 rounded-full border-[1.5px] border-[#BDBDBD]"></div>
            <div className="w-[70%]">
              <p className="text-sm">Research Moodbood</p>
              <div className="flex items-center justify-between gap-2 text-[#BDBDBD]">
                <Progress
                  value={75}
                  bgColor={StatusColor['At Risk']}
                  className="w-full"
                />
                <p className="w-11 text-end">75%</p>
              </div>
            </div>
            <Avatar className="h-7 w-7">
              <AvatarImage
                src="https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg"
                alt="avatar"
              />
            </Avatar>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="h-4 w-4 rounded-full border-[1.5px] border-[#BDBDBD]"></div>
            <div className="w-[70%]">
              <p className="text-sm">Research Moodbood</p>
              <div className="flex items-center gap-2 text-[#BDBDBD]">
                <Progress
                  value={80}
                  bgColor={StatusColor['Off Track']}
                  className="w-full"
                />
                <p className="w-11 text-end">80%</p>
              </div>
            </div>
            <Avatar className="h-7 w-7">
              <AvatarImage
                src="https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/08/13/356/avatar-vo-tri-meo-3.jpg"
                alt="avatar"
              />
            </Avatar>
          </div>
        </div>
      </div>
      <p className="mb-3 mt-7 font-bold">What is your project's status?</p>
      <div>
        <div className="rounded-lg bg-white px-3 py-3 text-sm">
          <Textarea
            placeholder="Tell us, how this project's going"
            className=""
          />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 font-semibold">
        <button className="rounded-lg bg-[#219653] px-2 py-1 text-sm text-white">
          On Track
        </button>
        <button className="rounded-lg border-2 border-[#F2994A] bg-white px-2 py-1 text-sm text-[#F2994A]">
          At Risk
        </button>
        <button className="rounded-lg border-2 border-[#EB5757] bg-white px-2 py-1 text-sm text-[#EB5757]">
          Off Track
        </button>
      </div>
    </>
  );
};

export default Status;
