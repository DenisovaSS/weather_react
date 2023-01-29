import React from "react";

export default function FormatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.date.getDay()];
  let hours = props.date.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let date = props.date.date.getDate();
  let month = props.date.date.getMonth();
  let monthAll = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let months = monthAll[month];
  return (
    <div>
      <h4>
        {day}, {hours}:{minutes}
      </h4>
      <p className="data-today">
        {date} {months}
      </p>
    </div>
  );
}
