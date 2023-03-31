const Loading = () => {
  return (
    <div className='flex flex-col items-center pb-60 sm:flex-row sm:items-start sm:space-x-4 mx-2 pt-10 max-w-6xl lg:pl-48'>
      <div className='animate-pulse'>
        <div className='h-48 w-48 mb-4 bg-gray-200 rounded-md'></div>
        <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
        <div className='h-2 w-44 mb-2.5 bg-gray-200 rounded-md'></div>
      </div>
      <div className='animate-pulse'>
        <div className='h-48 w-48 mb-4 bg-gray-200 rounded-md'></div>
        <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
        <div className='h-2 w-44 mb-2.5 bg-gray-200 rounded-md'></div>
      </div>
      <div className='animate-pulse'>
        <div className='h-48 w-48 mb-4 bg-gray-200 rounded-md'></div>
        <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
        <div className='h-2 w-44 mb-2.5 bg-gray-200 rounded-md'></div>
      </div>
    </div>
  );
};

export default Loading;
