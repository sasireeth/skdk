import './index.css'

const AppItem = props => {
  const {item, match} = props
  const {id, imageUrl, thumbnailUrl} = item
  const mat = () => {
    match(imageUrl)
  }

  return (
    <li>
      <button type="button" onClick={mat}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumb" />
      </button>
    </li>
  )
}
export default AppItem
