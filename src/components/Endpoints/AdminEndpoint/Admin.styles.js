import styled from 'styled-components';

export const MyBody = styled.div`
  margin-left: 225px;
  margin-right: 25px;
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: -50px;
  justify-content: center;
  @media (max-width: 1300px) {
    margin-top: 0;
  }
  border-radius: 5px 5px 0 0;
  
`;

export const UserTable = styled.table`
  border-collapse: collapse;
  font-size: var(--fs-300);
  border-radius: 5px 5px 0 0;
  overflow: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

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
    padding: 1.25rem 1.5rem;
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

export const StyledButton = styled.button`
  padding-top: 1rem;
  width: 40%;
  margin-right: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  min-width: 300px;

  display: block;
  background-color: hsl(var(--primary-color));
  color: #fff;
  font-size: 1.2rem;
  border: 0;
  border-radius: 8px;
  height: 38px;
  width: 40%;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    background-color: hsl(var(--secondary-color));
  }
  @media (max-width: 300px) {
    margin-top: 0;  
  }
`;

export const StyledBookingInput = styled.input`
  padding-top: 1rem;
  width: 40%;
  margin-right: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  min-width: 300px;
  text-align: center;

`;

export const StyledBookingForm = styled.form`
  font-size: var(--fs-300);
  padding: 1.25rem 1.5rem;
  margin-bottom: 16px;
  max-width: 400px;
  :button {
    font-size: var(--fs-500);
  }
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

`;