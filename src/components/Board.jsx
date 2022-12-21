import { useState } from 'react';
import Square from "./Square.jsx"

const BuildBoardGrid = () => {
    let [score, setScore] = useState(0)

    const scoreWord = () => {
        for (let i = 0; i < (tilesCopy || 0).length; i++) {
            const aB = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, p: 3, b: 3, c: 3, m: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 }
            score += (aB[Object.values(tilesCopy[i])[0].toLowerCase()] || 0)
        }
        setScore(score)
    }
    let tileArray = Array(225).fill(''); //put tile array in useState below
    const [tiles, setTiles] = useState([{ 1_1: "a" }, { 1_2: "b" }]);
    let tilesCopy = [...tiles];

    const addTile = (e) => {
        const { id, value } = e.target;
        for (let i = 0; i < (tilesCopy || 0).length; i++) {
            tilesCopy[i][id] && (tilesCopy[i][id] = value);
            console.log(id)
        }
        setTiles(tilesCopy)
        console.log(tiles)
    }
    const row = [1, 2, 3]
    const col = [1, 2, 3]

    return (
        <>
            <button className='inputDivDC btn btn-info' onClick={scoreWord}>
                Submit
            </button>
            <div>
                <p>Your score is..{score} </p>
                {row.map(row => (
                    col.map(col => (
                        <Square key={[row, col]} row={row} col={col} addTile={addTile} />
                    ))))}

            </div>

        </>
    )


}

export default BuildBoardGrid;