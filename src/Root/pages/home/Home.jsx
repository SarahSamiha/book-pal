import Banner from '../../components/Banner';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Categories from './Categories';

const Home = () => {
    const image1 = 'https://i.ibb.co/NKLrRTn/banner1.jpg';
    const image2 = 'https://i.ibb.co/PrkHFRz/banner2.jpg';
    const image3 = 'https://i.ibb.co/vJRDdg1/banner3.jpg';
    const message1 = "Discover the World of Books, Your Gateway to Knowledge and Imagination";
    const message2 = "Explore, Borrow, and Dive into Endless Stories at Your Fingertips";
    const message3 = "Your Library, Your Universe of Learning, Adventure, and Inspiration";
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <Banner
                image1={image1}
                image2={image2}
                image3={image3}
                message1={message1}
                message2={message2}
                message3={message3}
            ></Banner>
            <Categories></Categories>

        </div>
    );
};

export default Home;
