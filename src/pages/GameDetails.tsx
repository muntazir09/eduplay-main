import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, Award, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import MathWizards from '../games/MathWizards';
import WordSafari from '../games/WordSafari';
import ScienceLab from '../games/ScienceLab';
import MelodyMaker from '../games/MelodyMaker';
import ArtStudio from '../games/ArtStudio';
import MemoryMatch from '../games/MemoryMatch';

const GameDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<any>(null);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const gameData = {
      'math-wizards': {
        id: 'math-wizards',
        title: 'Math Wizards',
        description: 'Cast spells by solving math problems and defeat the number monsters!',
        longDescription: 'Math Wizards is an enchanting game where children become math magicians! Players solve arithmetic problems to cast spells against number monsters. As they progress, they\'ll encounter addition, subtraction, multiplication, and division challenges of increasing difficulty. Each correct answer powers up their magical abilities, while special power-ups help with tricky questions. Colorful animations and magical effects make learning math an exciting adventure!',
        image: 'https://images.pexels.com/photos/3693101/pexels-photo-3693101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Math',
        age: '6-9',
        difficulty: 'Easy',
        stars: 5,
        time: '15-20 min',
        skills: ['Addition', 'Subtraction', 'Problem Solving', 'Quick Thinking'],
        component: MathWizards
      },
      'word-safari': {
        id: 'word-safari',
        title: 'Word Safari',
        description: 'Explore the jungle and discover new words and their meanings along the way.',
        longDescription: 'Word Safari takes children on an exciting journey through a colorful jungle where they discover and learn new words. Players help their explorer character navigate through different environments, each focused on a different vocabulary theme. They\'ll encounter animals, plants, and other jungle elements, learning new words and their meanings. Interactive mini-games reinforce spelling, word recognition, and vocabulary building in a fun, engaging way!',
        image: 'https://images.pexels.com/photos/8451490/pexels-photo-8451490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Language',
        age: '7-10',
        difficulty: 'Medium',
        stars: 4,
        time: '20-25 min',
        skills: ['Vocabulary', 'Reading', 'Spelling', 'Word Recognition'],
        component: WordSafari
      },
      'science-lab': {
        id: 'science-lab',
        title: 'Science Lab',
        description: 'Mix potions and conduct experiments while learning about science concepts.',
        longDescription: 'Science Lab transforms children into curious scientists in a virtual laboratory filled with exciting experiments! Players mix colorful potions, observe reactions, and learn fundamental science concepts through hands-on virtual experiments. The game introduces basic chemistry, physics, and biology concepts through puzzles and challenges. Children will learn about states of matter, simple chemical reactions, and basic scientific principles while having fun with vibrant animations and exciting discoveries!',
        image: 'https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Science',
        age: '8-12',
        difficulty: 'Medium',
        stars: 5,
        time: '25-30 min',
        skills: ['Observation', 'Scientific Concepts', 'Cause and Effect', 'Critical Thinking'],
        component: ScienceLab
      },
      'melody-maker': {
        id: 'melody-maker',
        title: 'Melody Maker',
        description: 'Create music and learn about different instruments and musical notes.',
        longDescription: 'Melody Maker is a creative musical playground where children explore the world of music! Players experiment with different instruments, compose their own melodies, and learn about musical notes, rhythms, and patterns. Through interactive challenges, they\'ll discover various musical styles and instruments from around the world. The game features colorful visual representations of sound and vibration, making abstract musical concepts tangible and fun to learn!',
        image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Music',
        age: '5-10',
        difficulty: 'Easy',
        stars: 4,
        time: '15-20 min',
        skills: ['Musical Notes', 'Rhythm', 'Instrument Recognition', 'Composition'],
        component: MelodyMaker
      },
      'art-studio': {
        id: 'art-studio',
        title: 'Art Studio',
        description: 'Express your creativity and learn about colors, shapes, and famous artists.',
        longDescription: 'Art Studio is a vibrant creative space where children can express themselves while learning about art! Players explore different artistic styles, experiment with colors and shapes, and learn about famous artists and their works. The game offers various digital tools like brushes, stamps, and patterns for creating original artwork. Guided challenges help children learn about color theory, composition, and artistic techniques in an engaging, pressure-free environment that celebrates creativity!',
        image: 'https://images.pexels.com/photos/4545108/pexels-photo-4545108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Art',
        age: '4-8',
        difficulty: 'Easy',
        stars: 5,
        time: '20-30 min',
        skills: ['Color Theory', 'Shapes', 'Creativity', 'Fine Motor Skills'],
        component: ArtStudio
      },
      'memory-match': {
        id: 'memory-match',
        title: 'Memory Match',
        description: 'Test your memory by matching pairs of cards and learn new facts.',
        longDescription: 'Memory Match challenges children\'s recall abilities while teaching them interesting facts! In this classic card-matching game with an educational twist, players flip cards to find matching pairs while memorizing their positions. Each successful match reveals fascinating information about animals, geography, science, or history. Multiple difficulty levels ensure the game grows with the child, while themed card sets allow them to focus on subjects they find most interesting. Colorful animations celebrate successful matches!',
        image: 'https://images.pexels.com/photos/3905729/pexels-photo-3905729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Logic',
        age: '5-12',
        difficulty: 'Medium',
        stars: 5,
        time: '10-15 min',
        skills: ['Memory', 'Concentration', 'Pattern Recognition', 'General Knowledge'],
        component: MemoryMatch
      }
    };
    
    setGame(gameData[id as keyof typeof gameData]);
  }, [id]);
  
  if (!game) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl">Loading game...</p>
        </div>
      </div>
    );
  }
  
  const GameComponent = game.component;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/games" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Back to Games
          </Link>
        </div>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-xl mb-12">
          <div className="relative h-64 md:h-80">
            <img 
              src={game.image} 
              alt={game.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6">
                <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                  {game.category}
                </span>
                <h1 className="text-4xl font-bold text-white mb-2">{game.title}</h1>
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">{game.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">Ages {game.age}</span>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < game.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Game</h2>
                <p className="text-gray-600 mb-6">{game.longDescription}</p>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">Skills Developed</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.skills.map((skill: string, index: number) => (
                    <span 
                      key={index}
                      className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-8">
                  <motion.button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-md flex items-center transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Award size={20} className="mr-2" />
                    Track Progress
                  </motion.button>
                  
                  <motion.button
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 px-8 rounded-lg shadow-md flex items-center transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Share2 size={20} className="mr-2" />
                    Share
                  </motion.button>
                </div>
              </div>
              
              <div>
                <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Game Details</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium text-gray-900">{game.category}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Age Range:</span>
                      <span className="font-medium text-gray-900">{game.age} years</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Difficulty:</span>
                      <span className="font-medium text-gray-900">{game.difficulty}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Play Time:</span>
                      <span className="font-medium text-gray-900">{game.time}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <BookOpen size={20} className="mr-2 text-green-600" />
                    Learning Tips
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                      <span>Ask your child to explain their strategy as they play</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                      <span>Connect game concepts to real-world examples</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                      <span>Celebrate progress, not just perfect scores</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Game Component */}
        <motion.div
          className="bg-white rounded-xl overflow-hidden shadow-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Play {game.title}</h2>
          </div>
          <div className="p-6">
            <GameComponent />
          </div>
        </motion.div>
        
        {/* Related Games */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This would be populated with other games in a real app */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Melody Maker"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Melody Maker</h3>
                <p className="text-sm text-gray-600 mb-3">Create music and learn about musical notes.</p>
                <Link to="/games/melody-maker">
                  <motion.button 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Play Now
                  </motion.button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/4545108/pexels-photo-4545108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Art Studio"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Art Studio</h3>
                <p className="text-sm text-gray-600 mb-3">Express creativity and learn about colors.</p>
                <Link to="/games/art-studio">
                  <motion.button 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Play Now
                  </motion.button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/3905729/pexels-photo-3905729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Memory Match"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Memory Match</h3>
                <p className="text-sm text-gray-600 mb-3">Test your memory and learn new facts.</p>
                <Link to="/games/memory-match">
                  <motion.button 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Play Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;