import { EventProps, EventType } from './FeaturedEvents';

const TypeColors: Record<EventType, string> = {
  Seminar: '#F4A258',
  Workshop: '#013C5A',
  Event: '#829A7B',
};

const Event = ({ eventProps }: { eventProps: EventProps }) => {
  const { coverImg, description, title, type, guest } = eventProps;
  const color = TypeColors[type];
  return (
    <>
      <div className="h-[565px] w-full bg-[#F7F7F7]">
        <div className="h-[275px] w-full">
          <img src={coverImg} className="h-full w-full object-cover" />
        </div>
        <div className="mx-3 my-3 flex h-[266px] flex-col justify-between">
          <p className={`text-[${color}] font-semibold`}>{type}</p>
          <div>
            <p className="mt-2 text-xl font-[700]">{title}</p>
            {guest && (
              <p className={`mt-2 text-wrap text-base font-[500]`}>
                Guest: {guest}
              </p>
            )}
          </div>
          <p className="mt-2 overflow-hidden text-ellipsis text-justify text-[#686868]">
            {description}
          </p>
          <button className="relative rounded border border-black px-5 py-1">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Event;
