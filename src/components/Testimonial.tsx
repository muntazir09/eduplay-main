import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, image }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md transition-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-start mb-4">
        <Quote size={24} className="text-purple-300 mr-3 mt-1 flex-shrink-0" />
        <p className="text-gray-700 italic leading-relaxed">{quote}</p>
      </div>

      <div className="flex items-center">
        <img
          src={image}
          alt={`Photo of ${name}`}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-purple-600">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
