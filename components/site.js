export default () => ({
  row: 0,
  col: 0,
  grid: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ],
  keypressed(e) {
    if (this.row <= 5) {
      if (e.key.match(/^[a-z]$/i)) {
        let last = this.grid[this.row][4]
        if (this.col <= 4 && last === '') this.grid[this.row][this.col] = e.key
        if (this.col >= 0 && this.col < 4) this.col++

      }
      if (e.key === 'Backspace') {
        this.grid[this.row][this.col] = ''
        if (this.col > 0 && this.col <= 4) this.col--
      }
      if (e.key === 'Enter' && this.grid[this.row].join('').length === 5) {
        this.row++
        this.col = 0
      }
    }
  }
})