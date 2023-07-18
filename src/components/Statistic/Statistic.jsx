import PropTypes from 'prop-types';
import style from './Statistic.module.css';

export const Statistic = ({ title, stats }) => {
  
  return (
    <>
      <section className={style.statistics}>
        {title ? <h2 className={style.title}>{title}</h2> : null}
        <ul className={style.statList}>
          {stats.map(stat => (
            <li className={style.item} key={stat.id}>
              <span className={style.label}>{stat.label}</span>
              <span className={style.percentage}>{stat.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistic.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
