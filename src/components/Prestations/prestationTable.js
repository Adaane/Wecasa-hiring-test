import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';


const PrestationTable = ({ table, reference, onAddToCart }) => {
  const { Column } = Table;

  return (
    <Table dataSource={table(reference)}>
      <Column title="Prestation" dataIndex="title" key="title" />
      <Column title="Durée" dataIndex="duration" key="duration" />
      <Column title="Prix" dataIndex="priceCurrency" key="priceCurrency" />
      <Column
        title=""
        key="action"
        render={(record) => (
          <span>
            <Button type="link" onClick={() => onAddToCart(record)}>{'Ajouter à mon panier'}</Button>
          </span>
        )}
      />
    </Table>
  );
};

PrestationTable.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  table: PropTypes.array.isRequired,
  reference: PropTypes.string.isRequired
};


export default PrestationTable;