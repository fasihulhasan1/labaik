import React, { useState } from 'react';
import swal from 'sweetalert';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('@gmail.com');
    const [number, setNumber] = useState('');
    const [disease, setDisease] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [selectedDate, setSelectedDate] = useState(getTodayDate());

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '' || email === '@gmail.com' || number === '' || disease === '' || gender === '' || selectedDate === '') {
            swal('Warning', 'All Fields are Required', 'warning');
        }
    };

    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <div className="flex justify-center animate-in slide-in-from-top duration-1000">
            <form className="w-full md:w-1/2 lg:w-1/3 px-4 sm:px-8" onSubmit={handleSubmit}>
                <h1 className="text-2xl sm:text-4xl text-center text-white font-semibold mb-4">Book Appointment</h1>

                <div className="mb-4">
                    <input type="text" className="p-3 rounded-md w-full" value={name} onChange={e => { setName(e.target.value) }} placeholder="Name" required />
                </div>

                <div className="mb-4">
                    <input type="number" className="p-3 rounded-md w-full" value={age} onChange={e => { setAge(e.target.value) }} placeholder="Age" required />
                </div>

                <div className="mb-4">
                    <select
                        value={gender}
                        onChange={handleGenderChange}
                        className="p-3 rounded-md w-full"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="mb-4">
                    <input type="email" className="p-3 rounded-md w-full" value={email} onChange={e => { setEmail(e.target.value) }} placeholder="Email" required />
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        className="p-3 rounded-md w-full"
                        value={number}
                        onChange={e => { setNumber(e.target.value) }}
                        placeholder="Phone Number"
                        required
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="date"
                        className="p-3 rounded-md w-full"
                        value={selectedDate}
                        onChange={e => { setSelectedDate(e.target.value) }}
                        min={getTodayDate()}
                        required
                    />
                </div>

                <div className="mb-4">
                    <textarea
                        name=""
                        className="p-3 rounded-md w-full"
                        value={disease}
                        onChange={e => { setDisease(e.target.value) }}
                        placeholder="Disease"
                        id=""
                        cols="30"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="p-3 rounded-md w-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 mb-10"
                >
                    Book Appointment
                </button>
            </form>
        </div>
    );
};

export default Contact;
