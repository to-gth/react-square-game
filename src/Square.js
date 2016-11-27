import React from 'react'

class Square extends React.Component {
  render() {
    const { isHighlighted, mark, onClick } = this.props
    return (
      <button
        className={'square' + (isHighlighted ? ' highlighted' : '')}
        onClick={onClick}
        >
        {mark}
      </button>
    );
  }
}

export default Square
