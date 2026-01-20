import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center py-24 bg-white dark:bg-gray-900 relative snap-start overflow-hidden transition-colors duration-300">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-gray-100 dark:from-gray-800 via-gray-50 dark:via-gray-900 to-transparent rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear" 
                    }}
                />
                <motion.div 
                    className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-gray-50 dark:from-gray-900 via-gray-100 dark:via-gray-800 to-transparent rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{ 
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear" 
                    }}
                />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Text Content */}
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-8"
                            >
                                {/* <Sparkles className="w-4 h-4 text-gray-900 dark:text-white" /> */}
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI-Powered End to End Solutions</span>
                            </motion.div>
                            
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
                                <span className="block text-gray-900 dark:text-white mb-2">Building the</span>
                                <span className="block text-gray-900 dark:text-white">
                                    Future of AI-Powered
                                </span>
                                <span className="block text-gray-900 dark:text-white">Enterprise</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                                We craft exceptional digital experiences that drive growth. From AI-powered automation to stunning web applications—we turn your ideas into reality.
                            </p>
                            
                            <motion.div 
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <Button
                                    size="lg"
                                    className="text-base px-8 py-6 bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black rounded-full transition-all group"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Start Project
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-base px-8 py-6 bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-gray-400 rounded-full transition-all"
                                    onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    View Our Work
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
