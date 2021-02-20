import React from "react"
import styles from "./doyouwant.module.css"
import ButtonGreen from "./buttongreen"

export default function DoYouWant() {
  return (
    <div className={styles.card}>
        <h3>你想成為行業的頂峰嗎？</h3>
        <ul>
            <li>如何實踐三年財富自由永久退休計劃</li>
            <li>我們會提供培訓免費課程給你</li>
            <li>你想擁有一個有共同目標的團隊和你一起攜手佔領市場，用最短的時間達到行業的頂峰</li>
            <li>跟隨Fuji Suzuki都是我的Mentor,她的提點給我一個肯定，發到我成為一個成功的企業家...你準備好了嗎？</li>
        </ul>
        <ButtonGreen />
    </div>
  )
}