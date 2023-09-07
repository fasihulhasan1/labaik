import React from 'react';

const Facilities = () => {
  const facilities = [
    {
      name: 'State-of-the-Art Equipment',
      description: 'We have the latest medical equipment for accurate diagnostics and treatment.',
      image: 'equipment.jpg', // Image file name in the public folder
    },
    {
      name: 'Specialized Departments',
      description: 'Our hospital offers specialized departments with expert doctors.',
      image: 'departments.jpg',
    },
    {
      name: 'Emergency Services',
      description: 'We provide 24/7 emergency services with a highly skilled ER team.',
      image: 'emergency.jpg',
    },
    {
      name: 'Patient Comfort',
      description: 'We prioritize patient comfort with modern and comfortable facilities.',
      image: 'comfort.jpg',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={`/images/${facility.image}`} // Assuming images are in the public folder
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
