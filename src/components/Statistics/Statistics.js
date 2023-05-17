import PropTypes from 'prop-types';
import { Stats } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
    <div className="Stats">
        <Stats>Good: {good} </Stats>
        <Stats>Neutral: {neutral} </Stats>
        <Stats>Bad: {bad}</Stats>
        <Stats>Total: {total()}</Stats>
        <Stats>Percentage: {percentage()}</Stats>
    </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    percentage: PropTypes.func.isRequired
};

export default Statistics;
