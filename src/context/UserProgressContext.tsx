import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  icon: string;
}

interface UserProgressContextType {
  score: number;
  level: number;
  achievements: Achievement[];
  addPoints: (points: number) => void;
  completeAchievement: (achievementId: string) => void;
  resetProgress: () => void;
}

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

export const UserProgressProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [score, setScore] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'first-game',
      title: 'First Steps',
      description: 'Complete your first game',
      completed: false,
      icon: '🎮'
    },
    {
      id: 'math-master',
      title: 'Math Master',
      description: 'Score 100 points in Math Wizards',
      completed: false,
      icon: '🧙‍♂️'
    },
    {
      id: 'word-explorer',
      title: 'Word Explorer',
      description: 'Complete 5 words in Word Safari',
      completed: false,
      icon: '🦁'
    },
    {
      id: 'scientist',
      title: 'Junior Scientist',
      description: 'Complete all experiments in Science Lab',
      completed: false,
      icon: '🧪'
    },
    {
      id: 'all-around',
      title: 'All-Around Learner',
      description: 'Play at least one game in each category',
      completed: false,
      icon: '🌟'
    }
  ]);
  
  const addPoints = (points: number) => {
    const newScore = score + points;
    setScore(newScore);
    
    // Level up system
    const newLevel = Math.floor(newScore / 100) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
    }
  };
  
  const completeAchievement = (achievementId: string) => {
    setAchievements(achievements.map(achievement => 
      achievement.id === achievementId 
        ? { ...achievement, completed: true } 
        : achievement
    ));
    
    // Award bonus points for completing an achievement
    addPoints(25);
  };
  
  const resetProgress = () => {
    setScore(0);
    setLevel(1);
    setAchievements(achievements.map(achievement => ({ ...achievement, completed: false })));
  };
  
  return (
    <UserProgressContext.Provider
      value={{
        score,
        level,
        achievements,
        addPoints,
        completeAchievement,
        resetProgress
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = (): UserProgressContextType => {
  const context = useContext(UserProgressContext);
  if (context === undefined) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
};