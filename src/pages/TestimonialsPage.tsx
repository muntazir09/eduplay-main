import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users, Award, BookOpen } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  const parentTestimonials = [
    {
      id: 1,
      name: "Jennifer Stevens",
      role: "Parent of Alex, 7",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "EduPlay has transformed our after-school routine. Instead of struggling to get my son to practice math, he asks to play the Math Wizards game! His teacher has noticed significant improvement in his arithmetic skills.",
      rating: 5
    },
    {
      id: 2,
      name: "Robert Johnson",
      role: "Father of twins, 5",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "As a parent of twins with different learning styles, I've been amazed at how EduPlay adapts to both their needs. One loves the science games while the other is all about language activities, but they're both learning and having fun!",
      rating: 5
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Mother of Sofia, 6",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "My daughter struggled with reading until we discovered Word Safari. The game made learning new words exciting for her, and now she proudly reads bedtime stories to her younger brother. Thank you, EduPlay!",
      rating: 5
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Father of Ethan, 8",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "As a busy working parent, I appreciate that EduPlay provides quality educational content I can trust. The progress tracking helps me stay involved in my son's learning journey even when I can't be there for every moment.",
      rating: 4
    }
  ];
  
  const teacherTestimonials = [
    {
      id: 5,
      name: "Ms. Sarah Peterson",
      role: "First Grade Teacher",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "I recommend EduPlay to all the parents in my class. The games reinforce what we learn in the classroom, and I've seen remarkable improvement in students who use it regularly. It's become an invaluable teaching partner.",
      rating: 5
    },
    {
      id: 6,
      name: "Mr. David Chen",
      role: "Special Education Teacher",
      image: "https://images.pexels.com/photos/8617942/pexels-photo-8617942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "The inclusivity of EduPlay's games has been a game-changer for my special education students. The adaptability options allow children of different abilities to enjoy the same games while learning at their own pace.",
      rating: 5
    }
  ];
  
  const childTestimonials = [
    {
      id: 7,
      name: "Emily, age 8",
      image: "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "I love the Art Studio game! I made a picture of my family and learned about mixing colors. My mom put my picture on the fridge!",
      rating: 5
    },
    {
      id: 8,
      name: "Tyler, age 6",
      image: "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "The dinosaur counting game is my favorite! I can count all the way to 100 now!",
      rating: 5
    },
    {
      id: 9,
      name: "Sophia, age 7",
      image: "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "I play Science Lab every day. I learned about volcanoes and made a big explosion! It was just pretend but really cool.",
      rating: 5
    }
  ];
  
  const successStories = [
    {
      id: 10,
      title: "From Struggling to Star Student",
      image: "https://images.pexels.com/photos/8535236/pexels-photo-8535236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story: "When Jake started first grade, he was behind his peers in reading skills and lacked confidence. His parents introduced him to EduPlay's Word Safari and Alphabet Adventure games. After just three months of regular play, Jake's reading fluency improved dramatically. His teacher reported that he had moved up two reading levels and now voluntarily participates in classroom reading activities."
    },
    {
      id: 11,
      title: "Making Math Fun Again",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story: "Lily used to cry whenever it was time for math homework. Her parents were concerned about her developing math anxiety at such a young age. They started her on EduPlay\'s Math Wizards game, which turned learning arithmetic into an exciting adventure. Within weeks, Lily was practicing math voluntarily and proudly showing off her \"math magic\" to family members. Her confidence has soared, and math is now one of her favorite subjects."
    },
    {
      id: 12,
      title: "Learning Without Limits",
      image: "https://images.pexels.com/photos/8535216/pexels-photo-8535216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story: "Ethan, a child with autism, often found traditional learning environments overwhelming. His parents discovered EduPlay's customizable interface that allowed them to adjust sound levels, visual effects, and game pacing to suit Ethan's sensory preferences. The consistent structure of the games and clear visual instructions helped Ethan engage with educational content in a way that worked for him. His parents were thrilled to find a platform that adapted to his needs rather than expecting him to adapt to it."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-4 text-purple-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials & Success Stories
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          See what parents, teachers, and children are saying about their EduPlay experience
        </motion.p>
        
        {/* Featured Testimonial */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <Quote size={48} className="text-purple-300" />
              </div>
              <p className="text-xl italic text-gray-700 mb-6">
                "As an elementary school principal, I've seen many educational platforms come and go, but EduPlay stands out for its pedagogical excellence and genuine engagement factor. We've implemented it across our K-3 classrooms, and the impact on student achievement has been remarkable. What impresses me most is how it makes learning joyful while maintaining educational rigor."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dr. Michael Thompson" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Dr. Michael Thompson</h3>
                  <p className="text-purple-600">Elementary School Principal</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-purple-600">
              <img 
                src="https://images.pexels.com/photos/8535239/pexels-photo-8535239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Children learning with EduPlay" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Parent Testimonials */}
        <section className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-purple-100 p-2 rounded-full mr-3">
              <Users size={24} className="text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-purple-700">Parent Testimonials</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parentTestimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <Quote size={24} className="text-purple-300 mr-2 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-purple-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Teacher Testimonials */}
        <section className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <BookOpen size={24} className="text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-purple-700">Teacher Testimonials</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teacherTestimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <Quote size={24} className="text-blue-300 mr-2 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-blue-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Kids Corner */}
        <section className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <Star size={24} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-purple-700">Kids Corner</h2>
          </div>
          
          <div className="bg-green-50 p-8 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {childTestimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  className="bg-white p-5 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="relative w-20 h-20">
                      <div className="absolute inset-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover border-4 border-green-200"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1">
                        <Star size={16} className="text-white fill-white" />
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-center text-gray-800 mb-2">{testimonial.name}</h4>
                  <p className="text-gray-700 text-center italic text-sm">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Success Stories */}
        <section>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <Award size={24} className="text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-purple-700">Success Stories</h2>
          </div>
          
          <div className="space-y-12">
            {successStories.map((story, index) => (
              <motion.div 
                key={story.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="md:flex">
                  <div className={`md:w-1/3 ${index % 2 === 1 ? 'order-2' : ''}`}>
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold mb-4 text-purple-700">{story.title}</h3>
                    <p className="text-gray-700 mb-6">{story.story}</p>
                    <div className="flex">
                      <motion.button
                        className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-4 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read Full Story
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialsPage;