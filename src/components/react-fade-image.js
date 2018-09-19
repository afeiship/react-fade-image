import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactIfElse from 'react-if-else';


export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    lazy: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    lazy: false,
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: false
    };
  }

  componentWillReceiveProps(inProps) {
    const { lazy } = inProps;
    const _value = this.state.value;

    if (lazy && !_value) {
      const { src } = this.props;
      this.root.src = src;
      this.root.removeAttribute('data-src');
    }
  }

  _onLoad = (inEvent) => {
    const { onChange } = this.props;
    this.setState({ value: true }, () => {
      onChange(inEvent);
    });
  };

  render() {
    const { lazy, src, className, ...props } = this.props;
    const { value } = this.state;

    return (
      <ReactIfElse nodeName={React.Fragment} value={lazy}>
        <img
          ref={root => this.root = root}
          onLoad={this._onLoad}
          data-loaded={value}
          className={classNames('react-fade-image', className)}
          data-src={src}
          {...props}
        />
        <img
          ref={root => this.root = root}
          onLoad={this._onLoad}
          data-loaded={value}
          className={classNames('react-fade-image', className)}
          src={src}
          {...props}
        />
      </ReactIfElse>
    );
  }
}
