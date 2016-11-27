export const initialize = () => {
  return {
    type: 'INITIALIZE',
  }
}

export const mark = (r=-1, c=-1) => {
  return {
    type: 'MARK',
    r,
    c,
  }
}

export const highlight = (line) => {
  return {
    type: 'HIGHLIGHT',
    line,
  }
}

export const appendHistory = (r=-1, c=-1) => {
  return {
    type: 'APPEND_HISTORY',
    r,
    c,
  }
}
