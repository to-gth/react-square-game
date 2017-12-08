const initialState = {
  xIsNext: true,
  squares: Array(3).fill().map(() => Array(3).fill(null)),
}

const board = (state=initialState, action) => {
  const { xIsNext, squares } = state

  switch (action.type) {
    case 'INITIALIZE':
      return initialState
    case 'MARK':
      squares[action.r][action.c] = (xIsNext) ? 'X' : 'O'
      return {
        xIsNext: !xIsNext,
        squares: squares,
      }
    default:
      return state
  }
}

export default board
