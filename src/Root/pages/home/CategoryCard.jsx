import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {
    const { categoryName, image1} = category;
    return (
        <div>
            <div className="group relative transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 h-96">
                <img className="h-full w-full" src={image1} alt="" />
                <div className="absolute bg-black text-white h-full w-full top-0 bg-opacity-40 hover:bg-opacity-70 flex flex-col gap-6 justify-center items-center">
                    <h1 className="font-bold text-4xl">{categoryName}</h1>
                    <button className='absolute top-2/3 btn invisible group-hover:visible'>Browse Now</button>
                </div>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object.isRequired,
}

export default CategoryCard;