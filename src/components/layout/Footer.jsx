import React from 'react';
import { Sparkles, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16 text-gray-600">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#hero" className="mb-4 group inline-block">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-green-600 dark:group-hover:from-blue-400 dark:group-hover:to-green-400 transition-all duration-300">
                                Agent Roller
                            </h2>
                        </a>
                        <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
                            Pioneering intelligent AI agents and automation solutions for the enterprise of tomorrow.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">AI Strategy</a></li>
                            <li><a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Custom Agents</a></li>
                            <li><a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Workflow Automation</a></li>
                            <li><a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">LLM Integration</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#team" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#work" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Our Work</a></li>
                            <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
                        <div className="flex gap-3 mb-6">
                            <a href="#" className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700 hover:border-gray-900 text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700 hover:border-gray-900 text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700 hover:border-gray-900 text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                        <a href="mailto:ai.agentica@gmail.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
                            <Mail className="w-4 h-4" />
                            ai.agentica@gmail.com
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-500">© {new Date().getFullYear()} Agent Roller - AI Automation & Enterprise Solutions. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
