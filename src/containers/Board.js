import { connect } from 'react-redux'
import { initialize, mark, highlight } from './actions'
import ReactBoard from './components/Board'

const mapStateToProps = ({ square }, ownProps) => {
  const { mark, highlights } = square
  const { r, c } = ownProps
  const isHighlighted = highlights.some((highlight) => {
    return highlight.r === r && highlight.c === c
  })

  return {
    r,
    c,
    mark,
    isHighlighted,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    markAt: (r, c) => {
      dispatch(mark({r, c}))
      dispatch(highlight([{r, c}]))
    },
    initialize: () => {
      dispatch(initialize())
    },
  }
}

const Square = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReactBoard)

export default Square
