export const colors = {
  primary: '#645cff',
}

// (1)
export const setupBorder = ({ width = '1px', type, color }) => {
  return `${width} ${type} ${color}`
}
