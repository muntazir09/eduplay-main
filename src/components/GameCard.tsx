import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  age: string;
  difficulty: string;
  stars: number;
}

interface GameCardProps {
  game: Game;
  delay?: number;
}

const GameCard: React.FC<GameCardProps> = ({ game, delay = 0 }) => {
  const difficultyColor = () => {
    switch (game.difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img 
          src={game.image} 
          alt={game.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {game.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-800">{game.title}</h3>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColor()}`}>
            {game.difficulty}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm">{game.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < game.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">Ages {game.age}</span>
        </div>
        
        <Link to={`/games/${game.id}`}>
          <motion.button 
            className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Play Now
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default GameCard;