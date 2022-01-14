import React, {useState} from 'react';
import axios from 'axios';

import BookCar from './BookCar';

//Url
import { bookingUrl } from '../../../settings';
import { StyledBookingInput, StyledBookingForm, StyledButton, MyBody, Container} from '../BookingEndpoint/Booking.styles';

const initialState = {
    bookingDate: "",
    duration: ""
}

function BookingEndpoint() {
    const [response, setResponse] = useState('');
    const [booking, setbooking] = useState({});


    const handleBookingChange = (e) => {
        setbooking({
            ...booking,
            [e.target.id]: e.target.value,
        });
        console.log(bookingUrl)
    };

const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`${bookingUrl}`, booking)
    .then((response) => {
        setResponse(response.data);
        console.log(response);
    }
)};

return (
    <Container>
      <MyBody>
        <StyledBookingForm>
            <text>
            Book your car wash here! {"\n"}
            </text>
            <StyledBookingInput 
            type="date"
            id='bookingDate'
            value={booking.bookingDate}
            onChange={handleBookingChange}
            ></StyledBookingInput>
        
            <StyledBookingInput
                type="number"
                placeholder="duration in minutes"
                id='duration'
                value={booking.duration}
                onChange={handleBookingChange}
            ></StyledBookingInput>
            <StyledButton onClick={handleSubmit}>
            Confirm      
            </StyledButton>
        </StyledBookingForm>

        <BookCar>

        </BookCar>
        </MyBody>  
    </Container>
    );
}

export default BookingEndpoint;