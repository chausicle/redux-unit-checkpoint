import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import FaComment from 'react-icons/lib/fa/comment'
// import { bindActionCreators } from 'react'
import { connect } from 'react-redux'

const Post = props => {
  console.log('props', props);
  let { id, title, author, content, createdAt, votes, img_url } = props.post
  console.log(props.post);


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
              {title} | <FaArrowUp /> {votes} {votes > 0 && <FaArrowDown />}
            </CardTitle>
          <CardSubtitle>{author}</CardSubtitle>
            <CardText>
              {content}
            </CardText>
              <hr />
            {createdAt} | <FaComment /> {' '}{props.comments.length}{' '} {props.comments.length !== 1 ? 'Comments' : 'Comment'}
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="text" name="comment" id="comment-field" placeholder="Enter a comment here" />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
              <ul className="mt-2">
                {props.comments.map(comment => <li key={comment.id}>{comment.content}</li>)}
              </ul>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state, props) => ({
  comments: state.comments.filter(comment => comment.post_id === props.id)
})

export default connect(mapStateToProps, null)(Post)
