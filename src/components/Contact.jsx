import React, { useState } from 'react';
import swal from 'sweetalert';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('@gmail.com');
    const [number, setNumber] = useState('');
    const [disease, setDisease] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const handleGenderChange = (e) => { setGender(e.target.value) }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('formsubmitted')
        if (name === '' || email === '@gmail.com' || number === '' || disease === '' || gender === '') {
            swal("warning", "All Fields are Required", "warning")
        }
    };

    return (
        <>
            <div className="flex justify-center animate-in zoom-in-0 duration-1000 ">
                <form className="flex flex-col w-1/3 gap-5" onSubmit={handleSubmit}>
                    <h1 className="text-4xl text-center text-white font-semibold">Contact Us</h1>

                    <input type="text" className="p-3 rounded-md" value={name} onChange={e => { setName(e.target.value) }} placeholder="Name" Required />

                    <input type="number" className="p-3 rounded-md " value={age} onChange={e => { setAge(e.target.value) }} placeholder="Age" Required />
                   
                    
                        <select
                            value={gender}
                            onChange={handleGenderChange}
                            className="p-3 rounded-md"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    {/* </div> */}


                    <input type="email" className="p-3 rounded-md" value={email} onChange={e => { setEmail(e.target.value) }} placeholder="Email" Required />


                    <input type="number" className="p-3 rounded-md appearance-none" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' value={number} onChange={e => { setNumber(e.target.value) }} placeholder="Phone Number" Required />


                    <textarea name="" className="p-3 rounded-md" value={disease} onChange={e => { setDisease(e.target.value) }} placeholder="Disease" id="" cols="30" rows="4" Required></textarea>

                    <button type="submit" className="p-3 rounded-md text-white font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 mb-10">Submit</button>
                </form>
            </div>
        </>
    )
}
export default Contact