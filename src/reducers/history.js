const initialState = {
  step: 0,
  history: [],
}

const history = (state=initialState, action) => {
  const { step, history } = state

  switch (action.type) {
    case 'INITIALIZE':
      return initialState
    case 'APPEND_HISTORY':
      return {
        step: step + 1,
        history: history.concat([action.squares]),
      }
    default:
      return state
  }
}

export default history
