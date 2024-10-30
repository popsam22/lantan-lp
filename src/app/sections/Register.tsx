const Register = () => {
  return (
    <div className="flex flex-col items-center mt-10 max-md:mt-0 border-b border-[#EAECF0] max-md:border-b-0">
      <h1 className="text-[#3D3D3D] text-3xl max-md:text-xl font-semibold mb-4 max-md:mb-2">
        Get notified when we launch
      </h1>
      <p className="text-[#7A7A7A] max-md:text-center text-xl mb-7 max-md:text-sm">
        Stay up to date with the latest news and announcements
      </p>
      <div className="flex gap-5 max-md:gap-2 mb-7 max-md:max-w-[323px]">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-[280px] max-md:w-[247px] outline-none border rounded-lg p-2 text-[#7A7A7A] placeholder:text-[#7A7A7A]"
        />
        <button className="bg-[#206AB2] w-[115px] text-white py-2.5 px-4 rounded-lg font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Register;
