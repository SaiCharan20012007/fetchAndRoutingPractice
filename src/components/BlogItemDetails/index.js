// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedList = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    console.log(data)
    this.setState({blogItemDetails: updatedList, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {
      id,
      title,
      imageUrl,
      avatarUrl,
      author,
      content,
      topic,
    } = blogItemDetails

    const mainContent = (
      <div className="blog-item-details-container">
        <h1 className="blog-details-title">{title}</h1>
        <div className="profile-sub-container">
          <img
            src={avatarUrl}
            alt={author}
            className="profile-sub-container-icon"
          />
          <p className="author-name-sub">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-details-image" />
        <p className="blog-des">{content}</p>
      </div>
    )

    const load = (
      <div testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    )

    return isLoading ? load : mainContent
  }
}

export default BlogItemDetails
