// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {details} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = details
  return (
    <Link to={`/blogs/${id}`} className="link-container">
      <li className="blog-item-container">
        <img src={imageUrl} alt={title} className="blog-list-image" />
        <div className="blog-list-content">
          <p className="blog-topic">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="author-profile">
            <img src={avatarUrl} alt={author} className="author-image" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
