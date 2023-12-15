import React from 'react';
import { Table } from 'react-bootstrap';

const DataTable = ({ data }) => {
  return (
    <Table striped bordered hover style={{width: '100%'}}>
      <thead>
        <tr style={{ background: '#f2f2f2' }}>
          <th style={tableHeaderStyle}>Customer Name</th>
          <th style={tableHeaderStyle}>Account ID</th>
          <th style={tableHeaderStyle}>Account Number</th>
          <th style={tableHeaderStyle}>Date</th>
          <th style={tableHeaderStyle}>Checking Balance</th>
          <th style={tableHeaderStyle}>Savings Balance</th>
          <th style={tableHeaderStyle}>Total Balance</th>
        </tr>
      </thead>
      <tbody>
        {data.map(([customerId, records]) => (
          <tr key={records.id} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={tableCellStyle}>{records.customer_name}</td>
            <td style={tableCellStyle}>{records.account_id}</td>
            <td style={tableCellStyle}>{records.account_number}</td>
            <td style={tableCellStyle}>{records.date}</td>
            <td style={tableCellStyle}>{records.checking.toFixed(2)}</td>
            <td style={tableCellStyle}>{records.savings.toFixed(2)}</td>
            <td style={tableCellStyle}>{(records.checking + records.savings).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const tableHeaderStyle = {
  padding: '12px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
  textAlign: 'left',
};

export default DataTable;
