import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        // {
        //     title: "Doc Extractor",
        //     desc: "Automated document processing engine extracting structured data from unstructured PDFs.",
        //     tags: ["OCR", "Document AI", "Automation"],
        //     image: "/visuals/projects/Document_extractor.png",
        //     link: "https://ocr-image-to-text-prkbfqxwjpe9w3jrhsehve.streamlit.app/"
        // },
        {
            title: "HelpMeLaw",
            desc: "Full-stack legal assistance platform with document upload, processing, and legal Q&A. Features REST APIs using FastAPI, secure file handling, query processing, and scalable backend services for interactive legal workflows.",
            tags: ["FastAPI", "Legal AI", "Document Processing", "Full-Stack"],
            image: "/visuals/projects/law.png",
            link: "https://helpmelaw.us/"
        },
        {
            title: "Medory.ai",
            desc: "Production-grade AI medical documentation platform for automated SOAP note generation from audio and text. Features secure authentication, role-based access, patient session management, and note history with React.js frontend and FastAPI/Node.js backend.",
            tags: ["React", "FastAPI", "Node.js", "Medical AI"],
            image: "/visuals/projects/medori.png",
            link: "https://medory.ai/"
        },
        {
            title: "ElanceBalance",
            desc: "End-to-end yoga and wellness platform with user onboarding, class listings, subscriptions, and content management. Built with React.js frontend, Node.js and FastAPI backend, featuring authentication, payments, and admin panel.",
            tags: ["React", "Node.js", "FastAPI", "Full-Stack"],
            image: "/visuals/projects/eyoga.png",
            link: "https://www.elancebalance.com/"
        },
        {
            title: "Crop Classification",
            desc: "Agricultural AI system using computer vision to identify crop health and diseases.",
            tags: ["Computer Vision", "Agriculture", "ML"],
            image: "/visuals/projects/Crop_Image.jpeg",
        },
        {
            title: "Meeting Master",
            desc: "Advanced AI-driven meeting platform integrating computer vision, speech processing, and LLM.",
            tags: ["Computer Vision", "Speech AI", "Diarization", "LLM"],
            image: "/visuals/projects/AI_Meeting.webp",
        },
        {
            title: "Data Insight Website",
            desc: "Official Data Insight web portal for FAST-NUCES Islamabad. Features dynamic pages, dashboards, and API-driven content updates with focus on performance, responsiveness, and maintainable architecture.",
            tags: ["Web Development", "Dashboards", "API Integration", "Analytics"],
            image: "/visuals/projects/data.png",
            link: "https://isb.nu.edu.pk/datainsight/"
        },
        {
            title: "Multi-Lingual Chatbot",
            desc: "Interactive multi-lingual chatbot using Python and FastAPI, supporting English, Slovenian, and Croatian. Features Google Gemini NLP with speech-to-text and text-to-speech capabilities, plus Redis session management for multi-user context retention.",
            tags: ["Python", "FastAPI", "NLP", "Speech AI"],
            image: "/visuals/projects/IZI.jpeg",
            link: "https://izi-free-version.onrender.com/"
        },
        {
            title: "Intelli-Verse",
            desc: "NextJS full-stack multi-feature AI app with tools for conversation, image, videos, music, and code generation. Features clean dashboard UI with role-based routing and Clerk authentication.",
            tags: ["NextJS", "Full-Stack", "AI Tools", "Authentication"],
            image: "/visuals/projects/intelli.png",
            link: "https://intelli-verse.vercel.app/"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % projects.length;
            visible.push({ ...projects[index], originalIndex: index });
        }
        return visible;
    };

    return (
        <section id="work" className="min-h-screen flex flex-col justify-center py-24 bg-gray-50 dark:bg-gray-800 relative snap-start overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Explore our portfolio of cutting-edge solutions that transform industries and push the boundaries of what's possible.
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 p-3 rounded-full bg-gray-900 dark:bg-white border border-gray-700 dark:border-gray-300 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-6 h-6 text-white dark:text-gray-900" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 p-3 rounded-full bg-gray-900 dark:bg-white border border-gray-700 dark:border-gray-300 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg"
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-6 h-6 text-white dark:text-gray-900" />
                    </button>

                    {/* Cards Display */}
                    <div className="flex gap-6 justify-center items-center px-8">
                        <AnimatePresence mode="wait">
                            {getVisibleProjects().map((project, idx) => (
                                <motion.div
                                    key={`${project.originalIndex}-${currentIndex}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: idx === 1 ? 1 : 0.4,
                                        scale: idx === 1 ? 1 : 0.85,
                                        y: idx === 1 ? 0 : 20
                                    }}
                                    transition={{ duration: 0.5 }}
                                    onClick={() => {
                                        if (idx === 1) {
                                            // Center card - open link if available
                                            project.link && window.open(project.link, '_blank');
                                        } else if (idx === 0) {
                                            // Left card - go to previous
                                            prevSlide();
                                        } else if (idx === 2) {
                                            // Right card - go to next
                                            nextSlide();
                                        }
                                    }}
                                    className={`relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 ${idx === 1 ? 'w-full md:w-[500px]' : 'hidden md:block w-[420px]'
                                        } h-[550px] group cursor-pointer hover:shadow-3xl transition-all duration-300 bg-white dark:bg-gray-900`}
                                >
                                    {/* Image Section - Top Half */}
                                    <div className="relative h-[280px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Subtle overlay on image */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                                    </div>

                                    {/* Content Section - Bottom Half with Solid Background */}
                                    <div className="relative h-[270px] p-6 bg-white dark:bg-gray-900 flex flex-col">
                                        {/* Title */}
                                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3 flex-grow">
                                            {project.desc}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Arrow Icon */}
                                        <div className="flex justify-between items-center">
                                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 dark:bg-white group-hover:bg-gray-800 dark:group-hover:bg-gray-100 transition-all">
                                                <ArrowRight className="w-5 h-5 text-white dark:text-gray-900 group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-12">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'w-8 bg-gray-900 dark:bg-white'
                                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// export default Portfolio;
//     );
// };

export default Portfolio;
