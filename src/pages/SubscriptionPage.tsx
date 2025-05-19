import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Shield, Zap, Users, Crown, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useSubscription } from '../context/SubscriptionContext';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const SubscriptionPage: React.FC = () => {
  const { user } = useAuth();
  const { subscription, updateSubscription } = useSubscription();
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const features = {
    free: [
      'Access to basic educational games',
      'Limited progress tracking',
      'Basic parental controls',
      'Ad-supported experience'
    ],
    premium: [
      'Access to all educational games',
      'Detailed progress tracking',
      'Advanced parental controls',
      'Ad-free experience',
      'Offline mode access',
      'Priority customer support',
      'Monthly activity reports'
    ],
    family: [
      'All Premium features',
      'Up to 4 child profiles',
      'Family progress dashboard',
      'Customizable learning paths',
      'Monthly parent webinars',
      'Expert educational support',
      'Cross-device sync'
    ]
  };

  const pricingCards = [
    {
      id: 'free',
      title: 'Free',
      price: '0',
      period: 'forever',
      features: features.free,
      icon: <Star className="w-6 h-6" />,
      color: 'bg-gray-100',
      buttonColor: 'bg-gray-600 hover:bg-gray-700',
      popular: false
    },
    {
      id: 'premium',
      title: 'Premium',
      price: '9.99',
      period: 'per month',
      features: features.premium,
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-purple-100',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      popular: true
    },
    {
      id: 'family',
      title: 'Family',
      price: '19.99',
      period: 'per month',
      features: features.family,
      icon: <Crown className="w-6 h-6" />,
      color: 'bg-indigo-100',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
      popular: false
    }
  ];

  const handleSubscribe = async (planId: string) => {
    if (!user) {
      setError('Please sign in to subscribe');
      return;
    }

    try {
      setLoading(planId);
      setError(null);

      if (planId === 'free') {
        // Handle free plan
        return;
      }

      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      await updateSubscription(planId);
      
      // Redirect to checkout will be handled by the updateSubscription function
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(null);
    }
  };

  const getButtonText = (planId: string) => {
    if (subscription?.plan === planId) {
      return 'Current Plan';
    }
    return planId === 'free' ? 'Get Started' : 'Subscribe';
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-4 text-indigo-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Learning Adventure
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Select the perfect plan for your child's educational journey
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingCards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`rounded-2xl overflow-hidden shadow-lg ${card.popular ? 'ring-2 ring-purple-500' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`${card.color} p-6`}>
                {card.popular && (
                  <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    Most Popular
                  </span>
                )}
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg ${card.popular ? 'bg-purple-200' : 'bg-gray-200'} mr-3`}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${card.price}</span>
                  <span className="text-gray-600">/{card.period}</span>
                </div>
              </div>
              
              <div className="bg-white p-6">
                <ul className="space-y-4 mb-6">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className={`w-full ${card.buttonColor} text-white font-bold py-3 px-6 rounded-lg transition-colors relative ${
                    subscription?.plan === card.id ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={{ scale: subscription?.plan !== card.id ? 1.02 : 1 }}
                  whileTap={{ scale: subscription?.plan !== card.id ? 0.98 : 1 }}
                  onClick={() => handleSubscribe(card.id)}
                  disabled={loading !== null || subscription?.plan === card.id}
                >
                  {loading === card.id ? (
                    <Loader2 className="w-6 h-6 animate-spin mx-auto" />
                  ) : (
                    getButtonText(card.id)
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8">
            {error}
          </div>
        )}

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-700">Why Choose Premium?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enhanced Learning</h3>
              <p className="text-gray-600">
                Access to advanced games and activities tailored to your child's learning style
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Advanced parental controls and a completely ad-free learning environment
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Family Focused</h3>
              <p className="text-gray-600">
                Create multiple profiles and track progress for all your children
              </p>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold mb-2">Can I switch plans at any time?</h3>
              <p className="text-gray-600">
                Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes will take effect at the start of your next billing cycle.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-2">Is there a free trial for Premium?</h3>
              <p className="text-gray-600">
                We offer a 14-day free trial of our Premium plan so you can experience all the features before committing.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and Apple Pay. All payments are securely processed and encrypted.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">Ready to Start?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of families who trust EduPlay for their children's education
          </p>
          <Link to="/contact">
            <motion.button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SubscriptionPage;