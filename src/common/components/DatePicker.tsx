import { cn } from '../../lib/utils';
import { format } from 'date-fns';
import { useState } from 'react';
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui';
import { CalendarIcon } from '@radix-ui/react-icons';

const DatePicker = ({ width }: { width?: string }) => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            `${width ? width : 'w-[200px]'} justify-start text-left font-normal`,
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
