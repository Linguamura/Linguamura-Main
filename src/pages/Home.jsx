import { Link } from "react-router-dom";

const cardsData = [
  {
    image: '/images/homepage/Education.png',
    title: 'Education',
    description: 'With Linguamura, you can learn new languages and expand your knowledge with our educational resources and explore scholarship opportunities. ',
    buttonText: 'Learn →',
    buttonLink: '#',
  },
  {
    image: '/images/homepage/Health.png',
    title: 'Health',
    description: 'With LinguaMura, you can take control of your health and wellness with personalized advice and tools.',
    buttonText: 'Control your health →',
    buttonLink: '#',
  },
  {
    image: '/images/homepage/Marketplace.png',
    title: 'Marketplace',
    description: 'With LinguaMura, discover new products and services in our marketplace.',
    buttonText: 'Shop →',
    buttonLink: '#',
  },
  {
    image: '/images/homepage/Transport.png',
    title: 'Transport',
    description: 'Plan your next trip or commute with our transportation features',
    buttonText: 'Transport →',
    buttonLink: '#',
  },
  {
    image: '/images/homepage/Housing.png',
    title: 'Housing',
    description: 'Find your dream home with our real estate services.',
    buttonText: 'Housing →',
    buttonLink: '#',
  },
  {
    image: '/images/homepage/Entertainment.png',
    title: 'Entertainment',
    description: 'Enjoy movies, music, and games in our entertainment section.',
    buttonText: 'Entertainment →',
    buttonLink: '#',
  },
];

const Home = () => {
  return (
    <div className="mt-[-38px] mb-96 pb-96 w-full h-screen">
      {/* Header Section */}
      <header className="bg-[#fff9e5] h-[119px] w-full text-center py-6 rounded-lg mx-4 md:mx-8 lg:mx-16 mt-11 mb-9">
        <h1 className="text-[#4e4b66] text-[18px] font-bold">No Ads yet...</h1>
      </header>

      {/* Cards Section */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white  h-auto flex flex-col gap-[20px] rounded-lg overflow-hidden transform hover:scale-[1.01] transition-all duration-300 relative"
          >
            {/* Image Section */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[306px] rounded-[15px] object-cover"
            />

            {/* Content Section */}
            <div className="p-6">
              <h2 className="text-xl -translate-y-[100px] font-semibold text-[24px] text-white mb-4">
                {card.title}
              </h2>
              <p className="text-[#14142A] text-[1rem] leading-[24px] font-[400] mb-6 -translate-y-12">{card.description}</p>
              <Link
                href={card.buttonLink}
                className="w-[70%] px-4 py-2 bg-gradient-to-r from-[#04e2e2] to-[#00bbbb] text-[#ffffff] border md:flex h border-b-4 border-b-gray font-semibold rounded-full cursor-pointer hover:bg-teal-600 transition-all duration-300"
              >
                {card.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </main>

      {/* Footer Section */}
      <footer className="bg-[#f7deac] rounded-[16px] flex gap-5 py-8 my-12 h-[238px] mx-4 md:mx-8 lg:mx-16 items-center justify-between px-3">
        <h3 className="text-[#14142A] text-[36px] w-[496px] pl-6 leading-[40px] font-bold mb-4">
          Connect with others in our chat room and community forums
        </h3>
        <Link
          href="#"
          className="w-[238px] h-[54px] p-[33px] flex items-center justify-center border border-[#4C3A00] text-[#4C3A00] shadow2 rounded-[55px] cursor-pointer bg-white hover:text-black transition-all duration-300"
        >
          Join Forum
        </Link>
      </footer>
    </div>
  );
};

export default Home;
