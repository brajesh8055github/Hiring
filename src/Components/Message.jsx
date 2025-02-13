import m1 from '../Photo/pexels-moose-photos-170195-1036622.jpg'

const Message = () => {
    return (
      <div className="w-full px-6 py-12  text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 max-w-4xl mx-auto">
          Untitled truly values work-life balance. We work hard and deliver, but at the end of the day you can switch off.
        </h2>
        <div className="mt-6 flex flex-col items-center">
          <img src={m1} alt="Frankie Sullivan" className="w-16 h-16 rounded-full object-cover" />
          <div className="mt-2">
            <h4 className="text-lg font-semibold text-gray-900">Frankie Sullivan</h4>
            <p className="text-gray-600">Web Developer, Untitled</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Message;
  