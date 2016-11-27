import React from 'react';
import Board from './Board'
import OrderToggleButton from './OrderToggleButton'

class Game extends React.Component {
  constructor() {
    super();
    this.history = [
      {squares: Array(3).fill().map(() => Array(3).fill(null))},
    ]
    this.state = {
      stepNumber: 0,
      xIsNext: true,
      historyIsAscend: true,
    }
  }
  _initialize() {
    this.setState({
      stepNumber: 0,
      xIsNext: true,
      historyIsAscend: true,
    })
    this.history = [
      {squares: Array(3).fill().map(() => Array(3).fill(null))},
    ]
  }
  _current() {
    const squares = this.history[this.state.stepNumber].squares
    return {squares: squares.map((row) => row.slice())}
  }
  _calculateCompletedLine() {
    const squaresOn = (a, b, c) => {
      const squares = this._current().squares
      return [squares[a.r][a.c],
              squares[b.r][b.c],
              squares[c.r][c.c]]
    }
    const isAllSame = (a, b, c) => (a && a === b && a === c)
    const lines = [
      [{r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}],
      [{r: 1, c: 0}, {r: 1, c: 1}, {r: 1, c: 2}],
      [{r: 2, c: 0}, {r: 2, c: 1}, {r: 2, c: 2}],
      [{r: 0, c: 0}, {r: 1, c: 0}, {r: 2, c: 0}],
      [{r: 0, c: 1}, {r: 1, c: 1}, {r: 2, c: 1}],
      [{r: 0, c: 2}, {r: 1, c: 2}, {r: 2, c: 2}],
      [{r: 0, c: 0}, {r: 1, c: 1}, {r: 2, c: 2}],
      [{r: 0, c: 2}, {r: 1, c: 1}, {r: 2, c: 0}],
    ]
    for (let line of lines) {
      const squaresOnLine = squaresOn(...line)
      if (!isAllSame(...squaresOnLine)) continue
      return line
    }
    return [];
  }
  _calculateWinner() {
    const line = this._calculateCompletedLine()
    if (!line.length) return
    const one = line[0]
    return this._current().squares[one.r][one.c]
  }
  _status() {
    if (this._isFilled()) return 'Draw'
    const winner = this._calculateWinner()
    return winner ? 'Winner: ' + winner
                  : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
  }
  _isFilled() {
    return this._current().squares.every((row) => row.indexOf(null) === -1)
  }
  _isFinished() {
    return this._isFilled() || this._calculateWinner()
  }
  _isMarked(r, c) {
    return this._current().squares[r][c] !== null
  }
  _moves(ascend) {
    const moves = this.history.map((step, move) => {
      const desc = move ? '#move: ' + move : 'Game start'
      const isCurrent = (move === this.state.stepNumber)
      return (
        <li key={'move' + move}>
          <a href="#"
            className={isCurrent ? 'current' : ''}
            onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      )
    })
    // if (!this.historyIsAscend) moves.reverse()
    if (!ascend) moves.reverse()
    return moves
  }
  _appendHistory(r, c) {
    const current = this._current()
    current.squares[r][c] = this.state.xIsNext ? 'X' : 'O'
    this.history.push(current)
  }
  jumpTo(step) {
    const latestStep = this.history.length - 1
    if (step > latestStep) step = latestStep
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
      historyIsAscend: this.state.historyIsAscend,
    })
  }
  _proceedStep() {
    this.jumpTo(this.state.stepNumber + 1)
  }
  _isAtLatestStep() {
    return this.state.stepNumber === this.history.length - 1
  }
  onClick(r, c) {
    if (!this._isAtLatestStep()) return
    if (this._isFinished()) {
      this._initialize()
      return
    }
    if (this._isMarked(r, c)) {
      return
    }
    this._appendHistory(r, c)
    this._proceedStep()
  }
  toggleOrder() {
    this.setState({
      stepNumber: this.state.stepNumber,
      xIsNext: this.state.xIsNext,
      historyIsAscend: !this.state.historyIsAscend
    })
  }
  render() {
    return (
      <div className="game">
        <div className="game-info">
          <div>{this._status()}</div>
          <OrderToggleButton
            isAscend={this.state.historyIsAscend}
            onClick={() => this.toggleOrder()}/>
          <ol>{this._moves(this.state.historyIsAscend)}</ol>
        </div>
        <div className="game-board">
          <Board squares={this._current().squares}
                 highlights={this._calculateCompletedLine()}
                 onClick={(r, c) => this.onClick(r, c)}/>
        </div>
      </div>
    );
  }
}

export default Game;
