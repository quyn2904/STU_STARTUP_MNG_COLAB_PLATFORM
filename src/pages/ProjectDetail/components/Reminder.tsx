import { useState } from 'react';
import { DateTimePicker } from '../../../common/components/DateTimePicker';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';

const REMINDER_OPTIONS: { label: string; value: string }[] = [
  {
    label: 'None',
    value: 'none',
  },
  {
    label: 'At time of due date',
    value: 'at_time_of_due_date',
  },
  {
    label: '5 minutes before',
    value: '5_minutes_before',
  },
  {
    label: '10 minutes before',
    value: '10_minutes_before',
  },
  {
    label: '15 minutes before',
    value: '15_minutes_before',
  },
  {
    label: '1 hour before',
    value: '1_hour_before',
  },
  {
    label: '2 hours before',
    value: '2_hours_before',
  },
  {
    label: '1 day before',
    value: '1_day_before',
  },
  {
    label: '2 day before',
    value: '2_day_before',
  },
];

type ReminderProps = {
  start?: Date;
  end?: Date;
};

const Reminder = ({ start = undefined, end = undefined }: ReminderProps) => {
  const [startDate, setStartDate] = useState<Date | undefined>(start);
  const [endDate, setEndDate] = useState<Date | undefined>(end);

  return (
    <>
      <p className="mb-3 font-bold">Time</p>

      <form className="rounded-lg bg-white px-3 py-3 text-sm">
        <div>
          <p>Start date</p>
          <DateTimePicker value={startDate} onChange={setStartDate} />
        </div>
        <div className="mt-2">
          <p>Due date</p>
          <DateTimePicker value={endDate} onChange={setEndDate} />
        </div>
        <p className="mt-3">Set due date reminder</p>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select reminder option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {REMINDER_OPTIONS.map(({ label, value }) => (
                <SelectItem value={value} key={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <button className="rounded-xl bg-[#013C5A] py-1 font-semibold text-white">
            Save
          </button>
          <button className="rounded-xl border border-[#013C5A] py-1 font-semibold text-[#013C5A]">
            Remove
          </button>
        </div>
      </form>
    </>
  );
};

export default Reminder;
