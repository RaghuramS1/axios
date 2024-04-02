import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className='pt-[5%] pl-[15%] pr-[15%] '>
    <div className="p-4  bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 rounded-sm w-full object-cover md:w-48" src="https://depanache.in/depanache-ui/uploads/2022/06/Bedroom-2-BHK-Flat-Interior-Design-3.webp" alt="Room" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">abc</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">qwe</a>
          <p className="mt-2 text-gray-500">good</p>
          <div className="mt-4">
            <span className="text-gray-600">Price:</span>
            <span className="ml-2 font-bold">$500/night</span>
          </div>
        </div>
      </div>
      </div>
      

      <div className='pt-[3%]'></div>
      <div className="p-4  bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 rounded-sm w-full object-cover md:w-48" src="https://depanache.in/depanache-ui/uploads/2022/06/Bedroom-2-BHK-Flat-Interior-Design-3.webp" alt="Room" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">abc</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">qwe</a>
          <p className="mt-2 text-gray-500">good</p>
          <div className="mt-4">
            <span className="text-gray-600">Price:</span>
            <span className="ml-2 font-bold">$500/night</span>
          </div>
        </div>
      </div>
      </div>
      
      <div className='pt-[3%]'></div>
      <div className="p-4 bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 rounded-sm w-full object-cover md:w-48" src="https://depanache.in/depanache-ui/uploads/2022/06/Bedroom-2-BHK-Flat-Interior-Design-3.webp" alt="Room" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">abc</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">qwe</a>
          <p className="mt-2 text-gray-500">good</p>
          <div className="mt-4">
            <span className="text-gray-600">Price:</span>
            <span className="ml-2 font-bold">$500/night</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RoomCard;