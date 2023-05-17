import { SectionTitile } from "./Section.styled";
import PropTypes from 'prop-types';
const Section = ({ title, children }) => (
    <div>
        <SectionTitile>{title}</SectionTitile>
        {children}
        
    </div>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    
}
export default Section;