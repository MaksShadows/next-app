import React from 'react';
import styles from "./form.module.scss";


export default function Form({ onClose, newMonth, newDayOfWeek }) {
  return (
    <>
    <div className={styles.form__container}>
        <button
         className={styles.form__btn}
         onClick={onClose}
        >
          X
        </button>
        <div  className={styles.form__lables}>
          <div className={styles.form__wrap}>
            <label htmlFor="month" className={styles.input__label}>
            Month
         </label>
          <input className={styles.form__input}  placeholder={newMonth} id="month" disabled />
          </div>
          <div className={styles.form__wrap}>
            <label htmlFor="day" className={styles.input__label}>Day</label>
            <input type="text"  className={styles.form__input} placeholder={newDayOfWeek} id="day" disabled/>
          </div>
        </div>
      </div>
    </>
  );
}
