// Write your JS code here
import './index.css'

import Blogitem from '../BlogItem'

const Bloglist = props => {
  const {blogsList} = props

  return (
    <ul className="blogs-container">
      {blogsList.map(eachblog => (
        <Blogitem blogDetails={eachblog} key={eachblog.id} />
      ))}
    </ul>
  )
}
export default Bloglist
