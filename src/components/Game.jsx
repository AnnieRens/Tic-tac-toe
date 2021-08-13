import React, {useState} from 'react';
import Board from './Board';
import './Game.css'
import { calculateWinner } from '../winnerCalculator';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);
    const winner =  calculateWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board];
        // if already clicked - game over
        if(winner || boardCopy[index]) return;

        // define whose X or 0
        boardCopy[index] = xIsNext ? 'X' : 'O';

        // update the state
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const startNewGame = () => {
        // return button
        return (
            <button className="start__btn" onClick={() => setBoard(Array(9).fill(null))}>Clear</button>
        )
    }

    return (
        <div className="wrapper">
            {startNewGame()}
            <Board squares={board} click={handleClick} />
        <p className="game__info">
            {
                winner ? 'Winner: ' + winner : 'Turn: ' + (xIsNext ? 'X' : 'O')
            }
        </p>
        </div>
    );
}

export default Game;
