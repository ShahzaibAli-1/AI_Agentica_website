import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Clients from './components/sections/Clients';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';

function App() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem('theme');
        const isDarkMode = savedTheme === 'dark';
        
        setIsDark(isDarkMode);
        
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        
        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 selection:bg-gray-200 dark:selection:bg-gray-700 transition-colors duration-300">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <Services />
                <Portfolio />
                <Clients />
                <Team />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
