import React, { useCallback, useState } from 'react';
import { object, func } from 'prop-types';
import { cx } from 'emotion';
import dayjs from 'dayjs';
import { dayListId, monthListId } from './dateHelper.js';
import { container, calendarCont, calendarMonth, bottomCont } from './style.js';

const DatePicker = ({ dayMonthSelected, setDate, cancelSelection, applySelection }) => {
  const { startTime, endTime } = dayMonthSelected;

  const [selectedMonths, setMonths] = useState(() => {
    if (dayjs(startTime).diff(dayjs(endTime), 'day') < 30) {
      return { startMonth: dayjs(endTime).subtract(1, 'month'), endMonth: endTime };
    }
    return { startMonth: startTime, endMonth: endTime };
  });

  const startMonthIndex = dayjs(selectedMonths.startMonth).month();
  const endMonthIndex = dayjs(selectedMonths.endMonth).month();

  const changeMonth = useCallback(
    (nextMonth = false) => {
      let startM;
      let endM;
      if (nextMonth) {
        startM = dayjs(selectedMonths.startMonth).add(1, 'month');
        endM = dayjs(selectedMonths.endMonth).add(1, 'month');
      } else {
        startM = dayjs(selectedMonths.startMonth).subtract(1, 'month');
        endM = dayjs(selectedMonths.endMonth).subtract(1, 'month');
      }
      setMonths({ startMonth: startM, endMonth: endM });
    },
    [selectedMonths],
  );

  const getDayDate = (dateMonth, date) => {
    const month = dayjs(dateMonth).month() + 1;
    const year = dayjs(dateMonth).year();
    const newDate = dayjs(`${year}-${month}-${date}`, ['YYYY-M-D']);
    return newDate;
  };

  const selectDate = useCallback(
    (dateMonth, date, isDateDisabled) => {
      if (!isDateDisabled) {
        const newDate = getDayDate(dateMonth, date);
        setDate(newDate);
      }
    },
    [setDate],
  );

  const getDate = useCallback(
    dateMonth => {
      const totalDays = dayjs(dateMonth).daysInMonth();
      const dateRow = [];
      let dateCol = [];
      let currentDayCount = 1;
      const selectedStartTimeDay = dayjs(startTime).date();
      const selectedEndTimeDay = dayjs(endTime).date();
      let currentDateBoxCount = getDayDate(dateMonth, 1);

      for (let i = 0; i < 6; i++) {
        dateCol = [];
        for (let j = 0; j < 7; j++) {
          if (currentDayCount > totalDays) {
            break;
          }

          const currentDate = currentDayCount;
          const currentDateMonth = getDayDate(dateMonth, currentDayCount);
          const prevSelectedDate = getDayDate(startTime, selectedStartTimeDay);
          const nextSelectedDate = getDayDate(endTime, selectedEndTimeDay);

          //To add blank space for dates.
          if (currentDateBoxCount && !(dayjs(currentDateBoxCount).day() - 1 === j)) {
            dateCol.push(
              <td key={j}>
                <div className="blank-items"></div>
              </td>,
            );
          } else {
            const isDateDisabled = dayjs().isBefore(dayjs(currentDateMonth));
            currentDateBoxCount = null;
            const dateClass = cx({
              date: !isDateDisabled,
              active:
                dayjs(currentDateMonth).diff(prevSelectedDate, 'day') === 0 ||
                dayjs(currentDateMonth).diff(nextSelectedDate, 'day') === 0,
            });
            const activeDates = cx({
              activeDates:
                dayjs(prevSelectedDate).isBefore(currentDateMonth, 'day') &&
                dayjs(currentDateMonth).isBefore(nextSelectedDate, 'day'),
              disabled: isDateDisabled,
            });
            dateCol.push(
              <td className={activeDates} key={j}>
                <div className={dateClass} onClick={() => selectDate(dateMonth, currentDate, isDateDisabled)}>
                  {currentDayCount}
                </div>
              </td>,
            );
            currentDayCount += 1;
          }
        }
        dateRow.push(<tr key={i}>{dateCol}</tr>);
      }
      return dateRow;
    },
    [startTime, endTime, selectDate],
  );

  const renderCalendar = useCallback(
    dateMonth => {
      return (
        <table>
          <thead>
            <tr>
              {[1, 2, 3, 4, 5, 6].map(id => (
                <td className="dayName" key={id}>
                  {dayListId[id].slice(0, 3)}
                </td>
              ))}
              <td key="7" className="dayName">
                {dayListId[0].slice(0, 3)}
              </td>
            </tr>
          </thead>
          <tbody>{getDate(dateMonth)}</tbody>
        </table>
      );
    },
    [getDate],
  );

  return (
    <div data-testid="calendarPicker" className={container} onClick={e => e.stopPropagation()}>
      <div className={calendarCont}>
        <div className={calendarMonth}>
          <div className="calendar1">
            <div className="monthName">
              <span className="arrowCalendar" onClick={() => changeMonth()}></span>
              <span className="month">
                {monthListId[startMonthIndex]} <span className="year">{dayjs(selectedMonths.startMonth).year()}</span>
              </span>
            </div>
            {renderCalendar(selectedMonths.startMonth)}
          </div>
          <div className="calendar2">
            <div className="monthName">
              {dayjs().diff(dayjs(selectedMonths.endMonth), 'day') === 0 ? null : (
                <span className="arrowCalendar arrowRight" onClick={() => changeMonth(true)}></span>
              )}
              <span className="month">
                {monthListId[endMonthIndex]} <span className="year">{dayjs(selectedMonths.endMonth).year()}</span>
              </span>
            </div>
            {renderCalendar(selectedMonths.endMonth)}
          </div>
        </div>
      </div>
      <div className={bottomCont}>
        <span className="timeSpan">{`${dayjs(startTime).date()} ${monthListId[dayjs(startTime).month()]} ${dayjs(
          startTime,
        ).year()} - ${dayjs(endTime).date()} ${monthListId[dayjs(endTime).month()]} ${dayjs(endTime).year()}`}</span>
        {/*<div className="buttons">
          <Button className="first" type="submit" data-testid="cancelSelection" onClick={cancelSelection} main ghost>
            Batal
          </Button>
          <Button type="submit" data-testid="applySelection" main filled onClick={applySelection}>
            Terapkan
          </Button>
        </div>*/}
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  applySelection: func.isRequired,
  cancelSelection: func.isRequired,
  dayMonthSelected: object.isRequired,
  setDate: func.isRequired,
};
export default DatePicker;


