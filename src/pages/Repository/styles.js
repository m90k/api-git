import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 1.6em;
    margin-top: 10px;
  }

  p {
    text-align: center;
    line-height: 1.4;
    font-size: 1.2;
    max-width: 320px;
  }
`;

export const IssueList = styled.ul`
  list-style: none;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 2px solid #333;

  li {
    display: flex;
    padding: 10px 15px;
    border: 1px solid #ddd;
  }

  & + li {
    margin-top: 10px;
  }

  img {
    width: 80px;
    height: 80px;
    border: 2px solid #7159c1;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;

    strong {
      font-size: 1.4em;
      font-weight: bold;

      a {
        font-size: 1.2em;
        text-decoration: none;
        &:hover {
          color: #7159c1;
        }
      }

      span {
        background-color: #eee;
        color: #333;
        margin-left: 10px;
        padding: 10px;
      }
    }

    p {
      margin-top: 10px;
      color: #999;
      font-size: 1.2em;
    }
  }
`;
