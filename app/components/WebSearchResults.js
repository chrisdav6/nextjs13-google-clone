import Link from 'next/link';
import Parser from 'html-react-parser';
import PaginationButtons from './PaginationButtons';

const WebSearchResults = ({ data }) => {
  const searchResults = data.items;

  console.log(data);

  return (
    <div className='w-full px-3 pb-52 sm:pb-44 sm:pl-[5%] md:pl-[14%] lg:pl-48'>
      <p className='text-gray-600 text-sm mb-5 mt-3'>
        About: {data.searchInformation?.formattedTotalResults} results{' '}
        {data.searchInformation?.formattedSearchTime} seconds
      </p>

      {searchResults.map((searchResult) => (
        <div className='mb-8 max-w-xl' key={searchResult.title}>
          <div className='flex flex-col group'>
            <Link className='text-sm truncate' href={searchResult.link}>
              {searchResult.formattedUrl}
            </Link>
            <Link
              className='group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800'
              href={searchResult.link}
            >
              {searchResult.title}
            </Link>
          </div>
          <p className='text-gray-600'>{Parser(searchResult.htmlSnippet)}</p>
        </div>
      ))}
      <div>
        <PaginationButtons />
      </div>
    </div>
  );
};

export default WebSearchResults;
