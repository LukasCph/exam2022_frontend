import React, {useState} from 'react';
import axios from 'axios';
import BookAssistant from './BookAssistant'


//Url
import { addCar } from '../../../settings';
import { StyledBookingInput, StyledBookingForm, StyledButton, Container } from '../BookingEndpoint/Booking.styles';

const initialState = {
    registration: "",
    brand: "",
    make: "",
    year: ""
}

function BookCar() {
    const [response, setResponse] = useState('');
    const [car, setCar] = useState({});


    const handleChange = (e) => {
        setCar({
            ...car,
            [e.target.id]: e.target.value,
        });
    };

const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`${addCar}`, car,{
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
            Book your car wash here
            <StyledBookingInput 
            type="String"
            placeholder='Registration plate'
            id='registration'
            value={car.registration}
            onChange={handleChange}
            ></StyledBookingInput>
        
            <StyledBookingInput
                type="String"
                placeholder="Brand of car"
                id='brand'
                value={car.brand}
                onChange={handleChange}
            ></StyledBookingInput>

            <StyledBookingInput
                type="String"
                placeholder="Make of car"
                id='make'
                value={car.make}
                onChange={handleChange}
            ></StyledBookingInput>

            <StyledBookingInput
                type="String"
                placeholder="year"
                id='year'
                value={car.year}
                onChange={handleChange}
            ></StyledBookingInput>

            <StyledButton onClick={handleSubmit}>
            Confirm      
            </StyledButton>
        <BookAssistant>

        </BookAssistant>

        </StyledBookingForm>
    </Container>
    );
}

export default BookCar;