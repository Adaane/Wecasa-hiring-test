import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getPrestations } from '../../redux/reducers'
import { Collapse, Select, Table, Divider, Tag } from 'antd';
import { Row, Col, Layout, Menu, Icon } from 'antd';



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
  console.log(key);
}


const PrestationsContainer = props => {
  const mapPrestationToTable = (dataSource) => {
    return dataSource && dataSource.reduce((acc, curr) => {
        return [...acc, {
          ...curr,
          "duration": convertMinutesToHours(curr.duration),
          "price": displayCentsToEuro(curr.price)
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
                <Column title="Durée" dataIndex="duration" key="duration" />
                <Column title="Prix" dataIndex="price" key="price" />
                <Column
                  title="Action"
                  key="action"
                  render={(text, record) => (
                    <span>
                      <a href="javascript:;">Ajouter à mon panier</a>
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
                  render={(text, record) => (
                    <span>
                      <a href="javascript:;">Ajouter à mon panier</a>
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
                      <a href="javascript:;">Ajouter à mon panier</a>
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
)(PrestationsContainer)