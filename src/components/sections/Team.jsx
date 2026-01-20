import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Team = () => {
    const team = [
        {
            name: "Shahzaib Ali",
            role: "AI Engineer",
            image: "/visuals/team/Shahzaib_Ali.jpg",
            social: {
                twitter: "#",
                instagram: "#",
                facebook: "#"
            }
        },
        {
            name: "Shaiman Qadir",
            role: "Computer Vision Specialist",
            image: "/visuals/team/Shaiman.jpeg",
            social: {
                twitter: "#",
                instagram: "#",
                facebook: "#"
            }
        },
        {
            name: "Amr Rameez",
            role: "MLOps Engineer",
            image: "/visuals/team/Amar.jpeg",
            social: {
                twitter: "#",
                instagram: "#",
                facebook: "#"
            }
        },
        {
            name: "Abdul Moiz Rana",
            role: "Full-Stack Developer",
            image: "/visuals/team/Rana.jpeg",
            social: {
                twitter: "#",
                instagram: "#",
                facebook: "#"
            }
        },
        {
            name: "Abdulahad Iltaf",
            role: "Automation Engineer",
            image: "/visuals/team/Ahad.jpg",
            social: {
                twitter: "#",
                instagram: "#",
                facebook: "#"
            }
        },
        {
            name: "Haji Dilbar",
            role: "Web Developer",
            image: "/visuals/team/Haji_Dilbar.jpg",
            social: {
                twitter: "#",
                instagram: "#",
                facebook: "#"
            }
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 max-w-7xl mx-auto">
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
                            <div className="flex gap-3">
                                <a 
                                    href={member.social.twitter}
                                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a 
                                    href={member.social.instagram}
                                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a 
                                    href={member.social.facebook}
                                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-4 h-4" />
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
