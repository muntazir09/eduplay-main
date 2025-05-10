import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, BookOpen } from 'lucide-react';

const AboutPage: React.FC = () => {
  const mission = [
    {
      title: "Engaging Education",
      description: "We believe learning should be fun and engaging. Our interactive games and activities are designed to capture children's interest while teaching essential skills.",
      icon: <BookOpen size={40} className="text-blue-500" />
    },
    {
      title: "Child-Centered Approach",
      description: "Every feature on EduPlay is created with children's needs in mind. We focus on age-appropriate content that encourages exploration and creativity.",
      icon: <Heart size={40} className="text-red-500" />
    },
    {
      title: "Excellence in Learning",
      description: "Our educational content is developed by experts in child development and education to ensure high-quality learning experiences.",
      icon: <Award size={40} className="text-yellow-500" />
    },
    {
      title: "Community Support",
      description: "We work closely with parents, teachers, and educational institutions to create resources that complement classroom learning and home activities.",
      icon: <Users size={40} className="text-green-500" />
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Educational Director",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "With over 15 years in early childhood education, Sarah created EduPlay to make learning accessible and enjoyable for all children."
    },
    {
      name: "Michael Chen",
      role: "Lead Game Developer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Michael specializes in creating educational games that balance fun gameplay with effective learning objectives."
    },
    {
      name: "Priya Patel",
      role: "Curriculum Specialist",
      image: "https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Priya ensures all EduPlay content aligns with educational standards while remaining engaging for young learners."
    },
    {
      name: "David Wilson",
      role: "Child Development Expert",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "With a PhD in Child Psychology, David helps design activities that support healthy cognitive and social development."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-4 text-indigo-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About EduPlay
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Making education fun, interactive, and accessible for children around the world.
        </motion.p>
        
        {/* Our Story Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <motion.img 
                  src="https://images.pexels.com/photos/8535237/pexels-photo-8535237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Children learning" 
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12">
                <motion.h2 
                  className="text-3xl font-bold mb-6 text-indigo-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Our Story
                </motion.h2>
                
                <motion.div
                  className="space-y-4 text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <p>
                    EduPlay was founded in 2020 with a simple mission: to transform how children learn through play. We noticed that while digital tools were becoming increasingly important in education, many educational platforms were either too focused on entertainment without substantial learning, or too academic without engaging children's natural curiosity.
                  </p>
                  <p>
                    Our team of educators, game developers, and child development specialists came together to create a platform that strikes the perfect balance – delivering solid educational content through genuinely fun and interactive experiences.
                  </p>
                  <p>
                    Today, EduPlay serves thousands of children worldwide, helping them develop essential skills in math, language, science, art, and more – all while having a great time!
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-indigo-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Mission
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mission.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-indigo-700">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-indigo-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-indigo-700">{member.name}</h3>
                  <p className="text-indigo-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <motion.div
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-indigo-100">Active Users</div>
              </motion.div>
              
              <motion.div
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-indigo-100">Educational Games</div>
              </motion.div>
              
              <motion.div
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-indigo-100">Partner Schools</div>
              </motion.div>
              
              <motion.div
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-indigo-100">Countries Reached</div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section>
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-indigo-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 order-2 md:order-1">
                <motion.h3 
                  className="text-2xl font-bold mb-6 text-indigo-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  What We Stand For
                </motion.h3>
                
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-full mr-4 text-indigo-700">1</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Inclusion</h4>
                      <p className="text-gray-600">We create content that is accessible to children of all abilities and backgrounds.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-full mr-4 text-indigo-700">2</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Innovation</h4>
                      <p className="text-gray-600">We continuously explore new ways to make learning more effective and engaging.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-full mr-4 text-indigo-700">3</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Integrity</h4>
                      <p className="text-gray-600">We maintain high standards in our content and prioritize child safety in all we do.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-full mr-4 text-indigo-700">4</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Impact</h4>
                      <p className="text-gray-600">We measure our success by the positive difference we make in children's educational journeys.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2">
                <motion.img 
                  src="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Children playing and learning" 
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;