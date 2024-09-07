import cx from 'classnames';
import React, { Component, HTMLAttributes } from 'react';

const CLASS_NAME = 'react-fade-image';
const DATA_LOADED = 'data-loaded';
const BOOL_TRUE = 'true';
const BLANK_IMG = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

export type ReactFadeImageProps = {
  lazy?: boolean;
  once?: boolean;
  onChange?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  src?: string;
} & HTMLAttributes<HTMLImageElement>;

export default class ReactFadeImage extends Component<ReactFadeImageProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    lazy: false,
    once: false,
  };

  private root: HTMLImageElement | null = null;

  get src() {
    const { lazy, src } = this.props;
    return lazy ? { 'data-src': src } : { src };
  }

  get loaded() {
    return (
      this.state.loaded || this.root?.getAttribute(DATA_LOADED) === BOOL_TRUE
    );
  }

  state = {
    loaded: false,
  };

  shouldComponentUpdate() {
    return !(this.props.once && this.loaded);
  }

  handleLoad = (inEvent: React.SyntheticEvent<HTMLImageElement>) => {
    const { lazy, onChange } = this.props;
    if (!lazy) {
      this.setState({ loaded: true }, () => onChange?.(inEvent));
    }
  };

  render() {
    const { once, lazy, src, className, ...props } = this.props;
    const { loaded } = this.state;

    return (
      <img
        alt="fade-image"
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        ref={(root) => (this.root = root)}
        onLoad={this.handleLoad}
        data-loaded={loaded}
        src={BLANK_IMG}
        {...this.src}
        {...props}
      />
    );
  }
}
