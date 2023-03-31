export const dynamic = 'force-dynamic';
import ImageSearchResults from '@/app/components/ImageSearchResults';
import Link from 'next/link';

const ImageSearch = async ({ searchParams }) => {
  const startIndex = searchParams.start || 1;
  const searchTerm = searchParams.searchTerm;

  //Prevent Fetch with every save
  // await new Promise((resolve) => setTimeout(resolve, 10000));

  const res = await fetch(
    `https://customsearch.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.GOOGLE_CX_KEY}&q=${searchTerm}&searchType=image&start=${startIndex}`
  );
  const data = await res.json();
  const searchData = data.items;

  if (!res.ok) {
    throw new Error('Something went wrong. Failed to fetch data!');
  }

  if (!searchData) {
    return (
      <div className='flex flex-col justify-center items-center pt-10 mb-10'>
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

  return <div>{searchData && <ImageSearchResults data={data} />}</div>;
};

export default ImageSearch;
