import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';
import DataTable from './Datatable';

const Bank = () => {
  const [customerSummary, setCustomerSummary] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://quietstreamfinancial.github.io/eng-recruiting/transactions.json'
        );
        const summary = processTransactions(response.data);
        setCustomerSummary(summary);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const processTransactions = (transactions) => {
    const summary = {};
    transactions.forEach((transaction) => {
      const { id, customer_name, account_type, transaction_amount, account_number, account_id, date } = transaction;

      if (!summary[account_id]) {
        summary[account_id] = { id: id, customer_name: customer_name, checking: 0, savings: 0, account_number: account_number, account_id: account_id, date: date };
      }

      const numericAmount = transaction_amount ? parseFloat(transaction_amount.replace('$', '')) || 0 : 0;

      if (account_type === 'checking') {
        summary[account_id].checking += numericAmount;
      } else if (account_type === 'savings') {
        summary[account_id].savings += numericAmount;
      }
    });

    return summary;
  };

  // Filter data based on search term
  const filteredData = Object.entries(customerSummary)
  .filter(([customerId, records]) => {
    if (records && records.customer_name) {
      return records.customer_name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });


  // Pagination
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Transaction Summary</h1>
      <input
        style={{ width: '15%', marginBottom: '2%' }}
        type="text"
        placeholder="Search by customer name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <DataTable data={currentItems} />

      <div>
        <Pagination>
          {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map(
            (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </div>
    </div>
  );
};

export default Bank;
