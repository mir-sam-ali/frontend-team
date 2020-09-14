/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './CalendarCarousel.css';
import Calendar from './Calendar/Calendar';

class CalendarCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      direction: null,
      settings: {
        controls: true,
        indicators: false,
        pause: false,
        interval: null,
        touch: false,
      },
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  };

  render() {
    const currentDate = new Date();
    let month = currentDate.getMonth();

    // let year = currentDate.getFullYear();
    // if (month === 13) {
    //   month = 1;
    //   year += 1;
    // } else if (month === 0) {
    //   month = 12;
    //   year -= 1;
    // }
    return (
      <div className="root-CalendarCarousel">
        <Carousel
          {...this.state.settings}
          style={{ background: '#20201f' }}
          activeIndex={this.state.index}
          direction={this.state.direction}
          onSelect={this.handleSelect}
        >
          {month !== 1 ? (
            <Carousel.Item>
              <Calendar monthOffset={-1} />
            </Carousel.Item>
          ) : null}
          <Carousel.Item>
            <Calendar monthOffset={0} />
          </Carousel.Item>
          {month !== 12 ? (
            <Carousel.Item>
              <Calendar monthOffset={1} />
            </Carousel.Item>
          ) : null}
        </Carousel>
        {/* <p style={{ color: 'white' }}>
          *Hover over calendar cell to view more events on that day.
        </p> */}
      </div>
    );
  }
}

export default CalendarCarousel;
