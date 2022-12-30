let box = document.querySelectorAll('.box')
let reset = document.getElementById('reset')
let print = document.getElementById('print')


let turn = 'x'
// <= Change Turn =>
function changeTurn() {
  if (turn === 'x') {
    turn = 0
  }
  else {
    turn = 'x'
  }
}
// <==Won==>
function gameOver() {
  if (box[0].innerText === 'x' && box[1].innerText === 'x' && box[2].innerText === 'x') {
    print.innerHTML = `x win`
    gameReset()
  }
  else if (box[3].innerText === 'x' && box[4].innerText === 'x' && box[5].innerText === 'x') {
    print.innerHTML = `x win `
    gameReset()
  }
  else if (box[6].innerText === 'x' && box[7].innerText === 'x' && box[8].innerText === 'x') {
    print.innerHTML = `x win `
    gameReset()
  }
  else if (box[0].innerText === 'x' && box[3].innerText === 'x' && box[6].innerText === 'x') {
    print.innerHTML = `x win `
    gameReset()
  }
  else if (box[1].innerText === 'x' && box[4].innerText === 'x' && box[7].innerText === 'x') {
    print.innerHTML = `x win `
    gameReset()
  }
  else if (box[2].innerText === 'x' && box[5].innerText === 'x' && box[8].innerText === 'x') {
    print.innerHTML = `x win`
    gameReset()
  }
  else if (box[0].innerText === 'x' && box[4].innerText === 'x' && box[8].innerText === 'x') {
    print.innerHTML = `x win `
    gameReset()
  }
  else if (box[2].innerText === 'x' && box[4].innerText === 'x' && box[6].innerText === 'x') {
    print.innerHTML = `x win `
    gameReset()
  }
  // x win logic  ends
  // 0 win logic start 
  if (box[0].innerText === '0' && box[1].innerText === '0' && box[2].innerText === '0') {
    print.innerHTML = `0 win`
    gameReset()
  }
  else if (box[3].innerText === '0' && box[4].innerText === '0' && box[5].innerText === '0') {
    print.innerHTML = `0 win `
    gameReset()
  }
  else if (box[6].innerText === '0' && box[7].innerText === '0' && box[8].innerText === '0') {
    print.innerHTML = `0 win `
    gameReset()
  }
  else if (box[0].innerText === '0' && box[3].innerText === '0' && box[6].innerText === '0') {
    print.innerHTML = `0 win `
    gameReset()
  }
  else if (box[1].innerText === '0' && box[4].innerText === '0' && box[7].innerText === '0') {
    print.innerHTML = `0 win `
    gameReset()
  }
  else if (box[2].innerText === '0' && box[5].innerText === '0' && box[8].innerText === '0') {
    print.innerHTML = `0 win`
    gameReset()
  }
  else if (box[0].innerText === '0' && box[4].innerText === '0' && box[8].innerText === '0') {
    print.innerHTML = `0 win `
    gameReset()
  }
  else if (box[2].innerText === '0' && box[4].innerText === '0' && box[6].innerText === '0') {
    print.innerHTML = `0 win `
    gameReset()
  }
}

box.forEach((e) => {
  e.addEventListener("click", () => {
    e.innerText = turn
    changeTurn()
    gameOver()
  }
  )
})
reset.addEventListener('click', gameReset)
function gameReset() {
  setTimeout(() => {
    location.reload();
  }, 1000)
}