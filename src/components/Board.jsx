
import Square from "./Square.jsx"

const BuildBoardGrid = () => {

    let square = null
    let boardArray = [[], []]
    const row = [1, 2, 3]
    const col = [1, 2, 3]
    const grid = [[1, 2, 3], [1, 2, 3]]
    // for (var tempRow = 0; tempRow < row; tempRow++) {
    //     console.log("insidefunc")
    //     boardArray.push([])
    //     boardArray[tempRow].push(new Array(col))
    //     for (var tempCol = 0; tempCol < col; tempCol++) {
    //         boardArray.push(<Square key={col} row={tempRow} col={tempCol} />)
    //         // square = new Square(tempRow, tempCol)
    //         // boardArray[tempRow][tempCol] = square.render()

    //     }


    // }
    // console.log(boardArray)
    // return boardArray
    return (
        <>
            <div>square supposed to be here{boardArray}</div>
            <div>

                {row.map(row => (
                    col.map(col => (
                        <Square key={[row, col]} row={row} col={col} />
                    ))))}

            </div>

        </>
    )


}

export default BuildBoardGrid;