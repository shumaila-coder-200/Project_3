import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setError("");
    setSelectedNumber(value);
  };
  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className='flex'>
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  .flex {
    display: flex;
    gap: 24px;
  }
  .error {
    color: red;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;
const Box = styled.div`
  width: 70px;
  height: 70px;
  font-size: 24px;
  font-weight: 700;
  display: grid;
  place-items: center;
  gap: 10px;
  border: 1px solid black;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
