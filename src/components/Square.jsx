import { useState } from 'react';

const Square = ({ row, col }) => {

    const id = row + "_" + col

    // let [score, setScore] = useState(0)
    let tileArray = Array(225).fill(''); //put tile array in useState below
    // const [tiles, setTiles] = useState(["a", "b", "c", "d", "e", "f"]);
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
    return (
        <>
            <p> A square id = {id}  </p>
            <div id={id} className="square" >
                <input
                    className="tile0"
                    id={id}
                    maxLength="1"
                    onChange={(event) => addTile(event)}
                />
            </div>
        </>
    )
}

export default Square;