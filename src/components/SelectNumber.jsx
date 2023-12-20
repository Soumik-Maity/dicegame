import { useState } from "react";
import styles from "./SelectNumber.module.css";
import styled from "styled-components";

const SelectNumber = ({
  selectedNumber,
  setSelectedNumber,
  errorMessage,
  setErrorMessage,
}) => {
  const numArray = [1, 2, 3, 4, 5, 6];
  const handleOnClick = (value) => {
    setSelectedNumber(value);
    setErrorMessage("");
  };
  return (
    <div className={`${styles.container}`}>
      <h2>{errorMessage}</h2>
      <ul className={`${styles.numberBox}`}>
        {numArray.map((value, i) => (
          <Box
            key={i}
            isSelected={value === selectedNumber}
            onClick={() => handleOnClick(value)}
          >
            {value}
          </Box>
        ))}
      </ul>
      <h3>Select Number</h3>
    </div>
  );
};

export default SelectNumber;
const Box = styled.li`
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
