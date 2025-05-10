import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GameCard from './GameCard';

const FeaturedGames: React.FC = () => {
  const games = [
    {
      id: 'math-wizards',
      title: 'Math Wizards',
      description: 'Cast spells by solving math problems and defeat the number monsters!',
      image: 'https://images.pexels.com/photos/3693101/pexels-photo-3693101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Math',
      age: '6-9',
      difficulty: 'Easy',
      stars: 5
    },
    {
      id: 'word-safari',
      title: 'Word Safari',
      description: 'Explore the jungle and discover new words and their meanings along the way.',
      image: 'https://images.pexels.com/photos/8451490/pexels-photo-8451490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Language',
      age: '7-10',
      difficulty: 'Medium',
      stars: 4
    },
    {
      id: 'science-lab',
      title: 'Science Lab',
      description: 'Mix potions and conduct experiments while learning about science concepts.',
      image: 'https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Science',
      age: '8-12',
      difficulty: 'Medium',
      stars: 5
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-indigo-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Games
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/games">
              <motion.button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Games
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;