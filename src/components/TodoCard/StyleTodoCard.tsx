import styled from "styled-components";

export const SingleTodo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 10px 1rem;
  text-transform: capitalize;
  z-index: 999;
  border: 1px solid transparent;
  background: #fceabb; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f8b500,
    #fceabb
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f8b500,
    #fceabb
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin: 0 auto 1rem auto;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background: transparent;
    border: 1px solid #fff;
    border-left: 5px solid #fff;
  }
`;

export const Remove = styled.span`
  font-size: 18px;
  line-height: 24px;
  color: #000;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
