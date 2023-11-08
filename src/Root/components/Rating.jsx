import PropTypes from 'prop-types';

const Rating = ({ id, rating }) => {
    return (
        <div className="rating rating-xs">
            {
                rating == 1 ?
                    <input type="radio" disabled name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" checked />
                    :
                    <input type="radio" disabled name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" />
            }
            {
                rating == 2 ?
                    <input type="radio" disabled name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" checked />
                    :
                    <input type="radio" disabled name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" />
            }
            {
                rating == 3 ?
                    <input type="radio" disabled name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" checked />
                    :
                    <input type="radio" disabled name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" />
            }
            {
                rating == 4 ?
                    <input type="radio" disabled name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" checked />
                    :
                    <input type="radio" disabled name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" />
            }
            {
                rating == 5 ?
                    <input type="radio" disabled name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" checked />
                    :
                    <input type="radio" disabled name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" />
            }
        </div>
    );
};
Rating.propTypes = {
    id: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
}

export default Rating;