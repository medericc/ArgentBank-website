import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../layouts/Button';
import Spacing from "./Spacing.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faTimes, faChevronDown, faChevronUp, faPencil, faSave } from '@fortawesome/free-solid-svg-icons';

const Account = ({ title, amount, desc, transactions }) => {
  const [displayTransactions, setDisplayTransactions] = useState(false);
  const [transactionsDetails, setTransactionsDetails] = useState(transactions.map(() => false));
  const [editableTransactions, setEditableTransactions] = useState(transactions.map(() => false));
  const [editedTransactions, setEditedTransactions] = useState(transactions);

  const handleDisplayTransactions = () => {
    setDisplayTransactions(!displayTransactions);
  };

  const handleDisplayTransactionsDetails = (index) => {
    const newTransactionsDetails = [...transactionsDetails];
    newTransactionsDetails[index] = !newTransactionsDetails[index];
    setTransactionsDetails(newTransactionsDetails);
  };

  const handleEditTransaction = (index) => {
    const newEditableTransactions = [...editableTransactions];
    newEditableTransactions[index] = !newEditableTransactions[index];
    setEditableTransactions(newEditableTransactions);
  };

  const handleInputChange = (index, field, value) => {
    const newEditedTransactions = [...editedTransactions];
    newEditedTransactions[index].details[field] = value;
    setEditedTransactions(newEditedTransactions);
  };

  const handleSaveTransaction = (index) => {
    // Here you would typically send the updated transaction to your server
    const newEditableTransactions = [...editableTransactions];
    newEditableTransactions[index] = false;
    setEditableTransactions(newEditableTransactions);
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
                <>
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.trans_description}</td>
                    <td>{transaction.trans_amount}</td>
                    <td>{transaction.balance}</td>
                    <td>
                      <FontAwesomeIcon
                        icon={transactionsDetails[index] ? faChevronUp : faChevronDown}
                        onClick={() => handleDisplayTransactionsDetails(index)}
                        role='button'
                        aria-hidden="true"
                      />
                    </td>
                  </tr>
                  {transactionsDetails[index] && (
                    <tr key={`${index}-details`}>
                      <td colSpan="5">
                        <div className="transaction-detail">
                          <p>Type {transaction.details.transaction_type}</p>
                          <div>
                            <p>
                              Category {editableTransactions[index] ? (
                                <input
                                  type="text"
                                  value={editedTransactions[index].details.category}
                                  onChange={(e) => handleInputChange(index, 'category', e.target.value)}
                                />
                              ) : (
                                transaction.details.category
                              )}
                              <FontAwesomeIcon
                                icon={editableTransactions[index] ? faSave : faPencil}
                                onClick={() => editableTransactions[index] ? handleSaveTransaction(index) : handleEditTransaction(index)}
                                role='button'
                                aria-hidden="true"
                                style={{ marginLeft: '10px' }}
                              />
                            </p>
                          </div>
                          <div>
                            <p>
                              Note {editableTransactions[index] ? (
                                <input
                                  type="text"
                                  value={editedTransactions[index].details.note}
                                  onChange={(e) => handleInputChange(index, 'note', e.target.value)}
                                />
                              ) : (
                                transaction.details.note
                              )}
                              <FontAwesomeIcon
                                icon={editableTransactions[index] ? faSave : faPencil}
                                onClick={() => editableTransactions[index] ? handleSaveTransaction(index) : handleEditTransaction(index)}
                                role='button'
                                aria-hidden="true"
                                style={{ marginLeft: '10px' }}
                              />
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
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
  amount: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      trans_description: PropTypes.string.isRequired,
      trans_amount: PropTypes.number.isRequired,
      balance: PropTypes.number.isRequired,
      details: PropTypes.shape({
        transaction_type: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default Account;
