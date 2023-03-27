import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';

const HomeHeader = () => {
  return (
    <header className='flex justify-end p-5 text-sm'>
      <div className='flex items-center space-x-4'>
        <Link href='https://mail.google.com' className='hover:underline'>
          Gmail
        </Link>
        <Link href='https://images.google.com' className='hover:underline'>
          Images
        </Link>
        <TbGridDots className='bg-transparent rounded-full text-4xl p-2 trasition-bg duration-300 hover:bg-gray-200 hover:cursor-pointer' />
        <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:shadow-md hover:brightness-110 transition duration-300'>
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
