import styled from 'styled-components';

export const MyBody = styled.div`
  margin-left: 225px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  margin-top: 0px;

  @media (max-width: 1300px) {
    margin-top: 0;
  }
`;

export const UserTable = styled.table`
  border-collapse: collapse;
  font-size: var(--fs-300);
  border-radius: 5px 5px 0 0;
  overflow: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin-top: 128px;

  thead {
    background-color: ${(props) => props.color};
  }
  thead tr {
    background-color: ${(props) => props.color};
    color: #000000;
    text-align: left;
    font-weight: bold;
    font-size: var(--fs-500);
  }
  th,
  td {
    padding: 1.5rem 1.5rem;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid ${(props) => props.color};
  }
`;

export const MyButton = styled.button`
  width: 100%;
  padding: 1.5rem;
  font-size: var(--fs-500);
  font-weight: bold;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 0 0 6px 6px;
`;

export const StyledInput = styled.input`
width: 60%;
`;
