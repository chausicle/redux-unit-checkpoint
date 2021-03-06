import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { filterByTitle } from '../redux/actions/filter'

class FilterPosts extends Component {
  render () {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filter-field" className="mr-sm-2">Filter by title:</Label>
          <Input
            type="text"
            name="email"
            id="filter-field"
            onChange={e => this.props.filterByTitle(e.target.value)}
          />
        </FormGroup>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ filterByTitle }, dispatch)

export default connect(null, mapDispatchToProps)(FilterPosts)
