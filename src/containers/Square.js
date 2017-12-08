import { connect } from 'react-redux'
import { initialize, mark, highlight } from './actions'
import ReactSquare from './components/Square'

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
    putMark: (r, c) => {
      dispatch(putMark({r, c}))
    },
    initialize: () => {
      dispatch(initialize())
    },
  }
}

const Square = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReactSquare)

export default Square
