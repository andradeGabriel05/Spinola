import { Bar, Doughnut } from "react-chartjs-2";
import { getRadialBarConfig } from "./progressGraph";
import { FaHome, FaCog, FaDoorOpen } from "react-icons/fa";
import WelcomeImage from "Spinola/src/assets/vectors/Learning languages-cuate(2).svg";
import "./user.scss";
import { Link } from "react-router-dom";
import { getBarChartConfig } from "./columnGraph";

import "./statisticsUser";
import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
  const userId = localStorage.getItem("user");
  const username = localStorage.getItem("username");
  const [points, setPoints] = useState(0);
  const [daystrike, setDaystrike] = useState(0);
  const [lessons, setLessons] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [timeSpentYesterday, setTimeSpentYesterday] = useState(0);
  const [timeSpentToday, setTimeSpentToday] = useState(0);
  const [timeSpentWeek, setTimeSpentWeek] = useState(0);
  const [timeSpentWeekTotal, setTimeSpentWeekTotal] = useState(0);

  const [sunday, setSunday] = useState(0);
  const [monday, setMonday] = useState(0);
  const [tuesday, setTuesday] = useState(0);
  const [wednesday, setWednesday] = useState(0);
  const [thursday, setThursday] = useState(0);
  const [friday, setFriday] = useState(0);
  const [saturday, setSaturday] = useState(0);

  async function getAllPosts() {
    try {
      const response = await axios.get(
        `http://localhost:3300/api/verify-exercise-details/user?userId=${userId}`
      );
      setPoints(response.data[0].points);
      setDaystrike(response.data[0].day_strike);
      setLessons(response.data[0].lessons);

      // Get time spent all time

      const getTimeSpent = await axios.get(
        `http://localhost:3300/api/verify-exercises-user/user?userId=${userId}`
      );
      if (getTimeSpent.data.length !== 0) {
        setTimeSpent(getTimeSpent.data[0].time_spent);
      }
      // Get time spent yesterday
      const getTimeSpentYesterday = await axios.get(
        `http://localhost:3300/api/verify-exercises-user-yesterday/user?userId=${userId}`
      );
      if (getTimeSpentYesterday.data.length !== 0) {
        console.log(getTimeSpentYesterday);
        console.log(getTimeSpentYesterday.data[0].time_spent);
        setTimeSpentYesterday(getTimeSpentYesterday.data[0].time_spent);
      }

      // Get time spent today
      const getTimeSpentToday = await axios.get(
        `http://localhost:3300/api/verify-exercises-user-today/user?userId=${userId}`
      );
      if (getTimeSpentToday.data.length !== 0) {
        setTimeSpentToday(getTimeSpentToday.data[0].time_spent);
      }

      const getTimeSpentWeek = await axios.get(
        `http://localhost:3300/api/verify-exercises-user-week/user?userId=${userId}`
      );
      if (getTimeSpentWeek.data.length !== 0) {
        setMonday(Number(getTimeSpentWeek.data[0].time_spent) / 60);
        setTuesday(Number(getTimeSpentWeek.data[1].time_spent) / 60);
        setWednesday(Number(getTimeSpentWeek.data[2].time_spent) / 60);
        setThursday(Number(getTimeSpentWeek.data[3].time_spent) / 60);
        setFriday(Number(getTimeSpentWeek.data[4].time_spent) / 60);
        setSaturday(Number(getTimeSpentWeek.data[5].time_spent) / 60);
        setSunday(Number(getTimeSpentWeek.data[6].time_spent) / 60);
      }

      const getTimeSpentWeekTotal = await axios.get(
        `http://localhost:3300/api/verify-exercises-user-week-total/user?userId=${userId}`
      );
      console.log(getTimeSpentWeekTotal)
      if (getTimeSpentWeekTotal.data.length !== 0) {
        console.log(getTimeSpentWeekTotal.data);
        setTimeSpentWeekTotal(Number(getTimeSpentWeekTotal.data[0].time_spent  / 60 ).toFixed(2));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const timeSpentHour = Number(timeSpent / 60).toFixed(2);

  const timeSpentHourToday = Number(timeSpentToday / 60).toFixed(2);

  const timeSpentHourYesterday = Number(timeSpentYesterday / 60).toFixed(2);

  useEffect(() => {
    getAllPosts();
  }, []);

  // Example data
  const data = [70, 30];

  const chartConfig = getRadialBarConfig(data);

  // Dados de exemplo
  const dataColumn = [
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  ];
  const labelsColumn = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Configuração do gráfico
  const chartConfigColumn = getBarChartConfig(dataColumn, labelsColumn);

  return (
    <div className="container_user">
      <aside>
        <nav className="aside_nav">
          <div className="aside_nav_above">
            <ul>
              <li>
                <Link to="/">
                  <FaHome />
                </Link>
              </li>

              <li>
                <Link to="/settings">
                  <FaCog />
                </Link>
              </li>
            </ul>
          </div>
          <div className="aside_nav_below">
            <ul>
              <li>
                <Link to="/user">
                  <FaDoorOpen />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <main>
        <header className="header_dashboard">
          <Link to={"/"} className="logo_name">
            Spínola
          </Link>

          <h1>Language</h1>
        </header>

        <div className="sections_dashboard">
          <div className="wrapper_sections_left_dashboard">
            <section className="welcome_user_dashboard">
              <div className="welcome_user_dashboard_text">
                <h1>Welcome back, {username}!</h1>
                <p>
                  Great to see you again. Keep up the great work and continue
                  refining your French skills!
                </p>
              </div>
              <div className="image_welcome"></div>
            </section>

            <div className="four_cards">
              <div className="user_statistics">
                <section className="progress_user_dashboard">
                  <h1>Progress statistics</h1>
                  <div className="grid_graph">
                    <div className="doughnut_graph">
                      <Doughnut
                        data={chartConfig.data}
                        options={chartConfig.options}
                      />
                      <span className="perc_progress">70%</span>
                    </div>
                  </div>
                  <p>You are 30% away of complete all the lessons</p>
                </section>

                <section className="section_statistics_dashboard">
                  <h1>Statistics:</h1>
                  <div className="statistics_text">
                    <h2>Lessons completed</h2>
                    <span>{lessons}</span>
                  </div>
                  <div className="statistics_text">
                    <h2>Total points</h2>
                    <span>{points}</span>
                  </div>
                </section>
              </div>

              <div className="points_card_dashboard">
                <section className="idk_dashboard">
                  <h1>Test</h1>
                  <p>Test your knowledge with our quizzes</p>
                  <button>Start test</button>
                </section>

                <section className="section_ranking_dashboard">
                  <h1>Ranking of points</h1>
                  <div className="user_division">
                    <div className="user_division_details">
                      <div className="icon_user">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/266/266033.png"
                          alt=""
                        />
                      </div>
                      <div className="user_division_text">
                        <h2>John Doe</h2>
                        <span>1123 points</span>
                      </div>
                    </div>
                    <div className="classification_ranking">
                      <span>#1</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <section className="time_dashboard">
            <h1>Activity</h1>
            <div className="day_strike">
              <div className="circle_day_strike">
                <div className="circle_day_strike_text">
                  <span>{daystrike}</span>
                  <p>Day strike</p>
                </div>
              </div>
            </div>
            <div className="time_spent">
              <h2>This week</h2>
              <div className="column_graph">
                <Bar
                  data={chartConfigColumn.data}
                  options={chartConfigColumn.options}
                />
                <p>{timeSpentWeekTotal}h spent learning this week</p>
              </div>
              <div className="time_spent_statistics">
                <h2>Time spent learning</h2>
                <div className="time_spent_statistics_text">
                  <h2>Today</h2>
                  <span>{timeSpentHourToday}h</span>
                </div>
                <div className="time_spent_statistics_text">
                  <h2>Yesterday</h2>
                  <span>{timeSpentHourYesterday}h</span>
                </div>
                <div className="time_spent_statistics_text">
                  <h2>All time</h2>
                  <span>{timeSpentHour}h</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
