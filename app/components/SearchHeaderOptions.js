'use client';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchHeaderOptions = () => {
  const router = useRouter();
  const pathName = usePathname();

  const searchParam = useSearchParams();
  const searchTerm = searchParam.get('searchTerm');

  const selectTab = (tabName) => {
    router.push(
      `/search/${
        tabName === 'Images' ? 'image' : 'web'
      }?searchTerm=${searchTerm}`
    );
  };

  return (
    <div className='flex'>
      <div
        onClick={() => selectTab('All')}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathName === '/search/web' && '!text-blue-600 !border-blue-600'
        }`}
      >
        <AiOutlineSearch className='text-md' />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab('Images')}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathName === '/search/image' && '!text-blue-600 !border-blue-600'
        }`}
      >
        <AiOutlineSearch className='text-md' />
        <p>Image</p>
      </div>
    </div>
  );
};

export default SearchHeaderOptions;
