import { css } from 'emotion';

const OpenSans = '"Open Sans", -apple-system, sans-serif';

export const container = css`
   {
    position: absolute;
    background: #ffffff;
    z-index: 10;
    right: 6px;
    top: 54px;
    box-shadow: 0px 1px 6px rgba(49, 53, 59, 0.12);
    border-radius: 8px;
  }
`;

export const calendarCont = css`
   {
    padding: 26px 32px;
    .monthName {
      display: flex;
      justify-content: center;
      position: relative;
      font-family: ${OpenSans};
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 24px;
    }
    .arrowCalendar {
      position: absolute;
      height: 0px;
      width: 0px;
      display: inline-block;
      padding: 3px;
      border: 1px solid;
      font-weight: bold;
      color: #9fa6b0;
      cursor: pointer;
      border-width: 0px 3px 3px 0px;
      left: 0;
      transform: rotate(135deg);
      top: 4px;
    }
    .year {
      font-weight: normal;
    }
  }
`;

export const calendarMonth = css`
   {
    display: flex;
    .calendar2 {
      margin-left: 16px;
    }
    .arrowRight {
      left: unset;
      right: 0;
      transform: rotate(312deg);
    }
    table {
      border-collapse: collapse;
    }
    tr td {
      width: 32px;
      font-family: ${OpenSans};
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      text-align: center;
      color: rgba(49, 53, 59, 0.68);
    }
    thead tr {
      border-bottom: 12px solid #ffffff;
    }
    tbody tr {
      border-bottom: 18px solid #ffffff;
      color: rgba(49, 53, 59, 0.96);
    }
    .dayName {
      padding: 8px;
    }
    .blank-items {
      padding: 8px;
    }
    .date {
      cursor: pointer;
      padding: 8px;
      &:hover {
        background: lightGrey;
        border-radius: 8px;
      }
    }
    .active {
      background: #03ac0e !important;
      border-radius: 8px;
      color: #ffffff;
    }
    .activeDates {
      background: #ebffef;
    }
    .disabled {
      padding: 8px;
      color: rgba(49, 53, 59, 0.32);
    }
  }
`;

export const bottomCont = css`
   {
    border-top: 1px solid #f3f4f5;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      padding: 0px 40px;
    }
    .timeSpan {
      font-family: ${OpenSans};
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: rgba(49, 53, 59, 0.68);
    }
    .first {
      margin-right: 16px;
    }
  }
`;