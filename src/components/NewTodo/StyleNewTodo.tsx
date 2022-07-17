import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 92%;
  border: none;
  padding: 10px 15px;
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  }
  &::placeholder {
    font-size: 18px;
  }
  &:focus-visible {
    outline: 0;
  }

  @media (max-width: 768px) {
    width: 68%;
  }
`;

export const SubmitButton = styled.button`
  width: 5%;
  padding: 10px 15px;
  font-size: 20px;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #fff;
    box-shadow: 0px 2px 10px 5px #97b1bf;
    color: #000;
  }
  @media (max-width: 768px) {
    width: 20%;
  }
`;

export const ErrorMsg = styled.p`
  color: #fff;
  background-color: red;
  opacity: 0.5;
  padding: 10px;
`;
