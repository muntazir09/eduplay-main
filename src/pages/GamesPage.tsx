import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';
import { Search, Filter } from 'lucide-react';

const GamesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  
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
    },
    {
      id: 'melody-maker',
      title: 'Melody Maker',
      description: 'Create music and learn about different instruments and musical notes.',
      image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Music',
      age: '5-10',
      difficulty: 'Easy',
      stars: 4
    },
    {
      id: 'art-studio',
      title: 'Art Studio',
      description: 'Express your creativity and learn about colors, shapes, and famous artists.',
      image: 'https://images.pexels.com/photos/4545108/pexels-photo-4545108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Art',
      age: '4-8',
      difficulty: 'Easy',
      stars: 5
    },
    {
      id: 'memory-match',
      title: 'Memory Match',
      description: 'Test your memory by matching pairs of cards and learn new facts.',
      image: 'https://images.pexels.com/photos/3905729/pexels-photo-3905729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Logic',
      age: '5-12',
      difficulty: 'Medium',
      stars: 5
    }
  ];
  
  const categories = [...new Set(games.map(game => game.category))];
  const ageGroups = [...new Set(games.map(game => game.age))];
  
  const filteredGames = games.filter(game => {
    return (
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || game.category === selectedCategory) &&
      (selectedAge === '' || game.age === selectedAge)
    );
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-4 text-indigo-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Fun Educational Games
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore our collection of interactive games designed to make learning enjoyable!
        </motion.p>
        
        {/* Search and Filter */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search games..."
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <select
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Filter size={20} className="text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <select
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
              >
                <option value="">All Age Groups</option>
                {ageGroups.map((age, index) => (
                  <option key={index} value={age}>{age} years</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Filter size={20} className="text-gray-400" />
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.length > 0 ? (
            filteredGames.map((game, index) => (
              <GameCard key={game.id} game={game} delay={index * 0.1} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-600">No games found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;