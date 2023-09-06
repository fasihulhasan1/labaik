import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import hospitalImage1 from './1.png';
import hospitalImage2 from './2.jpg';
import hospitalImage3 from './logo.jpg';
import hospitalImage4 from './3.png';
import patient from './accident.jpg';
import patient1 from './mareez.jpeg';
import patient2 from './Doctor.jpg';
import patient3 from './medicine.jpg';


const Home = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        arrows: true,
    };

    const imageStyle = {
        width: '610px',
        height: '500px',
        display: 'block',
        margin: '0px',
        border: '2px solid #3498db',
        borderRadius: '10px',
    };

    return (
        <div className={`mt-8 grid grid-cols-2 text-white`}>
            <div className="text-white p-8">
                <h1 className="mb-5 lg:text-[80px] md:text-[50px] sm:text-[30px] mt-14 font-bold">
                    Welcome to Our Hospital
                </h1>
                <p className="lg:text-[18px] md:text-[9px] sm:text-[5px]">
                    Providing Quality Healthcare Services In Your Area <b>24/7</b>
                </p>
            </div>
            <div className="lg:text-[18px] md:text-[9px] sm:text-[5px] w-[90%] ">
                <Slider {...sliderSettings}>
                    <div>
                        <img
                            src={hospitalImage1}
                            alt="Hospital Building 1"
                            style={imageStyle}
                        />
                    </div>
                    <div >
                        <img
                            src={hospitalImage2}
                            alt="Hospital Building 2"
                            style={imageStyle}
                        />
                    </div>
                    <div >
                        <img
                            src={hospitalImage3}
                            alt="Hospital Building 2"
                            style={imageStyle}
                        />
                    </div>
                    <div >
                        <img
                            src={hospitalImage4}
                            alt="Hospital Building 2"
                            style={imageStyle}
                        />
                    </div>
                </Slider>
            </div>
            <div className="px-[100px] my-16">
                <img
                    src={patient}
                    alt="Attractive Image"
                    style={{ width: '500px', height: '320px', margin: '10px', borderRadius: '4px' }}
                />
                <h className="text-4xl font-bold px-[15px]">
                    Accident and Emergency
                </h>
                <p className=" text-lg px-5 py-8 mb-32">
                    A&E (accident and emergency) is for serious injuries and life-threatening emergencies only. It is also known as the emergency department or casualty. Life-threatening emergencies are different for adults and children.
                </p>

                <img
                    src={patient2}
                    alt="Attractive Image"
                    style={{ width: '500px', height: 'auto', margin: '10px', borderRadius: '4px' }}
                />
                <h className="text-3xl font-bold px-[15px]">
                    Specialist consulting clinics
                </h>
                <p className=" text-lg px-5 py-8">
                    <h3>The best General Physicians in Aga Khan Hospital are:</h3>
                    <ul className="list-inside list-disc">
                        <li>Prof. Dr. Riaz Quershi.</li>
                        <li>Asst. Prof. Dr. Unab I Khan.</li>
                        <li>Dr. Waris Qidwai.</li>
                        <li> Dr. Yousaf Kamal Mirza.</li>
                        <li>Dr. Seerat Uz Zehra.</li>
                        <li>Assoc. Prof. Dr. Saniya Sabzwari.</li>
                    </ul>
                </p>

            </div>
            <div className="px-[100px] my-96 mb-5">
                <img
                    src={patient1}
                    alt="Attractive Image"
                    style={{ width: '500px', height: 'auto', margin: '10px', borderRadius: '4px' }}
                />
                <h className="text-4xl font-bold px-[15px]">
                    Inpatient Services
                </h>
                <p className=" text-lg px-5 py-8 mb-32">
                    An inpatient is a hospital patient who, in most cases, stays in the hospital overnight and meets a set of clinical criteria. Outpatients are people who receive care or hospital services and return home the same day.
                </p>

                <img
                    src={patient3}
                    alt="Attractive Image"
                    style={{ width: '500px', height: '320px', margin: '10px', borderRadius: '4px' }}
                />
                <h className="text-4xl font-bold px-[15px]">
                    Medicine Ward
                </h>
                <p className=" text-lg px-5 py-8">
                    General physicians (or a specialist in internal medicine) are specialist physicians with expertise in the diagnosis and management of complex, chronic and multisystem disorders. They are able to co-ordinate patient care and work within the multidisciplinary team to optimise health outcomes for individuals and groups.
                </p>

            </div>
        </div>
    );
};

export default Home;
