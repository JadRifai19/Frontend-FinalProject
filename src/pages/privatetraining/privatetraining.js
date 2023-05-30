import React, { useState } from "react";
import "./privatetraining.css";
import ramiImageSrc from "../../assets/orangeball.jpeg";
import jadImageSrc from "../../assets/whiteball.jpeg";
import BasicModal from "../../components/modal/BasicModal";

const TeamTraining = () => {
  const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  const ramiTrainingSchedule = [
    { day: "Monday", time: "09:00" },
    { day: "Wednesday", time: "18:00" },
    { day: "Saturday", time: "18:00" },
  ];

  const jadTrainingSchedule = [
    { day: "Monday", time: "18:00" },
    { day: "Tuesday", time: "18:00" },
    { day: "Friday", time: "10:00" },
  ];

  const renderTrainingSchedule = (coachName, trainingSchedule) => (
    <div className="trainingSchedule">
      <h3>{coachName} Training Schedule</h3>
      {trainingSchedule.map((training, index) => (
        <p key={index}>
          {training.day} - {training.time}
        </p>
      ))}
    </div>
  );

  const renderHourlyCalendar = () => {
    const hours = [];

    const isRamiAvailable = (day, hour) => {
      return ramiTrainingSchedule.some(
        (training) => training.day === day && training.time === hour
      );
    };

    const isJadAvailable = (day, hour) => {
      return jadTrainingSchedule.some(
        (training) => training.day === day && training.time === hour
      );
    };

    const handleClick = (day, hour) => {
      // Handle button click for the specific day and hour
      console.log("Button clicked:", day, hour);
    };

    for (let hour = 9; hour <= 22; hour++) {
      const time = hour.toString().padStart(2, "0") + ":00 ";
      hours.push(
        <tr key={hour}>
          <td className="hour">{time}</td>
          {days.map((day, index) => {
            const isRamiAvail = isRamiAvailable(day, time);
            const isJadAvail = isJadAvailable(day, time);
            let color = "";

            if (isRamiAvail && isJadAvail) {
              color = "black";
            } else if (isRamiAvail) {
              color = "green";
            } else if (isJadAvail) {
              color = "red";
            }

            return (
              <td key={index} className="day">
                <BasicModal>
                  <button
                    className={`color-point ${color}`}
                    onClick={() => handleClick(day, time)}
                  >
                    {day} - {time}
                  </button>
                </BasicModal>
              </td>
            );
          })}
        </tr>
      );
    }
    return hours;
  };

  return (
    <div className="teamTrainingWrapper">
      <div className="teamContainer">
        <div className="team">
          <img className="coachImage" src={ramiImageSrc} alt="Coach Rami" />
          <h3 className="coachName">Coach Rami</h3>
          <div className="hourlyCalendar">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  {days.map((day, index) => (
                    <th key={index}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>{renderHourlyCalendar()}</tbody>
            </table>
          </div>
        </div>
        <div className="team">
          <img className="coachImage" src={jadImageSrc} alt="Coach Jad" />
          <h3 className="coachName">Coach Jad</h3>
          <div className="hourlyCalendar">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  {days.map((day, index) => (
                    <th key={index}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>{renderHourlyCalendar()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTraining;
