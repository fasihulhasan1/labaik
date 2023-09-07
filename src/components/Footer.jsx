import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#5594be] to-[#dd5243] text-white py-8">
            <div className="border-t border-gray-600 mt-8 pt-4"></div>
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <address>
                            123 Main Street<br />
                            City, State ZIP<br />
                            Phone: (123) 456-7890<br />
                            Email: info@hospital.com
                        </address>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="list-none">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/doctors">Doctors</a></li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <ul className="list-none">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                        <p>Subscribe to our newsletter to receive updates and news.</p>
                        <form className="mt-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-md w-full"
                            />
                            <button
                                type="submit"
                                className="mt-2 p-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold w-full"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-600 mt-8 pt-4">
                <div className="max-w-screen-xl mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Your Hospital. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
