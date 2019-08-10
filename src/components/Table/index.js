import React from 'react';
import HeadersTable from '../HeadersTable';
import styles from './styles.css';


function Table(props) {
    function row(element) {
        return (
            <tr className={styles.row}>
                <td>{element.customer.name}</td>
                <td>{element.id}</td>
                <td>{element.loan_amount}</td>
                <td>{element.start_date}</td>
                <td>{element.status}</td>
            </tr>
        )
    }
    return (
        <React.Fragment>
            <table>
                <HeadersTable className={styles.header} client="Cliente" loan="Préstamo" date="Fecha" state="Estado" />
                {
                    props.data.loans.map(element => row(element))
                } 
            </table>
        </React.Fragment>
    );
  }

export default Table;