// Write your JS code here
import './index.css'
const Blogitem = props => {
  const {blogDetails} = props
  const {id,title,description,publishedDate}=blogDetails 
  return (
    <li className="blog-container">
        <div>
            <h1>{title}</h1>
            <p>{publishedDate}</p>
        </div>
        <p>{description}</p>
    </li>
  )
}
export default Blogitem