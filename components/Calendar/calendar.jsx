import { useState, useEffect } from "react";
import moment from "moment";
import Form from "../Form/form";
import Banner from "../Banner/banner";
import styles from "./calendar.module.scss";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [showPopUp, setShowPopUp] = useState(false);



  const togglePopUp = () => {
    setShowPopUp();
  };

  function currMonthName() {
    return selectedDate.format("MMMM");
  }
  function currYear() {
    return selectedDate.format("YYYY");
  }
  function prevMonth() {
    return selectedDate.clone().subtract(1, "month");
  }
  function nextMonth() {
    return selectedDate.clone().add(1, "month");
  }

  return (
    <section className={styles.calendar}>
      <Banner />
      <div className={styles.calendar__main}>
        <div className={styles.calendar__container}>
          <div className={styles.calendar__box}>
            <button
              type="button"
              className={styles.iconButton__left}
              onClick={() => setSelectedDate(prevMonth())}
            ></button>
            <h3 className={styles.calendar__title}>
              {currMonthName()} {currYear()}
            </h3>
            <button
              type="button"
              className={styles.iconButton__right}
              onClick={() => setSelectedDate(nextMonth())}
            ></button>
          </div>
          <div className={styles.calendar__line}></div>
          <table className={styles.table}>
            <tbody>

            </tbody>
          </table>
          <div className={styles.calendar__line}></div>
          <ul className={styles.week}>
            {["S", "M", "T", "W", "T", "F", "S"].map((weekDays) => (
              <li className={styles.week__day}>{weekDays}</li>
            ))}
          </ul>
          <div className={styles.calendar__line}></div>
        </div>
        {showPopUp && (
          <Form
            onClose={togglePopUp}
            newMonth={month}
            newDayOfWeek={dayOfWeek}
          />
        )}
      </div>
    </section>
  );
}
