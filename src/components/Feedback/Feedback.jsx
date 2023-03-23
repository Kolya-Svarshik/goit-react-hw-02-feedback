import React from 'react';
import Control from './Control/Control';
import Statis from './Statis/Statis';
import s from './feedback.module.scss';

const Feedback = () => {
  return (
    <div className={s.feedbac}>
      <h1 className={s.feedbac_titel}>Please leave feedback</h1>

      <Control />

      <Statis />
    </div>
  );
};

export default Feedback;
