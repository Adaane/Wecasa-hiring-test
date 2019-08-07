import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Card } from 'antd';

import PrestationTable from "./prestationTable";
import { addToCart } from "../../redux/actions";
import { displayCentsToEuro, convertMinutesToHours, setId, tabList } from "../../utils";


const PrestationsContainer = ({ addToCart, prestations }) => {

  const [key, setKey] = useState('man')

  const onTabChange = (key, type) => {
    setKey(key);
  };

  const addPrestationOnCart = (record) => {
    const prestation = {
      ...record,
      'id': setId()
    }
    addToCart(prestation)
  }

  const mapPrestationToTable = (dataSource) => {
    return dataSource && dataSource.reduce((acc, curr) => {
      return [...acc, {
        ...curr,
        'duration': convertMinutesToHours(curr.duration),
        'durationAbsolue': curr.duration,
        'priceCurrency': displayCentsToEuro(curr.price),
        'priceNumber': curr.price

      }]
    }, [])
  }
  const categoryTable = (reference) => {
    const data = prestations.categories && prestations.categories.reduce((acc, curr) => {
      if (curr.reference === reference) {
        return acc = curr.prestations
      }
      return acc
    }, [])
    return mapPrestationToTable(data)
  }

  const contentList = {
    man: <PrestationTable table={categoryTable} reference={'man'} onAddToCart={addPrestationOnCart}/>,
    woman: <PrestationTable table={categoryTable} reference={'woman'} onAddToCart={addPrestationOnCart} />,
    child: <PrestationTable table={categoryTable} reference={'child'} onAddToCart={addPrestationOnCart} />
  };


  return (
    <div style={{padding: '20px'}}>
        <Card
          style={{ width: '100%' }}
          title="Prestations"
          tabList={tabList}
          activeTabKey={key}
          onTabChange={key => {
            onTabChange(key, 'key');
          }}
        >
          {contentList[key]}
        </Card>
    </div>
  );
};

PrestationsContainer.propTypes = {
  addToCart: PropTypes.func.isRequired,
  prestations: PropTypes.any
  
};

const mapStateToProps = state => ({
  prestations: state.prestations.data
})

export default connect(
  mapStateToProps,
  { addToCart }
)(PrestationsContainer)