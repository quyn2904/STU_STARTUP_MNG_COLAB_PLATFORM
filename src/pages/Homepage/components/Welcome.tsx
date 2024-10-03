import welcome from '../../../assets/welcome.jpg';

const Welcome = () => {
  return (
    <div className="mt-8 flex h-[80vh] w-full items-center">
      <div className="w-[50%] px-16">
        <p className="text-5xl font-semibold">Learn skills with top experts</p>
        <p className="mt-4">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <button className="mt-4 rounded-lg bg-black px-6 py-3 text-lg text-white">
          Join now
        </button>
      </div>
      <div className="h-full w-[50%]">
        <div className="h-full w-full">
          <img src={welcome} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
