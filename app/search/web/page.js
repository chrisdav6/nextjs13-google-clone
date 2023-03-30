const WebSearch = async () => {
  const res = await fetch(
    `https://customsearch.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.GOOGLE_CX_KEY}&q=cars`
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
