import horse from "../assets/horse.svg"
import resume from "../assets/Resume.pdf"


const Navbar = () => {
	return (
        <div id= {"Navbar"} className="navbar fixed bg-base-100 z-50 top-0-vh  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16">
                            </path>
                        </svg>
                    </label>
                    <ul tabIndex="0" className="text-primary menu menu-compact font-bold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="#About">About</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#Contact">Contact</a></li>
                        <li><a target="_blank" href={resume} rel="noreferrer noopener">Resume</a></li>
                    </ul>
                </div>
                    <a href="" className="btn btn-ghost normal-case text-xl">Anthony Barros</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-primary font-bold">
                    <li><a href="#About">About</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
                
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal text-primary p-0 font-bold">
                    <li>
                        <a target="_blank" href={resume} rel="noreferrer noopener">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
	);
};

export default Navbar;