import Link from 'next/link';

const WebSearch = async ({ searchParams }) => {
  const searchTerm = searchParams.searchTerm;

  const res = await fetch(
    `https://customsearch.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.GOOGLE_CX_KEY}&q=${searchTerm}`
  );
  const data = await res.json();
  const searchData = data.items;

  if (!res.ok) {
    throw new Error('Something went wrong. Failed to fetch data!');
  }

  if (!searchData) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>No Results Found!</h1>
        <p className='text-lg mb-4'>
          Try searching for something else or go back to the homepage.
        </p>
        <Link className='text-lg text-blue-500' href='/'>
          Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      {searchData &&
        searchData.map((item) => <p key={item.title}>{item.title}</p>)}
    </div>
  );
};

export default WebSearch;
