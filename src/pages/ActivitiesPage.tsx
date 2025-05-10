import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ActivitiesPage: React.FC = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: 'fractions',
      title: 'Fun with Fractions',
      description: 'Learn and master fractions through interactive puzzles!',
      category: 'Math',
      difficulty: 'Medium',
      rating: 4,
      ageRange: 'Ages 7-10',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7njpvnjSbJepsGoWK3k3K8qebnFI3SmJUw&s',
    },
    {
      id: 'math-mastery',
      title: 'Math Mastery Adventure',
      description: 'Join a journey to sharpen your math skills!',
      category: 'Math',
      difficulty: 'Hard',
      rating: 5,
      ageRange: 'Ages 8-11',
      image: 'https://edsurge.imgix.net/uploads/post/image/14455/math-1635199826.png?auto=compress%2Cformat&w=640&h=259&fit=crop',
    },
    {
      id: 'cars-kids',
      title: 'Cars for Kids',
      description: 'Learn shapes, colors, and more with fun cars!',
      category: 'STEM',
      difficulty: 'Easy',
      rating: 4,
      ageRange: 'Ages 5-8',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIp1YGeBuxWbaJN0jN4ZQ-KJQUfzrjiWFhQ&s',
    },
    {
      id: 'colors',
      title: "Let's Learn Colors!",
      description: 'Identify and match vibrant colors while playing!',
      category: 'Art',
      difficulty: 'Easy',
      rating: 5,
      ageRange: 'Ages 4-6',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi85tNIEE8pt2FVPiMGohwNxKKEM8nYig9mQ&s',
    },
    {
      id: 'islam',
      title: 'Welcome to the World of Islam!',
      description: 'Discover the basics of Islam in a fun, engaging way!',
      category: 'Religion',
      difficulty: 'Medium',
      rating: 5,
      ageRange: 'Ages 6-10',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAZDyASLaA7Znh-3Jpf4gGiAtUAgtw5bILQ&s',
    },
    {
      id: 'astronaut',
      title: 'Welcome to the Astronaut Game!',
      description: 'Explore space and learn about planets and stars!',
      category: 'Science',
      difficulty: 'Medium',
      rating: 4,
      ageRange: 'Ages 7-11',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfhjRG0wdFtIwKuQZRjmaln74s02ESHk8Iw&s',
    },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#F0F5FF]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h1 
          className="text-4xl font-bold text-center mb-4 text-indigo-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Fun Educational Games
        </motion.h1>
        <motion.p 
          className="text-xl text-center mb-12 text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore our collection of interactive games designed to make learning enjoyable!
        </motion.p>

        {/* Game Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 relative flex flex-col"
            >
              <img src={game.image} alt={game.title} className="w-full h-56 object-cover" />

              {/* Category Badge */}
              <span className="absolute top-4 left-4 bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                {game.category}
              </span>

              {/* Difficulty Tag */}
              <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                {game.difficulty}
              </span>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{game.title}</h3>
                <p className="text-gray-600 mb-4">{game.description}</p>

                {/* Stars and Age */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center text-yellow-500">
                    {Array(game.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" stroke="none" />
                      ))}
                  </div>
                  <span className="text-gray-500">{game.ageRange}</span>
                </div>

                <button
                  onClick={() => navigate(`/activity/${game.id}`)}
                  className="bg-indigo-600 text-white font-semibold py-2 rounded-xl hover:bg-indigo-700 transition"
                >
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Tip */}
        <motion.div 
          className="mt-16 bg-white p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="bg-indigo-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <BookOpen size={32} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Educational Tip</h3>
              <p className="text-gray-600">
                Activities that engage multiple senses help children learn more effectively. Try combining 
                interactive games for a comprehensive learning experience. Remember to make learning fun by 
                celebrating progress and encouraging curiosity!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
