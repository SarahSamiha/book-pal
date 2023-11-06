import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '../../components/Footer';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const books = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div data-aos="flip-left">
            <img src="https://i.ibb.co/NKLrRTn/banner1.jpg" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
