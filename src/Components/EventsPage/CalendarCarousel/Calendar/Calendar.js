/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Calendar.css';
import { Table, Popover, OverlayTrigger } from 'react-bootstrap';
import Loading from '../../../ReusableComponents/Loading/Loading';
import CustomHR from '../../../ReusableComponents/CustomHR/CustomHR';

const Calendar = (props) => {
  const [cellsArray, setCellsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const currentDate = new Date();
  const month = currentDate.getMonth() + props.monthOffset;

  const year = currentDate.getFullYear();

  const firstDay = new Date(year, month).getDay();
  const monthName = months[month];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/events/${month + 1}`)
      .then((res) => {
        // console.log(
        //   currentDate.getMonth(),
        //   props.monthOffset,
        //   res.data,
        //   monthName
        // );
        const cells = [];
        const events = res.data;
        let currDay = 1;
        let foundWeekDay = false;

        for (let i = 0; i < 5; i += 1) {
          const rowEl = [];

          for (let j = 0; j < 7; j += 1) {
            if (!foundWeekDay) {
              if (j === firstDay && currDay <= monthDays[month]) {
                foundWeekDay = true;
              }
            } else {
              currDay += 1;
              if (currDay > monthDays[month]) {
                foundWeekDay = false;
              }
            }
            let eventCell = null;
            const allEventNames = [];
            if (foundWeekDay) {
              for (let k = 0; k < events.length; k += 1) {
                const eventDate = new Date(
                  events[k].date.slice(0, events[k].date.indexOf('T'))
                );
                const day = eventDate.getDate();

                if (day === currDay) {
                  allEventNames.push(events[k]);
                  // console.log(day, currDay, events[k].name, events[k].date);
                }
              }
            }
            if (allEventNames.length > 1) {
              eventCell = (
                <OverlayTrigger
                  trigger={['hover', 'click', 'focus']}
                  placement="top"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Title as="h3">All Events</Popover.Title>
                      <CustomHR />
                      <Popover.Content>
                        <ul className="allEventsCalendar-Popover">
                          {allEventNames.map(({ name, _id }) => {
                            return <li key={_id}>{name}</li>;
                          })}
                        </ul>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <div
                    style={{
                      height: '100%',
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      style={{ height: '100%' }}
                      className="d-block w-100 image-cell-table"
                      src={
                        allEventNames[0].poster_url.trim().length !== 0
                          ? `${process.env.REACT_APP_BASE_URL}/images/${allEventNames[0].poster_url}`
                          : 'https://images.unsplash.com/photo-1456154875099-97a3a56074d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'
                      }
                      alt="event"
                    />
                    <span className="eventTitle-calendar">
                      {allEventNames[0].name}
                    </span>
                    <span className="date-calendar">{currDay}</span>
                  </div>
                </OverlayTrigger>
              );
            } else if (allEventNames.length === 1) {
              eventCell = (
                <div
                  style={{
                    height: '100%',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    style={{ height: '100%' }}
                    className="d-block w-100 image-cell-table"
                    src={
                      allEventNames[0].poster_url.trim().length !== 0
                        ? `${process.env.REACT_APP_BASE_URL}/images/${allEventNames[0].poster_url}`
                        : 'https://images.unsplash.com/photo-1456154875099-97a3a56074d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'
                    }
                    alt="event"
                  />
                  <span className="eventTitle-calendar">
                    {allEventNames[0].name}
                  </span>
                  <span className="date-calendar">{currDay}</span>
                </div>
              );
            }
            let cellClassName = 'cell-calendar';
            if (i === 0) {
              cellClassName += ' top-row';
            } else if (i === 4) {
              cellClassName += ' bottom-row';
            }

            rowEl.push(
              <td key={`td${i}${j}`} style={{ padding: '0' }}>
                <div className={cellClassName}>
                  {!foundWeekDay ? (
                    <div className="border-div-calendar-no-hover">
                      <div className="not-present-month" />
                    </div>
                  ) : (
                    <div className="border-div-calendar">
                      {eventCell || (
                        <div className="no-event-cell">
                          <span
                            className="date-calendar"
                            style={{
                              position: 'absolute',
                              bottom: '0',
                              right: '0.3rem',
                            }}
                          >
                            {currDay}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </td>
            );
          }

          const oneRow = <tr key={`td${i}`}>{rowEl}</tr>;
          cells.push(oneRow);
        }
        setCellsArray(cells);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, ['firstDay', 'month', 'monthDays']);

  return (
    <>
      <Loading show={loading} />
      {loading ? (
        <></>
      ) : (
        <div className="calendar-container">
          {/* <p className="heading-calendar">Calendar Activities</p> */}
          <p className="month-name-calendar">
            {`Events Planned for ${monthName} of ${year}`}
          </p>

          <div className="table-calendar">
            <Table borderless>
              <thead>
                <tr style={{ color: ' #A19F9D' }}>
                  <th className="th-calendar">Sunday</th>
                  <th className="th-calendar">Monday</th>
                  <th className="th-calendar">Tuesday</th>
                  <th className="th-calendar">Wednesday</th>
                  <th className="th-calendar">Thursday</th>
                  <th className="th-calendar">Friday</th>
                  <th className="th-calendar">Saturday</th>
                </tr>
              </thead>

              <tbody>{cellsArray}</tbody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default Calendar;
