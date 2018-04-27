import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { createPost } from '../redux/actions/posts'
import { connect } from 'react-redux'

class AddPostForm extends Component {
  state = {
    title: "",
    content: "",
    author: "",
    img_url: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title && this.state.content && this.state.author && this.state.img_url) {
      this.props.createPost(this.state)
      this.props.toggleForm()
    }
  }

  handleFocus = e => {
    if (!e.target.value) e.target.style.boxShadow = '0 0 5px red'
    else e.target.style.boxShadow = '0 0 5px green'
    switch(e.target.name) {
      case 'title':
        this.setState({ title: e.target.value })
        break;
      case 'body':
        this.setState({ content: e.target.value })
        break;
      case 'author':
        this.setState({ author: e.target.value })
        break;
      case 'image':
        this.setState({ img_url: e.target.value })
        break;
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
              onChange={this.handleFocus}
              onFocus={this.handleFocus}
            />
            </FormGroup>
            <FormGroup>
              <Label for="body-field">Body</Label>
              <Input
                type="text"
                name="body"
                id="body-field"
                onChange={this.handleFocus}
                onFocus={this.handleFocus}
              />
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input
                type="text"
                name="author"
                id="author-field"
                onChange={this.handleFocus}
                onFocus={this.handleFocus}
              />
            </FormGroup>
            <FormGroup>
              <Label for="image-field">Image URL</Label>
              <Input
                type="text"
                name="image"
                id="image-field"
                onChange={this.handleFocus}
                onFocus={this.handleFocus}
              />
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
