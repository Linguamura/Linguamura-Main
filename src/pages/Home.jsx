import { Link } from "react-router-dom";

const cardsData = [
  {
    image: '/images/homepage/Education.png',
    title: 'Education',
    description: 'With Linguamura, you can learn new languages and expand your knowledge with our educational resources and explore scholarship opportunities.',
    buttonText: 'Learn',
    buttonLink: '/dashboard/education',
  },
  {
    image: '/images/homepage/Health.png',
    title: 'Health',
    description: 'With LinguaMura, you can take control of your health and wellness with personalized advice and tools.',
    buttonText: 'Control your health',
    buttonLink: '#',
  },
  {
    image: '/images/homepage/Marketplace.png',
    title: 'Marketplace',
    description: 'With LinguaMura, discover new products and services in our marketplace.',
    buttonText: 'Shop',
    buttonLink: '#',
  },
  {
    image: '/images/homepage/Transport.png',
    title: 'Transport',
    description: 'Plan your next trip or commute with our transportation features',
    buttonText: 'Transport',
    buttonLink: '#',
  },
  {
    image: '/images/homepage/Housing.png',
    title: 'Housing',
    description: 'Find your dream home with our real estate services.',
    buttonText: 'Housing',
    buttonLink: '#',
  },
  {
    image: '/images/homepage/Entertainment.png',
    title: 'Entertainment',
    description: 'Enjoy movies, music, and games in our entertainment section.',
    buttonText: 'Entertainment',
    buttonLink: '#',
  },
];

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white p-6">
      {/* Header Section */}
      <header className="bg-[#fff9e5] w-full rounded-2xl py-8 mb-8">
        <h1 className="text-[#4e4b66] text-lg font-semibold text-center">
          No Ads yet...
        </h1>
      </header>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cardsData.map((card, index) => (
          <div key={index} className="rounded-2xl overflow-hidden bg-white shadow-sm">
            {/* Card Image Container */}
            <div className="relative h-[306px]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              {/* <h2 className="absolute bottom-6 left-6 text-2xl font-semibold text-white">
                {card.title}
              </h2> */}
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col gap-4">
              <p className="text-[#14142A] text-base leading-6">
                {card.description}
              </p>
              <Link
                to={card.buttonLink}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#04e2e2] to-[#00bbbb] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                {card.buttonText} →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Forum Section */}
      <div className="bg-[#f7deac] rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <h3 className="text-[#14142A] text-3xl md:text-4xl font-bold max-w-xl">
          Connect with others in our chat room and community forums
        </h3>
        <Link
          to="#"
          className="px-8 py-3 bg-white text-[#4C3A00] border border-[#4C3A00] rounded-full font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
        >
          Join Forum
        </Link>
      </div>
    </div>
  );
};

export default Home;