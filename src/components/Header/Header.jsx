import React from "react";
import styles from "./Header.module.css";

export default function Header() {

  return (
    <div>
      <div className={styles.header}>
        <p>Ход торгов <b>Тестовые торги на аппарат ЛОТОС</b></p>
      </div>
    </div>
  )
}