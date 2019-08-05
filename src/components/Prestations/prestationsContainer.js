import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Collapse, Select, Table, Divider, Tag } from 'antd';
import { Row, Col, Layout, Menu, Icon } from 'antd';
import { addToCart } from "../../redux/actions";



var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

const displayCentsToEuro = cents =>
  (cents / 100).toLocaleString("fr", { style: "currency", currency: "EUR" });

const convertMinutesToHours = minutes => {
  const minutesModulo60 = minutes % 60;
  const hours = (minutes - minutesModulo60) / 60;

  return `${hours}h${minutesModulo60}min`;
};
const { Column, ColumnGroup } = Table;
const { Panel } = Collapse;
const { Option } = Select;


function callback(key) {
}

const addPrestationOnCart = (record, addToCart) => {
  const prestation = {
    ...record,
    'id': ID()
  }  

  addToCart(prestation)
  
}


const PrestationsContainer = props => {
  const {addToCart} = props

  const mapPrestationToTable = (dataSource) => {
    return dataSource && dataSource.reduce((acc, curr) => {
        return [...acc, {
          ...curr,
          'duration': convertMinutesToHours(curr.duration),
          'price': displayCentsToEuro(curr.price)
        }]
      }, [])
  }
  const categoryTable = (reference) => {
    const { prestations } = props
    const data = prestations.categories && prestations.categories.reduce((acc, curr) => {
      if (curr.reference === reference) {
        return acc = curr.prestations
      }
      return acc
    }, [])
    return mapPrestationToTable(data)
  }


  return (
    <div>
      <div>
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
        >
          <Panel header="Homme" key="1">
            <div>
              <Table dataSource={categoryTable('man')}>
                <Column title="Prestation" dataIndex="title" key="title" />
                <Column title="Durée de la prestation" dataIndex="duration" key="duration" />
                <Column title="Prix" dataIndex="price" key="price" />
                <Column
                  title="Action"
                  key="action"
                  render={(text, record) => (
                    <span>
                      <a onClick={() => addPrestationOnCart(record, addToCart)}> {'Ajouter à mon panier'} </a>
                    </span>
                  )}
                />
              </Table>
            </div>
          </Panel>
          <Panel header="Femme" key="2">
            <div>
              <Table dataSource={categoryTable('woman')}>
                <Column title="Prestation" dataIndex="title" key="title" />
                <Column title="Durée" dataIndex="duration" key="duration" />
                <Column title="Prix" dataIndex="price" key="price" />
                <Column
                  title="Action"
                  key="action"
                  render={(text, record, index) => (
                    <span>
                      <a onClick={() => addPrestationOnCart(record, addToCart)}> {'Ajouter à mon panier'} </a>
                    </span>
                  )}
                />
              </Table>
            </div>
          </Panel>
          <Panel header="Enfant" key="3">
            <div>
              <Table dataSource={categoryTable('child')}>
                <Column title="Prestation" dataIndex="title" key="title" />
                <Column title="Durée" dataIndex="duration" key="duration" />
                <Column title="Prix" dataIndex="price" key="price" />
                <Column
                  title="Action"
                  key="action"
                  render={(text, record) => (
                    <span>
                      <a onClick={() => addPrestationOnCart(record, addToCart)}> {'Ajouter à mon panier'} </a>
                    </span>
                  )}
                />
              </Table>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

PrestationsContainer.propTypes = {
  
};

const mapStateToProps = state => ({
  prestations: state.prestations.data
})

export default connect(
  mapStateToProps,
  { addToCart }
)(PrestationsContainer)