import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';

const ThemeSelect = ({ onSelectColor }) => {
  const handleColorChange = (eventKey) => {
    onSelectColor(eventKey);
  };

  return (
    <Dropdown onSelect={handleColorChange}>
      <Dropdown.Toggle variant="primary" id="color-dropdown">
        Select a color
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="red">Red</Dropdown.Item>
        <Dropdown.Item eventKey="blue">Blue</Dropdown.Item>
        <Dropdown.Item eventKey="green">Green</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default ThemeSelect;