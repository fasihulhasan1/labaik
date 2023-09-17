import { Link } from "react-router-dom";
import hospitalLogo from './logo1.png';

const Menu = () => {
    return (
        <div className={`flex flex-row justify-between text-white font-semibold text-lg p-3 mx-3`}>
            <div className={``}>
                <img
                    src={`${hospitalLogo}`}
                    alt="logo"
                    className={`h-auto md:h-14 w-auto md:w-30 max-h-14 max-w-30`}
                />
            </div>
            <ul className="flex flex-row gap-4">
                <li className="hover:tracking-[3px] transition-all"><Link to={'/'}>Home</Link></li>
                <li className="hover:tracking-[3px] transition-all"><Link to={'/staff'} >Staff</Link></li>
                <li className="hover:tracking-[3px] transition-all"><Link to={'facility'} >Facility</Link></li>
                <li className="hover:tracking-[3px] transition-all"><Link to={'about'} >About</Link></li>
                <li className=""><Link to={'contact'} ><button className="p-1 rounded-md w-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 mb-10 hover:-translate-y-1.5 focus:outline-none transform transition focus:ring focus:ring-offset-2">Book Appointment</button></Link></li>
            </ul>
        </div>
    )
}

export default Menu;
