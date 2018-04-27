import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import FaComment from 'react-icons/lib/fa/comment'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import {
  upvotePost,
  downvotePost
} from '../redux/actions/posts'
import { createComment } from '../redux/actions/comments'
import AddComment from './AddComment'

const Post = props => {
  let { id, title, author, content, createdAt, votes, img_url } = props.post

  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <CardImg
            top
            width="100%"
            src={img_url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              {title} | <FaArrowUp onClick={() => props.upvotePost(id)} /> {votes} {votes > 0 && <FaArrowDown onClick={() => props.downvotePost(id)} />}
            </CardTitle>
          <CardSubtitle>{author}</CardSubtitle>
            <CardText>
              {content}
            </CardText>
              <hr />
            <Moment fromNow ago>{createdAt}</Moment> ago | <FaComment /> {' '}{props.comments.length}{' '} {props.comments.length !== 1 ? 'Comments' : 'Comment'}
            <AddComment postId={id}/>
            <ul className="mt-2">
              {props.comments.map(comment => <li key={comment.id}>{comment.content}</li>)}
            </ul>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state, props) => {
  return {
    comments: state.comments.filter(comment => comment.post_id === props.post.id)
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ upvotePost, downvotePost, createComment }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
