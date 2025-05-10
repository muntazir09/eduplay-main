import React from 'react';
import { useParams, Link } from 'react-router-dom';

const gameDetails: Record<string, { title: string; src: string; description: string }> = {
  fractions: {
    title: 'Fun with Fractions',
    src: '//www.tinytap.com/activities/g5uzx/player/embed/',
    description: 'Learn how to work with fractions through fun and interactive problems!',
  },
  'math-mastery': {
    title: 'Math Mastery Adventure',
    src: '//www.tinytap.com/activities/g5uzy/player/embed/',
    description: 'Master numbers, patterns, and math logic with this exciting game.',
  },
  'cars-kids': {
    title: 'Cars for Kids',
    src: '//www.tinytap.com/activities/g5uzz/player/embed/',
    description: 'A fun game about cars designed to keep young learners engaged.',
  },
  colors: {
    title: "Let's Learn Colors!",
    src: '//www.tinytap.com/activities/g5v00/player/embed/',
    description: 'Help children identify and differentiate colors through shapes.',
  },
  islam: {
    title: 'Welcome to the World of Islam!',
    src: '//www.tinytap.com/activities/g5v01/player/embed/',
    description: 'An introductory guide for kids to explore basic facts about Islam.',
  },
  astronaut: {
    title: 'Welcome to the Astronaut Game!',
    src: '//www.tinytap.com/activities/g5uzw/player/embed/',
    description: 'Explore space with a fun astronaut-themed learning adventure.',
  },
};

const ActivityDetail: React.FC = () => {
  const { id } = useParams();
  const game = gameDetails[id || ''];

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-600 text-xl font-semibold">Activity not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="relative h-64 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-4xl text-white font-bold">{game.title}</h1>
          </div>
        </div>
        <div className="p-8">
          <div className="mb-6">
            <iframe
              src={game.src}
              className="w-full aspect-video rounded-xl border"
              allowFullScreen
              style={{ border: 0 }}
            ></iframe>
          </div>
          <p className="text-gray-700 text-lg mb-6">{game.description}</p>
          <div className="flex justify-center">
            <Link
              to="/activities"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-indigo-700 transition"
            >
              Back to Activities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
