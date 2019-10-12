import styled, { keyframes, css } from 'styled-components';

export const Title = styled.h1`
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    margin-bottom: 10px;
  }
`;

const rotate = keyframes`

  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  input {
    flex: 1;
    border-radius: 4px;
    border: 2px solid #333;
    padding: 10px 15px;
    font-size: 1.2em;
  }
`;

export const SButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background-color: #7159c1;
  border: 0;
  padding: 12px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled]{
    cursor: not-allowed;
    opacity: 0.8;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}

  }`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 0;

    & + li {
      border-top: 2px solid #333;
    }

    a {
      text-transform: uppercase;
      text-decoration: none;
      color: #7159c1;
    }
  }
`;
