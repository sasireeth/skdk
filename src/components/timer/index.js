const Timer = props => {
  const {clr} = props
  let timer = 5

  const i1 = setInterval(() => {
    timer -= 1
    const tip = document.getElementById('tic')
    tip.textContent = `${timer} sec`
    if (timer === 0) {
      clearInterval(i1)
      clr()
    }
  }, 1000)

  return (
    <li className="tick" id="tic">
      60 sec
    </li>
  )
}
export default Timer
