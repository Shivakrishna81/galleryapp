// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, onClickImg, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = details

  const onClickOpen = () => {
    onClickImg(id)
  }

  const shade = isActive ? '' : 'opacity'

  return (
    <li>
      <button className={`${shade}`} onClick={onClickOpen} type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
