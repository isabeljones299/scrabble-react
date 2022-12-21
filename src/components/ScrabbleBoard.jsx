import { useState } from 'react';
import BuildBoardGrid from './Board';



const ScrabbleBoard = () => {

  let [score, setScore] = useState(0)
  // let tileArray = Array(225).fill(''); //put tile array in useState below
  // // const [tiles, setTiles] = useState(["a", "b", "c", "d", "e", "f"]);
  // const [tiles, setTiles] = useState([{ 1_1: "a" }, { 1_2: "b" }]);
  // let tilesCopy = [...tiles];

  // const addTile = (e) => {
  //   console.log(score)
  //   const { id, value } = e.target;
  //   for (let i = 0; i < (tilesCopy || 0).length; i++) {
  //     tilesCopy[i][id] && (tilesCopy[i][id] = value);
  //   }
  //   setTiles(tilesCopy)
  //   console.log(tiles)
  // }

  // const scoreWord = () => {
  //   for (let i = 0; i < (tilesCopy || 0).length; i++) {
  //     const aB = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, p: 3, b: 3, c: 3, m: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 }
  //     score += (aB[Object.values(tilesCopy[i])[0].toLowerCase()] || 0)
  //   }
  //   setScore(score)
  // }

  // const resetScore = () => {
  //   setScore(0)
  // }



  return (
    <>
      <BuildBoardGrid />
      <div className='yourScore'>
        <p>Your score is..{score} </p>
        <p></p>
      </div>
      <div className="tile" >
        {/* <label htmlFor='tile1,1'></label> */}
        <input
          className='tile0'
          id='1_1'
          maxLength="1"
        // onChange={(event) => addTile(event)}
        /></div>
      <div className="tile" >
        {/* <label htmlFor='tile1,1'></label> */}
        <input
          className='tile1'
          id='1_2'
          maxLength="1"
        // onChange={(event) => addTile(event)}
        /></div>

      {/* <button className='inputDivDC btn btn-info' onClick={scoreWord}>
        Submit
      </button>
      <button className='inputDivDC btn btn-info' onClick={resetScore}>
        Reset Score
      </button> */}


      <div className="tile" ></div>
      <div className="tile" ></div>
    </>
  )
}

export default ScrabbleBoard;