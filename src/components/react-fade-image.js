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

  get src() {
    const { lazy, src } = this.props;
    return lazy ? { 'data-src': src } : { src };
  }

  constructor(inProps) {
    super(inProps);
    this.state = {
      loaded: false
    };
  }

  componentWillReceiveProps(inProps) {
    const { lazy } = inProps;
    const _loaded = this.state.loaded;

    if (lazy && !_loaded) {
      const { src } = this.props;
      this.root.src = src;
      this.root.removeAttribute('data-src');
    }
  }

  _onLoad = (inEvent) => {
    const { onChange } = this.props;
    this.setState({ loaded: true }, () => {
      onChange(inEvent);
    });
  };

  render() {
    const { lazy, src, className, ...props } = this.props;
    const { loaded } = this.state;

    return (
      <img
        ref={root => this.root = root}
        onLoad={this._onLoad}
        data-loaded={loaded}
        className={classNames('react-fade-image', className)}
        {...this.src}
        {...props}
      />
    );
  }
}
