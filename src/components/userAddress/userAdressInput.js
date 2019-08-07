import React from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom'

import { MAP_URL } from "../../api";


const UserAdressInput = ({ onScriptLoad, onInputChange, onBtnClick, query } ) => (
  <>
    <Script url={MAP_URL}
      onLoad={onScriptLoad}
    /> 
    <Input placeholder="Rechercher une adresse"
      allowClear
      onChange={onInputChange}
      className="input-field"
      id="autocomplete"
      hintText="Search City"
      value={query}
      type="text" />
    {query &&
      <div style={{marginTop: 20}}>
        <Link to={'/step/appointment'}>
          <Button type="primary" onClick={() => onBtnClick()}>Suivant</Button>
        </Link>
      </div>
    }
  </>
  )

UserAdressInput.propTypes = {
  onScriptLoad: PropTypes.func,
  onInputChange: PropTypes.func,
  onBtnClick: PropTypes.func,
  query: PropTypes.string
};

export default UserAdressInput;