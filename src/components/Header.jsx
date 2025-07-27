import SignHand from '../assets/SignHand.png';

const Header = () => {
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row items-center justify-between px-6 py-10"
    >
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-start lg:mr-20 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:leading-[72px] font-extrabold tracking-tight text-center lg:text-left px-4 lg:px-0">
          Learn and Practice Sign Language with <span className="text-cyan-400">SignLearn</span>
        </h1>
        <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 leading-6 sm:leading-7 md:leading-8 px-4 lg:px-0 text-justify lg:text-left">
  Want to learn sign language in an interactive way? With SignLearn, you can detect ASL alphabets, try out custom signs, and fingerspell any word you type.
</p>

      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
        <img
          src={SignHand}
          alt="SIGN-HAND"
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
        />
      </div>
    </div>
  );
};

export default Header;
