import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Puzzle, Music, PenTool, Calculator } from 'lucide-react';

const LearningPath: React.FC = () => {
  const subjects = [
    {
      icon: <Calculator size={32} className="text-purple-500" />,
      title: "Math",
      description: "Numbers, counting, shapes, and problem-solving",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: <BookOpen size={32} className="text-blue-500" />,
      title: "Reading",
      description: "Letters, phonics, vocabulary, and stories",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: <Brain size={32} className="text-green-500" />,
      title: "Science",
      description: "Nature, animals, experiments, and discoveries",
      color: "from-green-400 to-green-500"
    },
    {
      icon: <Puzzle size={32} className="text-yellow-500" />,
      title: "Logic",
      description: "Puzzles, patterns, and critical thinking",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: <PenTool size={32} className="text-red-500" />,
      title: "Art",
      description: "Drawing, colors, creativity, and expression",
      color: "from-red-400 to-red-500"
    },
    {
      icon: <Music size={32} className="text-pink-500" />,
      title: "Music",
      description: "Sounds, rhythm, instruments, and songs",
      color: "from-pink-400 to-pink-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-indigo-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Learning Paths
        </motion.h2>
        
        <motion.p 
          className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore different subjects with our carefully designed educational content
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`p-6 bg-gradient-to-r ${subject.color} group-hover:scale-105 transition-transform duration-300`}>
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {subject.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{subject.title}</h3>
                <p className="text-white/90 text-sm">{subject.description}</p>
              </div>
              
              <div className="bg-white p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">5+ activities</span>
                  <motion.button 
                    className="text-indigo-600 font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPath;