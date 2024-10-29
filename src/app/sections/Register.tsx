const Register = () => {
  return (
    <div className="flex flex-col items-center mt-10 border-b border-[#EAECF0]">
      <h1 className="text-[#3D3D3D] text-3xl font-semibold mb-4">
        Get notified when we launch
      </h1>
      <p className="text-[#7A7A7A] text-xl mb-7">
        Stay up to date with the latest news and announcements
      </p>
      <div className="flex gap-5 mb-7">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-[280px] outline-none border rounded-lg p-2 text-[#7A7A7A] placeholder:text-[#7A7A7A]"
        />
        <button className="bg-[#206AB2] w-[115px] text-white py-2.5 px-4 rounded-lg font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Register;
