const Hero = () => {
    return (
      <div className="flex flex-col items-start px-6 py-16 w-full mx-auto">
        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold border">
          We&apos;re hiring!
        </button>
        <h1 className="text-3xl md:text-5xl font-bold mt-4">Be part of our mission</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          We&apos;re looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
        </p>
      </div>
    );
  };
  
  export default Hero;
  