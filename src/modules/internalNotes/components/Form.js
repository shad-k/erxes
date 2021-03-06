import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, Button } from 'modules/common/components';
import styled from 'styled-components';
import { colors, dimensions } from 'modules/common/styles';

const propTypes = {
  create: PropTypes.func.isRequired
};

const contextTypes = {
  __: PropTypes.func
};

const EditorActions = styled.div`
  padding: 0 20px 10px 20px;
  position: absolute;
  color: ${colors.colorCoreGray};
  bottom: 0;
  right: 0;
`;

const EditorWrapper = styled.div`
  position: relative;

  textarea {
    border-bottom: none;
    box-sizing: border-box;
    padding: ${dimensions.unitSpacing}px ${dimensions.coreSpacing}px
      ${dimensions.coreSpacing * 1.5}px;
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      editing: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.onSend = this.onSend.bind(this);
    this.cancelEditing = this.cancelEditing.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ content: e.target.value, editing: true });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13 && e.shiftKey === false && this.state.content !== '') {
      e.preventDefault();
      this.onSend();
    }
  }

  onSend() {
    this.props.create(this.state.content);
    this.cancelEditing();
  }

  cancelEditing() {
    this.setState({ content: '', editing: false });
  }

  renderFooter() {
    if (!this.state.editing) return null;
    return (
      <EditorActions>
        <Button
          onClick={this.cancelEditing}
          btnStyle="simple"
          size="small"
          icon="cancel-1"
        >
          Discard
        </Button>
        <Button
          onClick={this.onSend}
          btnStyle="success"
          size="small"
          icon="send"
        >
          Save
        </Button>
      </EditorActions>
    );
  }

  render() {
    const { __ } = this.context;
    return (
      <EditorWrapper>
        <form onKeyDown={this.handleKeyDown} onChange={this.handleChange}>
          <FormControl
            componentClass="textarea"
            placeholder={__('Start typing to leave a note')}
            value={this.state.content}
          />
          {this.renderFooter()}
        </form>
      </EditorWrapper>
    );
  }
}

Form.propTypes = propTypes;
Form.contextTypes = contextTypes;

export default Form;
