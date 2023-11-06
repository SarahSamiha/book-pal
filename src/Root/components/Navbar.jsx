import { Link, NavLink } from 'react-router-dom';
import userDefaultPic from '../../assets/user.png';
import logoLight from '../../assets/BookPalLogoLightTheme.png'

const Navbar = () => {
    const links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/addBook'>Add Book</NavLink></li>
            <li><NavLink to='/allBooks'>All Books</NavLink></li>
            <li><NavLink to='/borrowedBooks'>Borrowed Books</NavLink></li>
        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/'>
                    <div className='flex items-center'>
                        <img className='h-20 w-20' src={logoLight} alt="" />
                        <h3 className='text-4xl font-bold text-black'>B<span className='text-[#4B6175]'>oo</span>k<span className='text-[#FF5757]'>Pal</span></h3>
                    </div>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="avatar mr-5">
                    <div className="w-10 rounded-full">
                        <img src={userDefaultPic} />
                    </div>
                </label>
                <Link to='/login' className="btn">Sign Up</Link>
            </div>
        </div>
    );
};

export default Navbar;