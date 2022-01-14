import React, { useState, useEffect } from 'react';

// Url
import { getAllAssistants } from '../../../settings';

// Styles
import { MyBody, UserTable } from './Assistant.styles';

const AssistantEndpoint = () => {
  const [assistants, setassistants] = useState([{}]);

  const fetchAssistants = async (getAllAssistants) => {
    const response = await fetch(getAllAssistants, {
      method: 'GET',
      headers: {
        'x-access-token':
        sessionStorage.getItem('jwtToken'),
        'Content-Type': 'application/json',
      },
    });
    const myAssistants = await response.json();

    setassistants(
      myAssistants.map((assistant) => {
        return assistant;
      })
    );
  };


  useEffect(() => {
    fetchAssistants(getAllAssistants);
  }, []);

  return (
    <MyBody>
      <UserTable>
      <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Years of experience</th>
            <th>Price per hour</th>
          </tr>
        </thead>
        <tbody>
          {assistants.map((assistant) => (
            <tr key={+assistant.washerName}>
              <td>{assistant.washerName}</td>
              <td>{assistant.language}</td>
              <td>{assistant.yearsOfExp}</td>
              <td>{assistant.priceHour},- kr</td>
            </tr>
          ))}
        </tbody>
      </UserTable>
    </MyBody>
  );
};

export default AssistantEndpoint;
