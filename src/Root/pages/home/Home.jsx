import logoLight from '../../../assets/BookPalLogoLightTheme.png';
import logoDark from '../../../assets/BookPalLogoDarkTheme.png';
import { useLoaderData } from 'react-router-dom';
import BookDetails from '../BookDetails/BookDetails';

const Home = () => {
    const books = useLoaderData();
    return (
        <div>
            <h1>From Homepage</h1>
            <div className='flex items-center'>
                <img className='h-20 w-20' src={logoLight} alt="" />
                <h3 className='text-4xl font-bold text-black'>B<span className='text-[#4B6175]'>oo</span>k<span className='text-[#FF5757]'>Pal</span></h3>
            </div>
            <div className='flex items-center bg-black'>
                <img className='h-20 w-20' src={logoDark} alt="" />
                <h3 className='text-4xl font-bold text-white'>B<span className='text-[#4B6175]'>oo</span>k<span className='text-[#FF5757]'>Pal</span></h3>
            </div>
            <h1>{books.length}</h1>
            <div>
                {
                    books.map(book => <BookDetails 
                    key={book.id}
                    book={book}></BookDetails> )
                }
                
            </div>

        </div>
    );
};

export default Home;