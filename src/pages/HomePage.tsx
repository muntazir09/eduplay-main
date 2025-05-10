import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, TowerControl as GameController, Lightbulb, Award } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import FeaturedGames from '../components/FeaturedGames';
import LearningPath from '../components/LearningPath';
import Testimonial from '../components/Testimonial';

const HomePage: React.FC = () => {
  const features = [
    { icon: <GameController size={40} className="text-purple-500" />, title: "Fun Games", description: "Learn through play with our interactive educational games" },
    { icon: <BookOpen size={40} className="text-green-500" />, title: "Activities", description: "Engage with hands-on activities that make learning exciting" },
    { icon: <Lightbulb size={40} className="text-yellow-500" />, title: "Knowledge", description: "Develop essential skills across different subjects" },
    { icon: <Award size={40} className="text-red-500" />, title: "Achievements", description: "Earn badges and track your learning progress" }
  ];

  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 className="text-4xl font-bold text-center mb-12 text-indigo-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Learn, Play, Grow!
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}>
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-center mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-center text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedGames />
      <LearningPath />

      {/* Testimonials */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <motion.h2 className="text-4xl font-bold text-center mb-12 text-indigo-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            What Kids & Parents Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial 
              quote="My 6-year-old has improved so much in math since using EduPlay. The games make learning fun!" 
              name="Sarah Johnson" 
              role="Parent" 
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" />
            <Testimonial 
              quote="I love the alphabet game! It helped me learn all my letters and sounds." 
              name="Tommy, age 5" 
              role="Student" 
              image="https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg" />
          </div>
          <div className="mt-12 text-center">
            <Link to="/testimonials">
              <motion.button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Read More Stories
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Ready to Start the Learning Adventure?
          </motion.h2>
          <motion.p className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            Join thousands of children who are learning while having fun!
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Link to="/games">
              <motion.button 
                className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Explore Games
              </motion.button>
            </Link>
            <Link to="/activities">
              <motion.button 
                className="bg-white hover:bg-gray-100 text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Discover Activities
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTIONS */}

      {/* Why Choose EduPlay */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-4xl font-bold text-indigo-800 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Why Choose EduPlay?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Safe & Kid-Friendly</h3>
              <p>All content is curated and age-appropriate with no ads or distractions.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Real-Time Progress</h3>
              <p>Parents and teachers can track learning milestones easily.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
              <p>Each child gets a customized experience based on their pace and level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parental Dashboard */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://img.freepik.com/free-vector/parental-control-concept-illustration_114360-2584.jpg" alt="Parental Dashboard" className="rounded-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Parental Dashboard</h2>
            <p className="text-gray-700 text-lg mb-4">Keep track of your child’s learning journey, progress reports, achievements, and more in one easy-to-use dashboard.</p>
            <Link to="/parents">
              <button className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-full hover:bg-indigo-700 transition-all">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Challenges */}
      <section className="py-20 bg-indigo-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-4xl font-bold text-indigo-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Take on Daily Learning Challenges!
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">Kids can complete new challenges every day and win badges. Stay motivated and build healthy learning habits.</p>
          <Link to="/challenges">
            <button className="bg-yellow-400 text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-all">
              See Today's Challenge
            </button>
          </Link>
        </div>
      </section>

      {/* Mobile App Promo */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Learn Anywhere with Our Mobile App</h2>
          <p className="text-lg mb-6">Available on Android and iOS. Play educational games, do activities, and track progress anytime, anywhere.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="bg-white text-indigo-800 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all">Download for Android</a>
            <a href="#" className="bg-white text-indigo-800 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all">Download for iOS</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-indigo-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              ["Is EduPlay free?", "EduPlay offers free and premium options. Most games and activities are free to use!"],
              ["Is this safe for children?", "Absolutely! EduPlay is designed with child safety in mind, with no ads and full parental controls."],
              ["Can I monitor my child's progress?", "Yes, the parental dashboard lets you see progress, achievements, and time spent on activities."],
              ["Does it work offline?", "Our mobile app supports offline mode for most games and lessons."]
            ].map(([q, a], i) => (
              <div key={i} className="p-6 border rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
