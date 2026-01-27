import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const subject = `Project Inquiry from ${formData.get('firstName')} ${formData.get('lastName')}`;
        const body = `Name: ${formData.get('firstName')} ${formData.get('lastName')}
Email: ${formData.get('email')}
Message:
${formData.get('message')}`;

        window.location.href = `mailto:contact@agentroller.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center py-24 bg-gray-50 dark:bg-gray-800 relative snap-start">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-50" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div 
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Get In Touch</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Transform Your Business
                            <span className="block text-gray-900 dark:text-white">With AI Agents</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Ready to deploy intelligent AI automation? Contact Agent Roller today to discuss how our AI agents can revolutionize your enterprise operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-black dark:bg-gray-800 flex items-center justify-center mb-4">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-3">Drop us a line anytime</p>
                                <a href="mailto:contact@agentroller.com" className="text-gray-900 hover:text-black transition-colors font-medium">
                                    contact@agentroller.com
                                </a>
                            </div>

                            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-black dark:bg-gray-800 flex items-center justify-center mb-4">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quick Response</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-3">We typically respond within 24 hours</p>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">Mon - Fri: 9AM - 6PM</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div 
                            className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                                        <Input 
                                            name="firstName" 
                                            placeholder="Jane" 
                                            required 
                                            className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-900"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                                        <Input 
                                            name="lastName" 
                                            placeholder="Doe" 
                                            required 
                                            className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-900"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Work Email</label>
                                    <Input 
                                        name="email" 
                                        type="email" 
                                        placeholder="jane@company.com" 
                                        required 
                                        className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-900"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                    <textarea
                                        name="message"
                                        className="flex min-h-[120px] w-full rounded-md border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20 resize-none"
                                        placeholder="Tell us about your project..."
                                        required
                                    />
                                </div>

                                <Button 
                                    type="submit" 
                                    className="w-full text-base py-6 bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black rounded-full"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
