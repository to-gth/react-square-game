import React from 'react'

class Square extends React.Component {
  render() {
    const { r, c, isHighlighted, mark, markAt, initialize } = this.props
    return (
      <button
        className={'square' + (isHighlighted ? ' highlighted' : '')}
        onClick={() => {(mark) ? initialize() : markAt(r, c)}}>
        {mark}
      </button>
    );
  }
}

export default Square
