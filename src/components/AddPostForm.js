import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { createPost } from '../redux/actions/posts'
import { connect } from 'react-redux'

class AddPostForm extends Component {
  state = {
    title: "",
    body: "",
    author: "",
    img_url: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title && this.state.body && this.state.author && this.state.img_url) {
      this.props.createPost(this.state)
      this.props.toggleForm()
    }
  }

  render() {
    return (
      <Row>
        <Col sm="10">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title-field">Title</Label>
            <Input
              type="text"
              name="title"
              id="title-field"
              onChange={e => this.setState({ title: e.target.value })}
            />
            </FormGroup>
            <FormGroup>
              <Label for="body-field">Body</Label>
              <Input
                type="text"
                name="body"
                id="body-field"
                onChange={e => this.setState({ body: e.target.value })}/>
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input
                type="text"
                name="author"
                id="author-field"
                onChange={e => this.setState({ author: e.target.value })}/>
            </FormGroup>
            <FormGroup>
              <Label for="image-field">Image URL</Label>
              <Input
                type="text"
                name="image"
                id="image-field"
                onChange={e => this.setState({ img_url: e.target.value })}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createPost }, dispatch)

export default connect(null, mapDispatchToProps)(AddPostForm)
