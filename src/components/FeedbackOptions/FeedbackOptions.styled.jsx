import styled from "@emotion/styled";


const setColor = (name) => {
  switch (name) {
    case 'good':
      return '#00b894';
    case 'neutral':
      return '#f1c40f';
    case 'bad':
      return '#e74c3c';
    default:
      return 'gray';
  }
}
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Button = styled.button`
  padding: 10px;
  width: 100px;
  font-size: 18px;
  text-transform: capitalize;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  
  &:hover { 
    background-color: ${({ color }) => setColor(color)};  
    font-size: 20px;
    padding: 12px 20px;
  }
`;

export { ButtonWrapper, Button };