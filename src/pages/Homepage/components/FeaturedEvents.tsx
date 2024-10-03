import Event1 from '../../../assets/events/event1.jpg';
import Event2 from '../../../assets/events/event2.jpg';
import Event3 from '../../../assets/events/event3.jpg';
import Event4 from '../../../assets/events/event4.jpg';
import Event5 from '../../../assets/events/event5.jpg';
import Event6 from '../../../assets/events/event6.jpg';
import Event from './Event';

export type EventType = 'Seminar' | 'Workshop' | 'Event';

export type EventProps = {
  id: number;
  type: EventType;
  title: string;
  guest?: string;
  description: string;
  coverImg: string;
};

const data: EventProps[] = [
  {
    id: 1,
    type: 'Seminar',
    title: 'Phát triển bền vững cho doanh nghiệp thương mại điện tử đa kênh',
    guest: 'ThS. NCS. Trương Đình Hồng Thụy, Cô Phương Thảo',
    description:
      'Sự hiện diện của hai quý diễn giả trong Biz Talkshow Season 4 lần này, hứa hẹn sẽ mang lại thật nhiều thông tin thật chuyên sâu về thị trường thương mại điện tử Sự hiện diện của hai quý diễn giả trong Biz Talkshow Season 4 lần này, hứa hẹn sẽ mang lại thật nhiều thông tin thật chuyên sâu về thị trường thương mại điện tử ',
    coverImg: Event1.toString(),
  },
  {
    id: 2,
    type: 'Workshop',
    title:
      'TÌM KIẾM VÀ ỨNG DỤNG TRÍ TUỆ NHÂN TẠO (AI) CÙNG TÂN SINH VIÊN TRƯỜNG ĐẠI HỌC FPT',
    description:
      'Sự hiện diện của hai quý diễn giả trong Biz Talkshow Season 4 lần này, hứa hẹn sẽ mang lại thật nhiều thông tin thật chuyên sâu về thị trường thương mại điện tử Sự hiện diện của hai quý diễn giả trong Biz Talkshow Season 4 lần này, hứa hẹn sẽ mang lại thật nhiều thông tin thật chuyên sâu về thị trường thương mại điện tử ',
    coverImg: Event2.toString(),
  },
  {
    id: 3,
    type: 'Event',
    title: 'TECHDAY 2024 - BÙNG NỔ CÔNG NGHỆ, BẠT NGÀN TRẢI NGHIỆM',
    description:
      'Sự hiện diện của hai quý diễn giả trong Biz Talkshow Season 4 lần này, hứa hẹn sẽ mang lại thật nhiều thông tin thật chuyên sâu về thị trường thương mại điện tử Sự hiện diện của hai quý diễn giả trong Biz Talkshow Season 4 lần này, hứa hẹn sẽ mang lại thật nhiều thông tin thật chuyên sâu về thị trường thương mại điện tử ',
    coverImg: Event3.toString(),
  },
  {
    id: 4,
    type: 'Seminar',
    title: 'Phát triển bền vững cho doanh nghiệp thương mại điện tử đa kênh',
    guest: 'ThS. NCS. Trương Đình Hồng Thụy',
    description:
      'Sự hiện diện của hai quý diễn giả trong Biz Talkshow Season 4 lần này, hứa hẹn sẽ mang lại thật nhiều thông tin thật chuyên sâu về thị trường thương mại điện tử Sự hiện diện của hai quý diễn giả trong Biz Talkshow Season 4 lần này, hứa hẹn sẽ mang lại thật nhiều thông tin thật chuyên sâu về thị trường thương mại điện tử ',
    coverImg: Event4.toString(),
  },
  {
    id: 5,
    type: 'Workshop',
    title:
      'TÌM KIẾM VÀ ỨNG DỤNG TRÍ TUỆ NHÂN TẠO (AI) CÙNG TÂN SINH VIÊN TRƯỜNG ĐẠI HỌC FPT',
    description:
      'Sự hiện diện của hai quý diễn giả trong Biz Talkshow Season 4 lần này, hứa hẹn sẽ mang lại thật nhiều thông tin thật chuyên sâu về thị trường thương mại điện tử Sự hiện diện của hai quý diễn giả trong Biz Talkshow Season 4 lần này, hứa hẹn sẽ mang lại thật nhiều thông tin thật chuyên sâu về thị trường thương mại điện tử ',
    coverImg: Event5.toString(),
  },
  {
    id: 6,
    type: 'Event',
    title: 'TECHDAY 2024 - BÙNG NỔ CÔNG NGHỆ, BẠT NGÀN TRẢI NGHIỆM',
    description:
      'Sự hiện diện của hai quý diễn giả tronng mại điện tử Sự hBa hẹn sẽ mang lại thật nhiều thông tin thật chuyên sâu về thị trường thương mại điện tử ',
    coverImg: Event6.toString(),
  },
];

const FeaturedEvents = () => {
  return (
    <div className="mt-16 h-[100vh] w-full px-20 pt-5">
      <p className="items-center pb-5 text-center text-5xl">Featured Events</p>
      <div className="mt-5 grid grid-cols-3 gap-6">
        {data.map((event) => (
          <Event key={event.id} eventProps={event} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
