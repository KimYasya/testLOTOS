import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Timer from "../components/Timer/Timer";
import styles from "./Auction.module.css";

export default function Auction() {

  const users = [{
    id: 1,
    title: "Участник 1",
    events: "-",
    time: 80,
    guarantee: 24,
    price: 1000000,
  },
  {
    id: 2,
    title: "Участник 2",
    events: "-",
    time: 70,
    guarantee: 36,
    price: 2000000,
  },
  {
    id: 3,
    title: "Участник 3",
    events: "-",
    time: 85,
    guarantee: 24,
    price: 1500000,
  },

]

    const [[hours, minutes, seconds], setTime] = useState([0, 0, 5]);
    // const [ isOver, setIsOver ] = useState(false)



    const tick = () => {

      if (hours === 0 && minutes === 0 && seconds === 0) {
      reset()
      // setIsOver(true)

      } else if (minutes === 0 && seconds === 0) {
        setTime([hours - 1, 59, 59]);
      } else if (seconds === 0) {
        setTime([hours, minutes - 1, 59]);
      } else {
        setTime([hours, minutes, seconds - 1]);
      }
    }

  const reset = () => {
    setTime([0, 0, 5]);
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

 

  return (
    <>
      <Header />
      <div className={styles.container}>

        <div >
          <p className={styles.text}>Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанныxs в таблице:</p>
        </div>

        <div >
          <table className={styles.table}>
          <thead>
              <tr>
                <th className={styles.topElem}>ХОД</th>
                <th><Timer hours={hours} minutes={minutes} seconds = {seconds} /></th>
                {users.map(user => {
                  return <th key={user.id}></th>
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
              <tr className="table-block__tr_selection">
                <td className="table-block__elements table-bottom">Наличие комплекса мероприятий</td>
                {users.map(user => {
                  return <td key={user.id}>{user.events}</td>
                })}
                
              </tr>

              <tr className="table-block__tr_selection">
                <td className="table-block__elements table-bottom">Сроки, кол-во дней</td>
                {users.map(user => {
                  return <td key={user.id}>{user.time}</td>
                })}
                
              </tr>

              <tr className="table-block__tr_selection">
                <td className="table-block__elements table-bottom">Гарантийные обязательстваб мес</td>
                {users.map(user => {
                  return <td key={user.id}>{user.guarantee}</td>
                })}
                
              </tr>
              <tr className="table-block__tr_selection">
                <td className="table-block__elements table-bottom">Стоимость, руб</td>
                {users.map(user => {
                  return <td key={user.id}>{user.price}</td>
                })}
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}