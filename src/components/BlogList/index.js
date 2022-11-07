// Write your JS code here
import './index.css'
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedList = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: updatedList, isLoading: false})
    console.log(data)
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <ul>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(each => <BlogItem key={each.id} details={each} />)
        )}
      </ul>
    )
  }
}

export default BlogList
