import PropTypes from 'prop-types';
import './Reviewed.css';
import phone from '../../assets/illustration-thank-you.svg';

export const Reviewed = ({ starCount }) => {
  return (
    <div>
      <div className="container">
        <div className="second-container">
          <div className="phone-container">
            <img src={phone} alt="phone-image" className="phone-image" />
          </div>
          <div className="text-container">
            <button className="selection-number">
              You selected {starCount} out of 5
            </button>
          </div>
          <div className="text-container">
            <p className="thanks">Thank you!</p>
          </div>
          <div className="text-container">
            <p className="expletive">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don&apos;t hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Reviewed.propTypes = {
  starCount: PropTypes.number.isRequired,
};

