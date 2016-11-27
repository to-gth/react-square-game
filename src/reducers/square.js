const initialState = {
  mark: null,
  highlights: [],
}

const cell = (state=initialState, action) => {
  const { mark, highlights } = state

  switch (action.type) {
    case 'INITIALIZE':
      return initialState
    case 'MARK':
      return {
        mark: 'X',
        highlights: highlights,
      }
    case 'HIGHLIGHT':
      return {
        mark: mark,
        highlights: action.line,
      }
    default:
      return state
  }
}

export default cell
