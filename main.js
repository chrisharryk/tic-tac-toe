const cells = document.querySelectorAll('.cell')
const verdict = document.getElementById('msg')

// true -> X, false -> O
let player = true, end = false
let idx = 0, dia = 0, adia = 0, rows = [0, 0, 0], cols = [0, 0, 0]
const pos = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
}

cells.forEach(el => {
  for (let i = 0; i < cells.length; i++) {
    let cell = cells.item(i);
    let x = pos[i+1][0], y = pos[i+1][1]
    cell.addEventListener('click', () => {
      if (cell.innerHTML.length === 0 && !end) {
        if (player) {
          player = false;
          cell.innerHTML = 'X'
          if (x === y) dia++
          if (x + y === 2) adia++
          rows[x]++
          cols[y]++
        } else {
          player = true
          cell.innerHTML = 'O'
          if (x === y) dia--
          if (x + y === 2) adia--
          rows[x]--
          cols[y]--
        }
      }
      if (dia === 3 || adia === 3 || rows[x] === 3 || cols[y] === 3) {
        end = true
        verdict.innerHTML = 'X has won the game!'
      }
      if (dia === -3 || adia === -3 || rows[x] === -3 || cols[y] === -3) {
        end = true
        verdict.innerHTML = 'O has won the game!'
      }
    })
    ++idx
    console.log(idx);
    
  }
})

/**
 * keep checking for events in cells
 * if event is triggered :- 
 * change the sign based on the player value if the cell.innerHTML.length !== 0
 * check for winner using winner function
 * if there is a winner, show an alert and quit the game!
 */