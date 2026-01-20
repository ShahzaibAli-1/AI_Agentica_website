import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Clients = () => {
    const testimonials = [
        {
            quote: "Agentica's solutions helped us automate 70% of our manual data entry work. The ROI was immediate.",
            name: "Sarah Chen",
            role: "CTO, FinTech Global",
            logo: "FinTech"
        },
        {
            quote: "The strategic insight provided by their AI team was invaluable. We are now leading our sector in AI adoption.",
            name: "Marcus Johnson",
            role: "Director of Operations, HealthScale",
            logo: "HealthScale"
        },
        {
            quote: "Reliable, scalable, and secure. Exactly what we needed for our enterprise AI rollout.",
            name: "Elena Rodriguez",
            role: "VP of Engineering, CloudSystems",
            logo: "CloudSystems"
        }
    ];

    return (
        <section id="clients" className="min-h-screen flex flex-col justify-center py-24 bg-white dark:bg-gray-900 relative overflow-hidden snap-start">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 opacity-50" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Testimonials</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">Trusted by Innovators</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Partnering with forward-thinking companies to build the future of work.
                    </p>
                </motion.div>

                {/* Logo Marquee */}
                <div className="mb-20 overflow-hidden">
                    <div className="flex space-x-16 animate-marquee whitespace-nowrap opacity-30 hover:opacity-50 transition-opacity">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex space-x-16 items-center text-gray-900">
                                <span className="text-2xl font-bold">ACME Corp</span>
                                <span className="text-2xl font-bold">GlobalTech</span>
                                <span className="text-2xl font-bold">Nebula.ai</span>
                                <span className="text-2xl font-bold">Vertex</span>
                                <span className="text-2xl font-bold">Horizon</span>
                                <span className="text-2xl font-bold">Apex Industries</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((t, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                        >
                            <Quote className="w-10 h-10 text-gray-900 opacity-20 mb-6" />
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">"{t.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-black" />
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">{t.name}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
