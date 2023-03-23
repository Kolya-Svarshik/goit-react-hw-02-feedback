import s from './control.module.scss';

const Control = () => {
  return (
    <ul className={s.control}>
      <li className={s.control_item}>
        <button className={s.control_button}>Good</button>
      </li>
      <li className={s.control_item}>
        <button className={s.control_button}>Neutral</button>
      </li>
      <li className={s.control_item}>
        <button className={s.control_button}>Bad</button>
      </li>
    </ul>
  );
};

export default Control;
