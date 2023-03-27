'use client';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

const HomeSearch = () => {
  return (
    <>
      <form className='flex items-center w-full mx-auto max-w-[90%] mt-5 border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl'>
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input type='text' className='flex-grow focus:outline-none' />
        <BsFillMicFill className='text-lg' />
      </form>

      <div className='flex flex-col space-y-2 justify-center sm:space-y-0 sm:space-x-4 sm:flex-row mt-8'>
        <button className='btn'>Google Search</button>
        <button className='btn'>I am Feeling Lucky!</button>
      </div>
    </>
  );
};

export default HomeSearch;
