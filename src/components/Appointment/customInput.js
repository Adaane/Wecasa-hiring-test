import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';



const CustomInput = props => (
    <Button
      className="example-custom-input"
      onClick={props.onClick}>
      {props.value ? props.value : "Séléctionner une date"}
    </Button>
)

CustomInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.any
};


export default CustomInput;