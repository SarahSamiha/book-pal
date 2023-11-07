import PropTypes from 'prop-types';

const Title = ({ title, subTitle }) => {
    return (
        <div className="mt-24 mb-12 flex flex-col gap-6 justify-center items-center">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-lg w-1/2 text-center">
                {subTitle}
            </p>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}


export default Title;