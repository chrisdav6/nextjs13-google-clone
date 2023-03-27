import Image from 'next/image';
import Link from 'next/link';
import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';

const SearchHeader = () => {
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center justify-between'>
        <Link href='/'>
          <Image
            src='/googleLogo.png'
            width={120}
            height={40}
            alt='Google Logo'
          />
        </Link>
        <div className='flex-1'>
          <SearchBox />
        </div>
        <div className='hidden md:inline-flex space-x-2'>
          <RiSettings3Line className='header-icon' />
          <TbGridDots className='header-icon' />
        </div>
        <button className='bg-blue-500 text-white px-6 py-2 font-md rounded-md ml-2 hover:brightness-110 hover:shadow-md transition duration-300'>
          Sign In
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
