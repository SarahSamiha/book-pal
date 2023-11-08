import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logoLight from '../../assets/BookPalLogoLightTheme.png'
import logoDark from '../../assets/BookPalLogoDarkTheme.png'

const Footer = ({theme}) => {
    return (
        <div>
            <footer className="footer footer-center p-12 bg-neutral text-primary-content">
                <aside>
                <div className='flex items-center'>
                        { theme?
                            <img className='h-20 w-20' src={logoDark} alt="" />
                            :
                            <img className='h-20 w-20' src={logoLight} alt="" />
                        }
                        <h3 className='text-4xl font-bold text-base-100'>B<span className='text-secondary'>oo</span>k<span className='text-primary'>Pal</span></h3>
                    </div>
                    <p className='text-primary'>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a><FaFacebook className='text-primary text-3xl'></FaFacebook>
                        </a>
                        <a><FaTwitter className='text-primary text-3xl'></FaTwitter></a>
                        <a><FaInstagram className='text-primary text-3xl'></FaInstagram></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;