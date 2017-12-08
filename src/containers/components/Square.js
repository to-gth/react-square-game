import React from 'react'
import './Square.css'

class Square extends React.Component {
  render() {
    const { isHighlighted, mark, putMark, initialize } = this.props
    return (
      <button
        className={'square' + (isHighlighted ? ' highlighted' : '')}
        onClick={() => {(mark) ? initialize() : putMark()}}>
        {mark}
      </button>
    );
  }
}

export default Square
