import Banner from './Banner';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '../../components/Footer';
import Categories from './Categories';
// import ErrorPage from '../ErrorPage/ErrorPage';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;
