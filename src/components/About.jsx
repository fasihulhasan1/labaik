import React from 'react';

const About = () => {
  return (
    <div className="text-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-8 container animate-in zoom-in-0 duration-1000">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Our Hospital</h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          We are a leading healthcare provider dedicated to delivering quality medical services and care to our patients. With a team of highly skilled doctors, nurses, and staff, we are committed to your well-being.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          Our hospital has been serving the community since 2023, and we take pride in being a trusted name in healthcare. We specialize in a wide range of medical services, including diagnostics, surgeries, and specialized treatments.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          At our hospital, patient care and comfort are our top priorities. We strive to create a healing and welcoming environment for all our patients. Your health is our mission, and we are here to support you every step of the way.
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Our Mission</h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          Our mission is to provide compassionate, accessible, and high-quality healthcare services to our community. We aim to improve the health and well-being of our patients through cutting-edge medical treatments and personalized care.
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Our Team</h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          Our dedicated team of healthcare professionals includes experienced doctors, nurses, and support staff who are committed to delivering the best care possible. We believe in continuous learning and staying updated with the latest advancements in the medical field to offer you the best treatment options.
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 underline hover:text-blue-700">
          <a href="/Contact">Book Appointment</a>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          If you have any questions or need to schedule an appointment, please don't hesitate to reach out to us. We are here to serve you and provide the healthcare you deserve.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Contact Information: <a href="tel:0341-1132709" className="underline">0341-1132709</a> | <a href="www.labbaikhealth.com" className="underline">www.labbaikhealth.com</a>
        </p>
      </div>
    </div>
  );
};

export default About;
