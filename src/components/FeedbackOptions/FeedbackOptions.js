import { ButtonWrapper, Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onHandleFeedback, options }) => (
    <ButtonWrapper className="Feedback">
        {options.map(opName => (
            <div className="FeedbackControls" key={opName}>
                <Button color={opName} type="button" onClick={() => onHandleFeedback(opName)}>{opName}</Button>
            </div>
        ))}
    </ButtonWrapper>
);

FeedbackOptions.propTypes = {
    onHandleFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FeedbackOptions;
