import React from 'react'
import './Board.css'
import Data from './board.json'

const Board = () => {
  return (
    <div className='board-container'>
        <h2 >Board of Directors</h2>
        <div className="bod1">
            <div className="board-member">
                <p className='officer'>{Data[0].title}</p>
                <p>{Data[0].name}</p>
                {/* <p>jwarren1363c@gmail.com</p> */}
            </div>
            <div className="board-member">
                <p className='officer'>{Data[1].title}</p>
                <p>{Data[1].name}</p>
            </div>
            <div className="board-member">
                <p className='officer'>{Data[2].title}</p>
                <p>{Data[2].name}</p>
            </div>
            <div className="board-member">
                <p className='officer'>{Data[3].title}</p>
                <p>{Data[3].name}</p>
            </div>
        </div>
        <div className="bod2">
            <div className='board-member'>
                <p>{Data[4].name}</p>
            </div>
            <div className='board-member'>
                <p>{Data[5].name}</p>
            </div>
            <div className='board-member'>
                <p>{Data[6].name}</p>
            </div>
        </div>
        <div className="bod3">
            <div className='board-member'>
                <p>{Data[7].name}</p>
            </div>
            <div className='board-member'>
                <p>{Data[8].name}</p>
            </div>
        </div>
    </div>
  )
}
export default Board