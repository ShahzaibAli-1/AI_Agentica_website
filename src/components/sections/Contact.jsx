import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Clock, CheckCircle, X, Loader2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
                e.target.reset();

                // Hide success message after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            } else {
                setError('Failed to send message. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center py-24 bg-gray-50 dark:bg-gray-800 relative snap-start">


            {/* Error Notification */}
            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
                >
                    <div className="bg-red-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <AlertCircle className="w-6 h-6 flex-shrink-0" />
                            <div>
                                <p className="font-semibold">Error!</p>
                                <p className="text-sm text-red-100">{error}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setError(null)}
                            className="ml-4 hover:bg-red-700 rounded-lg p-1 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 opacity-50" />

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
                            Scale Your Vision
                            <span className="block text-gray-900 dark:text-white">With Expert Engineering</span>
                        </h2>
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
                                <a href="mailto:ai.agentica@gmail.com" className="text-gray-900 dark:text-white hover:text-black dark:hover:text-gray-200 transition-colors font-medium">
                                    ai.agentica@gmail.com
                                </a>
                            </div>

                            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-black dark:bg-gray-800 flex items-center justify-center mb-4">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quick Response</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-3">We typically respond within 24 hours</p>
                                <div className="flex items-center gap-2 text-gray-700">

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
                                {/* Web3Forms Access Key */}
                                <input type="hidden" name="access_key" value="53429f7c-2a17-4e7b-ad51-e674da8308b1" />

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

                                {/* Success Notification */}
                                <AnimatePresence>
                                    {isSubmitted && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="bg-green-600 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg mb-4 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold text-xs md:text-sm">Message Sent!</p>
                                                        <p className="text-[10px] md:text-xs text-green-100">We'll get back to you soon.</p>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => setIsSubmitted(false)}
                                                    className="ml-2 hover:bg-green-700 rounded p-0.5 transition-colors"
                                                >
                                                    <X className="w-3 h-3 md:w-4 md:h-4" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full text-base py-6 bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Contact;
