import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../layouts/Button';
import Spacing from "./Spacing.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Account = ({ title, amount, desc, transactions }) => {
  const [displayTransactions, setDisplayTransactions] = useState(false);
  const [transactionsDetails, setTransactionsDetails] = useState(transactions.map(() => false));

  const handleDisplayTransactions = () => {
    setDisplayTransactions(!displayTransactions);
  };

  const handleDisplayTransactionsDetails = (index) => {
    const newTransactionsDetails = [...transactionsDetails];
    newTransactionsDetails[index] = !newTransactionsDetails[index];
    setTransactionsDetails(newTransactionsDetails);
  };

  return (
    <div className='account-transactions'>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className="account-title">{title}</h3>
          <Spacing height={2} />
          <p className="account-amount">{amount}</p>
          <Spacing height={7} />
          <p className="account-amount-description">{desc}</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button
            className={displayTransactions ? "transaction-button mask-details-button" : "transaction-button"}
            func={handleDisplayTransactions}
          >
            <FontAwesomeIcon icon={displayTransactions ? faTimes : faChevronRight} />
          </Button>
        </div>
      </section>
      {displayTransactions && (
        <div className="transaction-details">
          <table className='table'>
            <thead className='thead'>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Balance</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='tbody'>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.trans_description}</td>
                  <td>{transaction.trans_amount}</td>
                  <td>{transaction.balance}</td>
                  
                  <td>
                    <i
                      onClick={() => handleDisplayTransactionsDetails(index)}
                      role='button'
                      className={transactionsDetails[index] ? "fa fa-arrow-up" : "fa fa-arrow-down"}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td>  <FontAwesomeIcon icon={faChevronDown} /> </td>
                </tr>
              ))}
            </tbody>
          </table>
     
        </div>
      )}
    </div>
  );
};

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      trans_description: PropTypes.string.isRequired,
      trans_amount: PropTypes.string.isRequired,
      balance: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Account;
