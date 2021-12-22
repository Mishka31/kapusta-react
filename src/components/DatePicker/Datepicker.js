import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';

import { ReactComponent as CalendarIcon } from './calendar.svg';
import styles from './Datepicker.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { transactionOperations } from 'redux/transaction';

registerLocale('ru', ru);

function Datepicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = useSelector(state => state.transaction.date)
  const day = selectedDate.getDate();
  const month = selectedDate.getMonth() + 1;
  const year = selectedDate.getFullYear();
  // const day = date.day;
  // const month = date.month;
  // const year = date.year;
  console.log(date)
  const formatDate = `${day}.${month}.${year}`;
  const dispatch = useDispatch();

  const handleSelect = date => {
    setSelectedDate(date);

    dispatch(transactionOperations.setDate({ day, month, year }));

    // console.log(formatDate); //only for testing
    // console.log(selectedDate); //only for testing
    // onSelectedDate({ day, month, year });
  };

  return (
    <div className={styles.containerDatepicker}>
      <CalendarIcon className={styles.icon} width="20px" height="20px" />
      <div className="">
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={selectedDate}
          onChange={handleSelect}
          // onChange={date => setSelectedDate(date)} //only for testing
          value={formatDate}
          className={styles.date}
          maxDate={new Date()}
          locale="ru"
        />
      </div>
    </div>
  );
}

export default Datepicker;
