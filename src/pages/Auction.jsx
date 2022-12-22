import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Timer from "../components/Timer/Timer";
import styles from "./Auction.module.css";


export default function Auction() {

  const users = [
    {
      id: 1,
      title: "Участник 1",
      events: "-",
      time: 80,
      guarantee: 24,
      price: 1000000,
      actions: "",
    },
    {
      id: 2,
      title: "Участник 2",
      events: "-",
      time: 70,
      guarantee: 36,
      price: 2000000,
      actions: "",
    },
    {
      id: 3,
      title: "Участник 3",
      events: "-",
      time: 85,
      guarantee: 24,
      price: 1500000,
      actions: "",
    },
  ]

  const [[hours, minutes, seconds], setTime] = useState([0, 2, 0]);
  const [index, setIndex] = useState(1)

  const tick = () => {

    if (hours === 0 && minutes === 0 && seconds === 0) {
      reset()
    } else if (minutes === 0 && seconds === 0) {
      setTime([hours - 1, 59, 59]);
    } else if (seconds === 0) {
      setTime([hours, minutes - 1, 59]);
    } else {
      setTime([hours, minutes, seconds - 1]);
    }
  }

  const reset = () => {
    setTime([0, 2, 0]);

    for (let i = 0; i < 4; i++) {
      if (index < users.length) {
      setIndex(index + 1);
      break 
    } else if (index === users.length) {
        setIndex(1)
        break
      } 
    }
  }

  useEffect(() => {
    const timerID = setInterval(function () {
      tick()
    }, 1000);
    return () => clearInterval(timerID);
  });

  return (
    <>
      <Header />
      <div className={styles.container}>

        <div >
          <p className={styles.text}>Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанныx в таблице:</p>
        </div>

        <div >
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.topElem}>ХОД</th>
                {users.length === 0 ? <th className={styles.timer}><Timer hours={hours} minutes={minutes} seconds={seconds} /></th> :
                  ""}
                {users.map(user => {
                  return <th key={user.id}>
                    {index === user.id ? <Timer hours={hours} minutes={minutes} seconds={seconds} /> : ""} </th>
                })}
              </tr>
            </thead>

            <thead>
              <tr>
                <th className={styles.element}>Параметры и требования</th>
                {users.map(user => {
                  return <th key={user.id} className={styles.element}>{user.title}</th>
                })}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className={styles.tableMain}>Наличие комплекса мероприятий</td>
                {users.map(user => {
                  return <td key={user.id}>{user.events}</td>
                })}
              </tr>

              <tr>
                <td className={styles.tableMain}>Сроки, кол-во дней</td>
                {users.map(user => {
                  return <td key={user.id}>{user.time}</td>
                })}
              </tr>

              <tr>
                <td className={styles.tableMain}>Гарантийные обязательства, мес</td>
                {users.map(user => {
                  return <td key={user.id}>{user.guarantee}</td>
                })}
              </tr>
              <tr>
                <td className={styles.tableMain}>Стоимость, руб</td>
                {users.map(user => {
                  return <td key={user.id}>{user.price}</td>
                })}
              </tr>

              <tr>
                <td className={styles.tableMain}>Действия:</td>
                {users.map(user => {
                  return <td key={user.id}>{user.actions}</td>
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}