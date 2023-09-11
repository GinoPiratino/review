import PropTypes from 'prop-types';
import './Home.css';
import star from '../../assets/icon-star.svg';
import { Link } from 'react-router-dom';

export const Home = ({ starCount, setStarCount }) => {
  const handleStarClick = (newValue) => {
    setStarCount(newValue);
  };

  return (
    <div>
      <div className="container">
        <div className="second-container">
          <button className="circle">
            <img src={star} alt="star" className="star" />
          </button>
          <h2 className="text-question">How did we do?</h2>
          <p className="expletive">
            Please let us know how we did with your support request. All feedback
            is appreciated to help us improve our offering!
          </p>
          <div className="flex-container">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                data-value={starCount === value ? 'true' : 'false'}
                onClick={() => handleStarClick(value)}
                className="centered-text"
              >
                {value}
              </button>
            ))}
          </div>
          <Link to="/reviewed">
            <button className="submit-review">SUBMIT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  starCount: PropTypes.number.isRequired,
  setStarCount: PropTypes.func.isRequired,
};



