import Link from 'next/link';
import PaginationButtons from './PaginationButtons';

const ImageSearchResults = ({ data }) => {
  const searchResults = data.items;

  console.log(data);

  return (
    <div className='w-full px-3 pb-52 sm:pb-44'>
      <p className='text-gray-600 text-sm mb-5 mt-3 sm:pl-[5%] md:pl-[14%] lg:pl-48'>
        About: {data.searchInformation?.formattedTotalResults} results{' '}
        {data.searchInformation?.formattedSearchTime} seconds
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-4 mt-10 px-10 sm:px-16 lg:px-24'>
        {searchResults.map((searchResult) => (
          <div className='mb-8 border p-4' key={searchResult.title}>
            <div className='group'>
              <Link href={searchResult.image.contextLink}>
                <img
                  className='h-60 group-hover:shadow-xl w-full object-contain transition-shadow mb-4'
                  src={searchResult.link}
                  alt={searchResult.title}
                />
              </Link>
              <Link href={searchResult.image.contextLink}>
                <h2 className='group-hover:underline truncate text-xl'>
                  {searchResult.title}
                </h2>
              </Link>
              <Link href={searchResult.image.contextLink}>
                <p className='group-hover:underline text-gray-600'>
                  {searchResult.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='ml-16 sm:ml-20 md:pl-8'>
        <PaginationButtons />
      </div>
    </div>
  );
};

export default ImageSearchResults;
