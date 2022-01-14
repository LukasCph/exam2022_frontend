import styled from 'styled-components';


export const Container = styled.div`
`;

export const MyBody = styled.div`
  margin-left: 225px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const UserTable = styled.table`
  border-collapse: collapse;
  font-size: var(--fs-300);
  border-radius: 5px 5px 0 0;
  margin-top: 128px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  thead {
  }
  thead tr {
    color: #000000;
    text-align: center;
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
`;

export const StyledButton = styled.button`
  padding-top: 1rem;
  width: 50%;
  margin-right: 16px;
  margin-left: 16px
  border-radius: 8px;
  min-width: 200px;
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
  alignItems: center;
  justifyContent: center;
  width: 50%;
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 16px;
  overflow: flex;
  border-radius: 8px;
  align: center;
  min-width: 100px;
  font-size: 18px;
  text-align: center;
  
  
`;

export const StyledBookingForm = styled.form`
  font-size: var(--fs-500);
  margin-top: 128px;
  padding: 1.25rem 1.5rem;
  :button {
    font-size: var(--fs-500);
  }
  align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

export const StyledSelect = styled.select`
  font-size: var(--fs-500); 
  width: 50%;
  border-radius: 8px;
`;

