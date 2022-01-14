import React, { useState } from "react";
import axios from "axios";

// styles
import { StyledBookingInput, StyledBookingForm, StyledButton, MyBody } from "../AdminEndpoint/Admin.styles";

//Url
import { createUrl, deleteUrl } from '../../../settings';

const initialState = {
    washerName: "",
    language: "",
    yearsOfExp: "",
    priceHour: "",
    assistantName: ""
}

const AdminEndpoint = () => {
    const [response, setResponse] = useState('');
    const [newAssistant, setnewAssistant] = useState({});
    const [oldAssistant, delAssistant] = useState([]);

    const handleCreateChange = (e) => {
        setnewAssistant({
            ...newAssistant,
            [e.target.id]: e.target.value,
        });
    };

    const handleDelChange = (e) => {
        delAssistant({
            ...oldAssistant,
            [e.target.id]: e.target.value,
        });
    };

const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`${createUrl}`, newAssistant,{
        headers: {
            'x-access-token':sessionStorage.getItem('jwtToken'),
        }
    })
    .then((response) => {
        setResponse(response.data);
    }      
)};

const handleDelSubmit = (e) =>{
    e.preventDefault();
    axios.delete(`${deleteUrl}/${oldAssistant.assistantName}`,oldAssistant.assistantName,{
        headers: {
            'x-access-token':sessionStorage.getItem('jwtToken'),
        }
    })
    .then((response) => {
        setResponse(response.data);
    }      
)};

return (
    <MyBody>
      <StyledBookingForm>
      Add a new Washing assistant
        <StyledBookingInput 
            type="String"
            placeholder="Name"
            id='washerName'
            value={newAssistant.washerName}
            onChange={handleCreateChange}
        ></StyledBookingInput>
        
            <StyledBookingInput 
            type="String"
            placeholder="Language"
            id='language'
            value={newAssistant.language}
            onChange={handleCreateChange}
            ></StyledBookingInput>

        <StyledBookingInput 
            type="number"
            placeholder="Years of experience"
            id='yearsOfExp'
            value={newAssistant.yearsOfExp}
            onChange={handleCreateChange}
        ></StyledBookingInput>

        <StyledBookingInput 
            type="number"
            id='priceHour'
            placeholder="Price / hour"
            value={newAssistant.priceHour}
            onChange={handleCreateChange}
        ></StyledBookingInput>

            <StyledButton onClick={handleSubmit}>
            Confirm      
            </StyledButton>
      </StyledBookingForm>


      <StyledBookingForm>
        Delete an assistant
        <StyledBookingInput 
            type="String"
            placeholder="Name"
            id='assistantName'
            value={oldAssistant.assistantName}
            onChange={handleDelChange}
            ></StyledBookingInput>
            
            <StyledButton onClick={handleDelSubmit}>
            Confirm      
            </StyledButton>

        </StyledBookingForm>
    </MyBody>
    );
};

export default AdminEndpoint;