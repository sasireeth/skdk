import './index.css'

const TabItem = props => {
  const {isactive, list, sel} = props
  const {tabId, displayText} = list
  const clk = () => {
    sel(tabId)
  }
  const lis = isactive ? 'tab active' : 'tab'

  return (
    <li>
      <button type="button" className={lis} onClick={clk}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
