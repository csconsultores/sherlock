// Libraries
import React from 'react';

import data from '../../data';
import Table from '../../components/Table';
import Header from '../../components/Header'

class LoanList extends React.Component {
  render () {
    return (
        <React.Fragment>
          <Header title="Listado de Préstamos" />
          <Table data={data} />
        </React.Fragment>
    
    );
  }
}

export default LoanList;
