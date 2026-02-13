import React from 'react';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Team = () => {
    const team = [
        {
            name: "Shahzaib Ali",
            role: "AI Engineer",
            image: "/visuals/team/Shahzaib_Ali.jpg",
            linkedin: "https://www.linkedin.com/in/shahzaib-ali-khan-64511224b/"
        },
        {
            name: "Shaiman Qadir",
            role: "Web Developer",
            image: "/visuals/team/Shaiman.jpeg",
            linkedin: "https://www.linkedin.com/in/shaimaan-qadir-17a2a5268/"
        },
        {
            name: "Amr Rameez",
            role: "MLOps Engineer",
            image: "/visuals/team/Amar.jpeg",
            linkedin: "https://www.linkedin.com/in/amar-rameez-a5337022a/"
        },
        {
            name: "Abdul Moiz Rana",
            role: "Full-Stack Developer",
            image: "/visuals/team/Rana.jpeg",
            linkedin: "https://www.linkedin.com/in/abdul-moiz-rana-590289259/"
        },
        {
            name: "Abdulahad Iltaf",
            role: "Automation Engineer",
            image: "/visuals/team/Ahad.jpg",
            linkedin: "https://www.linkedin.com/in/ACoAAEZ_i1oB0rYJiFbQEeklE55RxGEUzU8-a0M"
        }
    ];

    return (
        <section id="team" className="min-h-screen flex flex-col justify-center py-24 bg-white dark:bg-gray-900 relative transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Exceptional Team</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Meet our outstanding team - a synergy of talent, creativity, and dedication, crafting success together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto justify-items-center">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="relative w-40 h-40 mb-4">
                                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-all duration-300"
                                    />
                                </div>
                            </div>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{member.role}</p>
                            <div className="flex justify-center">
                                <a
                                    href={member.linkedin}
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    aria-label="LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
