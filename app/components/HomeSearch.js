'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

const HomeSearch = () => {
  const [input, setInput] = useState('');
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const res = await fetch('https://random-word-api.herokuapp.com/word');
    const data = await res.json();
    const term = data[0];
    if (!res) return;

    router.push(`/search/web?searchTerm=${term}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex items-center w-full mx-auto max-w-[90%] mt-5 border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl'
      >
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input
          type='text'
          className='flex-grow focus:outline-none'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BsFillMicFill className='text-lg' />
      </form>

      <div className='flex flex-col space-y-2 justify-center sm:space-y-0 sm:space-x-4 sm:flex-row mt-8'>
        <button onClick={handleSubmit} className='btn'>
          Google Search
        </button>
        <button
          onClick={randomSearch}
          className='btn flex items-center justify-center disabled:opacity-80'
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? (
            <img
              src='/spinner.svg'
              alt='Loading...'
              className='h-6 text-center'
            />
          ) : (
            'I am Feeling Lucky!'
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
