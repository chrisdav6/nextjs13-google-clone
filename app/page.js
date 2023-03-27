import Image from 'next/image';
import HomeHeader from './components/HomeHeader';
import HomeSearch from './components/HomeSearch';

const Home = () => {
  return (
    <main>
      <HomeHeader />

      <div className='flex flex-col items-center mt-24'>
        <Image
          src='/googleLogo.png'
          width={300}
          height={100}
          alt='Google Logo'
        />
        <HomeSearch />
      </div>
    </main>
  );
};

export default Home;
