const WebSearch = async ({ searchParams }) => {
  const searchTerm = searchParams.searchTerm;

  const res = await fetch(
    `https://customsearch.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.GOOGLE_CX_KEY}&q=${searchTerm}`
  );
  const data = await res.json();
  const searchData = data.items;

  return (
    <div>
      {searchData &&
        searchData.map((item) => <p key={item.title}>{item.title}</p>)}
    </div>
  );
};

export default WebSearch;
