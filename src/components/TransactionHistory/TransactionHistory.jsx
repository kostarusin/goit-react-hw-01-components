import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
   
  return (
    <>
      <table className={style.transactionHistory}>
        <thead className={style.head}>
          <tr>
            <th className={style.type}>Type</th>
            <th className={style.amount}>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={style.body}>
          {items.map(item => (
            <tr key={item.id} className={style.trColor}>
              <td className={style.bodyType}>{item.type}</td>
              <td className={style.bodyAmount}>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
    
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};