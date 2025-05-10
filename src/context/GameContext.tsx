import React, { createContext, useState, useContext, ReactNode } from 'react';

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

interface GameContextType {
  games: Game[];
  favoriteGames: string[];
  completedGames: string[];
  addFavorite: (gameId: string) => void;
  removeFavorite: (gameId: string) => void;
  markGameCompleted: (gameId: string) => void;
  isGameCompleted: (gameId: string) => boolean;
  isGameFavorite: (gameId: string) => boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [favoriteGames, setFavoriteGames] = useState<string[]>([]);
  const [completedGames, setCompletedGames] = useState<string[]>([]);
  
  const games: Game[] = [
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
  
  const addFavorite = (gameId: string) => {
    setFavoriteGames([...favoriteGames, gameId]);
  };
  
  const removeFavorite = (gameId: string) => {
    setFavoriteGames(favoriteGames.filter(id => id !== gameId));
  };
  
  const markGameCompleted = (gameId: string) => {
    if (!completedGames.includes(gameId)) {
      setCompletedGames([...completedGames, gameId]);
    }
  };
  
  const isGameCompleted = (gameId: string) => {
    return completedGames.includes(gameId);
  };
  
  const isGameFavorite = (gameId: string) => {
    return favoriteGames.includes(gameId);
  };
  
  return (
    <GameContext.Provider
      value={{
        games,
        favoriteGames,
        completedGames,
        addFavorite,
        removeFavorite,
        markGameCompleted,
        isGameCompleted,
        isGameFavorite
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};