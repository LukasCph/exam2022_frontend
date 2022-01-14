import React, {useState} from 'react';
import axios from 'axios';


//Url
import { addAssistantToBooking } from '../../../settings'
import { StyledSelect, Container, StyledBookingForm, StyledButton } from '../BookingEndpoint/Booking.styles';

const initialState = {
    registration: "",
    brand: "",
    make: "",
    year: ""
}

function BookCar() {
    const [assistant, setResponse] = useState('');
    const [car, setCar] = useState({});


    const handleChange = (e) => {
        setCar({
            ...car,
            [e.target.id]: e.target.value,
        });
    };

const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`${addAssistantToBooking}`, assistant,{
        headers: {
            'x-access-token':sessionStorage.getItem('jwtToken'),
        }
    })
    .then((response) => {
        setResponse(response.data);
    }      
)};

return (
    <Container>
        <StyledBookingForm>
            <StyledSelect>

            </StyledSelect>

            <StyledButton onClick={handleSubmit}>
            Confirm      
            </StyledButton>
        </StyledBookingForm>
    </Container>
    );
}

export default BookCar;