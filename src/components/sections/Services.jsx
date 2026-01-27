import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
    const [activeService, setActiveService] = useState(2); // UI/UX Design active by default

    const services = [
        {
            title: "Intelligent AI Agent Development",
            description: "Build autonomous AI agents that reason, plan, and execute complex business tasks with enterprise-grade reliability and scalability.",
        },
        {
            title: "Enterprise AI Automation",
            description: "Deploy intelligent automation solutions that transform workflows, reduce operational costs, and boost productivity across your organization.",
        },
        {
            title: "Custom AI Solutions",
            description: "Tailored artificial intelligence and machine learning solutions designed for your unique business challenges and growth objectives.",
        },
        {
            title: "AI-Powered CRM Integration",
            description: "Seamlessly integrate intelligent CRM systems with AI automation to enhance customer engagement and optimize sales performance.",
        },
        {
            title: "Computer Vision & AI Analytics",
            description: "Advanced image recognition, video analysis, and real-time visual intelligence powered by cutting-edge AI technology.",
        },
        {
            title: "AI-Enhanced Web & Mobile Development",
            description: "Full-stack application development with integrated AI capabilities for smarter, more responsive digital experiences.",
        }
    ];

    return (
        <section id="services" className="min-h-screen flex flex-col justify-center py-24 bg-white dark:bg-gray-900 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 block">
                            OUR SERVICE
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                            What <span className="text-gray-500">Services</span><br />
                            We're Offering
                        </h2>
                    </motion.div>

                    <div className="space-y-1">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <button
                                    onClick={() => setActiveService(index)}
                                    className={`w-full text-left py-6 px-2 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 group ${
                                        activeService === index 
                                            ? 'text-gray-900 dark:text-white' 
                                            : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                                            activeService === index ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'
                                        }`}>
                                            {service.title}
                                        </span>
                                        <ChevronRight className={`w-6 h-6 transition-all duration-300 ${
                                            activeService === index 
                                                ? 'text-gray-900 dark:text-white translate-x-1' 
                                                : 'text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-1'
                                        }`} />
                                    </div>
                                    
                                    <AnimatePresence>
                                        {activeService === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
