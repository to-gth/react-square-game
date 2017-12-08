import React from 'react'
import Square from './Square'
import './Board.css'

class Board extends React.Component {
  renderSquare(_r, _c) {
    const { highlights, squares, onClick } = this.props
    const isHighlighted = highlights.some(({ r, c }) => (r === _r && c === _c))
    return <Square
            mark={squares[_r][_c]}
            isHighlighted={isHighlighted}
            onClick={onClick.bind(null, _r, _c)}
            key={_r + ':' + _c} />
  }
  renderRow(r) {
    return (
      <div className="board-row" key={'row' + r}>
        {[0, 1, 2].map((c) => this.renderSquare(r, c))}
      </div>
    )
  }
  render() {
    return (
      <div>
        {[0, 1, 2].map((r) => this.renderRow(r))}
      </div>
    );
  }
}

export default Board;
