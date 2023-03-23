import s from './statis.module.scss';
import iconLike from './like.svg';
import iconDislike from './dislike.svg';

const Statis = () => {
  return (
    <>
      <h2 className={s.statis_title}>Statistics</h2>

      <ul className={s.statis_list}>
        <li className={s.statis_item}>
          <p className={s.statis_text}>
            Good: <span>0</span>
          </p>
        </li>
        <li className={s.statis_item}>
          <p className={s.statis_text}>
            Neutral: <span>0</span>
          </p>
        </li>
        <li className={s.statis_item}>
          <p className={s.statis_text}>
            Bad: <span>0</span>
          </p>
        </li>
        <li className={s.statis_item}>
          <p className={s.statis_text}>
            Total: <span>0</span>
          </p>
        </li>
        <li className={s.statis_item}>
          <p className={s.statis_text}>
            Posetive feedbac: <span>25%</span>
          </p>
          <div className={s.statis_line}>
            <img src={iconLike} alt="icon like" className={s.statis_icon}></img>
            <div className={s.statis_procent}>
              <div className={s.statis_value} style={{ width: '25%' }}></div>
            </div>
            <img
              src={iconDislike}
              alt="icon dislike"
              className={s.statis_icon}
            ></img>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Statis;
