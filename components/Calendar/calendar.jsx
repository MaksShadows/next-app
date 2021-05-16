import React from 'react';
import { useState, useEffect } from "react";
import moment from "moment";
import Form from "../Form/form";
import Banner from "../Banner/banner";
import styles from "./calendar.module.scss";

export default function Calendar() {


  const [selectedDate, setSelectedDate] = useState(moment());
  const [calendar, setCalendar] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [month, setMonth] = useState("");

  useEffect(() => {
    setCalendar(createCalendar(selectedDate));
  }, []);

  function createCalendar(moment) {

    const startDay = moment.startOf("month").startOf("week");
    const endDay = moment.endOf("month").endOf("week");
    const calendar = [];
    calendar.push(
      Array(7)
        .fill(0)
        .map(() =>  startDay.add(1, "day"), endDay.add(1, "day"))
    );
    return calendar;
  }

  const dateClick = (date) => {

    let day = date.format("Do, dddd");
    let month = date.format("MMMM");

    setDayOfWeek(`${day}`);
    setMonth(month);
    setShowPopUp(true);
  };

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
              {calendar.map((week, index) => (
                <tr key={index} className={styles.calendar__row}>
                  {week.map((day, index) => (
                    <td
                      key={index}
                      className={styles.day}
                      onClick={() => dateClick(day)}
                    >
                      <div>{day.format("D").toString()}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.calendar__line}></div>
          <ul className={styles.week}>
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <li className={styles.week__day}>{d}</li>
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