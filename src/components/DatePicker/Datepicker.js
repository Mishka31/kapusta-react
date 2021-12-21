import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';

import { ReactComponent as CalendarIcon } from './calendar.svg';
import styles from './Datepicker.module.css';

registerLocale('ru', ru);

function Datepicker({ onSelectedDate }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const selectedDay = selectedDate.getDate();
  const selectedMonth = selectedDate.getMonth() + 1;
  const selectedYear = selectedDate.getFullYear();

  // console.log('selectedDay', selectedDay);
  // console.log('selectedMonth', selectedMonth);
  // console.log('selectedYear', selectedYear);

  function handleSelect(date) {
    setSelectedDate(date);
    onSelectedDate({ selectedDay, selectedMonth, selectedYear });
  }

  return (
    <div className={styles.containerDatepicker}>
      <CalendarIcon className={styles.icon} width="20px" height="20px" />
      <div className="">
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={selectedDate}
          onChange={handleSelect}
          className={styles.date}
          maxDate={new Date()}
          locale="ru"
        />
      </div>
    </div>
  );
}

export default Datepicker;
