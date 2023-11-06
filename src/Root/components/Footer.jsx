import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logoLight from '../../assets/BookPalLogoLightTheme.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-12 bg-primary text-primary-content">
                <aside>
                    <div className='flex items-center'>
                        <img className='h-20 w-20' src={logoLight} alt="" />
                        <h3 className='text-4xl font-bold text-black'>B<span className='text-[#4B6175]'>oo</span>k<span className='text-[#FF5757]'>Pal</span></h3>
                    </div>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a><FaFacebook className='text-peach text-3xl'></FaFacebook>
                        </a>
                        <a><FaTwitter className='text-peach text-3xl'></FaTwitter></a>
                        <a><FaInstagram className='text-peach text-3xl'></FaInstagram></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;