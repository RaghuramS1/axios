import React, { useState } from 'react';
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <nav className='flex  justify-between items-center text-white p-5 bg-[cyan] shadow-lg'>
      <div className='brand'>
        <h1 className='text-sky-700 text-4xl font-serif font-bold'>BookMyRoom</h1>
      </div>
      <div className='flex text-center '>
        <input
          type='text'
          placeholder='Search for rooms...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='mr-2 p-2 rounded-sm w-96'
        />
        {/* Add your search button or icon here */}
      </div>
      <ul className='flex list-none'>
        <li><a href="/" className=' mr-10 text-xl font-bold text-sky-700 hover:text-sky-400'>Home</a></li>
        <li><a href="/Moviespage" className=' mr-10 text-xl font-bold text-sky-700 hover:text-sky-400 '>About</a></li>
        <li><a href="/Songspage" className=' mr-10 text-xl font-bold text-sky-700 hover:text-sky-400 bg-white px-4 py-2 rounded-lg '>Login</a></li>
      </ul>
     
    </nav>
  );
};

export default Navbar;