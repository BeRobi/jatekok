import { useState } from "react";
import TictactoeModel from "../model/TictactoeModel";
import Elem from "../view_component/Elem";
import "./tictactoe.css";

// komponensen kívül példányosítjuk a modellt
const tictactoeModel = new TictactoeModel();

export default function TicTacToe(props) {
  //const list = tictactoeModel.getList();

  //state
  const [list, setList] = useState(tictactoeModel.getList());
  const [aktJatekos, setAktJatekos] = useState(tictactoeModel.getAktJatekos());

  //feliratkozás
  function kattintas(id) {
    //itt kezeljük a gyerektől jövő infot - SZÜLŐ komponensben
    console.log(id);
    tictactoeModel.setAllapot(id);
    // újra lekérjük a lista értékét
    setAktJatekos(tictactoeModel.getAktJatekos());
    setList(tictactoeModel.getList());
  }

  const [szam, setSzam] = useState(1);

  function novel(){
    let a = szam + 1
    setSzam(a)
  }

  return (
    <div className="jatek">
        <div className="pelda">
            <h3>State használata példa</h3>
        <button onClick={novel}>növel</button>
        <p>{szam} </p>
        </div>

      <h2> Tic-Tac-Toe</h2>

      <div className="jatekter">
        {list.map((elem, index) => {
          return (
            <Elem
              kattintas={kattintas}
              ertek={elem}
              key={index}
              index={index}
            />
          );
        })}
      </div>
      <p>A következő játékos: {aktJatekos}</p>
    </div>
  );
}
