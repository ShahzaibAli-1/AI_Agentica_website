import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const projects = [
        {
            title: "Davinchi",
            desc: "Advanced AI art generation platform creating stunning visuals from text prompts.",
            tags: ["AI Art", "Generation", "Design"],
            image: "/visuals/projects/davinci.png",
        },
        {
            title: "Crop Classification",
            desc: "Agricultural AI system using computer vision to identify crop health and diseases.",
            tags: ["Computer Vision", "Agriculture", "ML"],
            image: "/visuals/projects/Crop_Image.jpeg",
        },
        {
            title: "AI Meet",
            desc: "Intelligent meeting assistant that records, transcribes, and summarizes calls in real-time.",
            tags: ["AI Assistant", "Transcription", "NLP"],
            image: "/visuals/projects/AI_Meeting.webp",
        },
        {
            title: "Doc Extractor",
            desc: "Automated document processing engine extracting structured data from unstructured PDFs.",
            tags: ["OCR", "Document AI", "Automation"],
            image: "/visuals/projects/Document_extractor.png",
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
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Our Projects</h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Witness the beauty of innovation through our projects, as we showcase stunning solutions that evoke wonder and appreciation for technology.
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-900" />
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg"
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-900" />
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
                                    className={`relative rounded-3xl overflow-hidden ${
                                        idx === 1 ? 'w-full md:w-[380px]' : 'hidden md:block w-[320px]'
                                    } h-[500px] group cursor-pointer`}
                                >
                                    {/* Background Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    
                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                        <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                                        <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                                            {project.desc}
                                        </p>
                                        
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, i) => (
                                                <span 
                                                    key={i} 
                                                    className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Arrow Icon */}
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-white group-hover:border-white transition-all">
                                            <ArrowRight className="w-5 h-5 text-white group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
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
                                className={`h-2 rounded-full transition-all ${
                                    index === currentIndex 
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
