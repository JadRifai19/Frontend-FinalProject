import React from "react";
import "./privatetraining.css";
import ramiImageSrc from "../../assets/rami.jpeg";
import jadImageSrc from "../../assets/jad.jpeg";

const TeamTraining = () => {
  const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  const ramiTrainingSchedule = [
    { day: "Monday", time: "09:00" },
    { day: "Wednesday", time: "18:00" },
    { day: "Saturday", time: "18:00" },
    { day: "Sunday", time: "12:00"}
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

    const getStatus = (day, hour) => {
      if (
        (day === "Mon" && hour === "09:00") ||
        (day === "Tue" && hour === "18:00") ||
        (day === "Wed" && hour === "13:00") ||
        (day === "Thur" && hour === "20:00")||
        (day === "Thur" && hour === "16:00") ||
        (day === "Mon" && hour === "10:00") ||
        (day === "Sat" && hour === "10:00") ||
        (day === "Wed" && hour === "11:00") ||
        (day === "Sat" && hour === "19:00") 
      ) {
        return "Equipped";
      } else if (
      (day === "Mon" && hour === "11:00") ||
      (day === "Wed" && hour === "13:00") ||
      (day === "Wed" && hour === "14:00") ||
      (day === "Wed" && hour === "15:00") ||
      (day === "Fri" && hour === "19:00") ||
      (day === "Fri" && hour === "20:00") ||
      (day === "Wed" && hour === "13:00") ||
      (day === "Tue" && hour === "11:00") ||
      (day === "Tue" && hour === "10:00") ||
      (day === "Wed" && hour === "11:00") ||
      (day === "Wed" && hour === "12:00") ||
      (day === "Wed" && hour === "10:00") ||
      (day === "Wed" && hour === "13:00") ||
      (day === "Wed" && hour === "13:00") ||
      (day === "Wed" && hour === "13:00") ||
      (day === "Wed" && hour === "13:00") ||
      (day === "Fri" && hour === "09:00") ||
      (day === "Fri" && hour === "10:00") 

      )
      {
        return "Available";
      } else {
        return "Unavailable";
      }
    };

    for (let hour = 9; hour <= 22; hour++) {
      const time = hour.toString().padStart(2, "0") + ":00";
      hours.push(
        <tr key={hour}>
          <td className="hour">{time}</td>
          {days.map((day, index) => {
            const status = getStatus(day, time);
            let color = "";

            if (status === "Equipped") {
              color = "blue";
            } else if (status === "Available") {
              color = "green";
            } else if (status === "Unavailable") {
              color = "red";
            }

            return (
              <td key={index} className={`day ${color}`}>
                {status}
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
