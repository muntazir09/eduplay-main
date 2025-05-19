import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import { UserProgressProvider } from './context/UserProgressContext';
import { AuthProvider } from './context/AuthContext';
import { SubscriptionProvider } from './context/SubscriptionContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import GameDetails from './pages/GameDetails';
import ActivitiesPage from './pages/ActivitiesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import SubscriptionPage from './pages/SubscriptionPage';

function App() {
  return (
    <AuthProvider>
      <SubscriptionProvider>
        <Router>
          <UserProgressProvider>
            <GameProvider>
              <div className="min-h-screen flex flex-col bg-blue-50">
                <NavBar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/games" element={<GamesPage />} />
                    <Route path="/games/:id" element={<GameDetails />} />
                    <Route path="/activities" element={<ActivitiesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/testimonials" element={<TestimonialsPage />} />
                    <Route path="/subscription" element={<SubscriptionPage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </GameProvider>
          </UserProgressProvider>
        </Router>
      </SubscriptionProvider>
    </AuthProvider>
  );
}

export default App;