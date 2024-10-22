import { IconType } from 'react-icons';

type IconWithNumProps = {
  onClick: () => void;
  Icon: IconType;
  bgColor?: string;
  number: number;
};

const IconWithNum = ({ bgColor, Icon, number, onClick }: IconWithNumProps) => {
  return (
    <div className="relative mx-1 h-fit translate-y-2 self-end">
      <button
        className="text-4xl leading-none text-gray-500"
        onClick={onClick}
        aria-label="Notifications"
      >
        <Icon />
      </button>
      <span
        className={`border-body absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-[2px] ${bgColor ? `bg-[${bgColor}]` : 'bg-[#F4A258]'}`}
      >
        <span className="block text-xs font-bold text-white">{number}</span>
      </span>
    </div>
  );
};

export default IconWithNum;
