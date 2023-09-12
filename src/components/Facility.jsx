import React from 'react';

import Facility1Image from './4.jpg';
import Facility2Image from './5.jpg';
import Facility3Image from './6.jpg';
import Facility4Image from './7.jpg';

const Facilities = () => {
  const facilities = [
    {
      name: 'Outpatient Clinic',
      description: 'Outpatient clinics are typically more convenient and affordable for patients as well. Day surgery centers, urgent care clinics, and specialty clinics are often in close proximity to a patient’s home, providing easier access to high-quality, non-emergency care.',
      image: Facility1Image, 
    },
    {
      name: 'Long-Term Care Facility',
      description: 'Long-term care facilities support people with short-term recovery, ongoing health conditions, or disabilities. They are designed to help patients complete daily activities as safely and as independently as possible.',
      image: Facility2Image,
    },
    {
      name: 'Hospice',
      description: 'Depending on the care required and cost, hospice services can be accessed in a hospice facility, at the patient’s home, in long-term facilities, or in the hospital.',
      image: Facility3Image, 
    },
    {
      name: 'Health Care Administrator Skills',
      description: 'Depending on the care required and cost, hospice services can be accessed in a hospice facility, at the patient’s home, in long-term facilities, or in the hospital.',
      image: Facility4Image, 
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#5594be] to-[#dd5243] py-16 animate-in slide-in-from-left duration-1000">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-white mb-8">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.name}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
