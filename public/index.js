import ReactDemokit from '@feizheng/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFadeImage from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    lazyValue: true
  };

  handleClick = () => {
    this.setState({ lazyValue: false });
  };

  render() {
    const { lazyValue } = this.state;
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-fade-image">
        <button className="button" onClick={this.handleClick}>
          Trigger Load Image
        </button>
        <div className="list">
          <p>
            <ReactFadeImage src="https://imglf4.nosdn.127.net/img/KzNuMlRKSFVENitYYjJBYnU5Q2cwQjRjd0ljSURUWmxZeGxvWVlOYnhHZWRReFBoUVJWUXFRPT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg" />
          </p>
          <p>
            <ReactFadeImage
              lazy={lazyValue}
              src="https://imglf6.nosdn.127.net/img/ZWl4dnBUa0VLMzhXRThRbnV3UWlQelY1dGNPeUdQMUhib2IwOEVvTEhvUTRISnUwNmkwekV3PT0.jpg?imageView&thumbnail=3000y2000&type=jpg&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgeHVlc2h1wrdBcnRvbW8gLyA3NzQzNzQ2NTUubG9mdGVyLmNvbQ==&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=680&dx=32&dy=36&stripmeta=0"
            />
          </p>
          <p>
            <ReactFadeImage
              lazy={lazyValue}
              src="http://imglf5.nosdn.127.net/img/K0FrVGtpUSszZU1kODV6SzZUSFZaNFhGaEliU29uSmJzL3lXdUpoK3ZLdjMyNWp1OWJTRnB3PT0.jpg?imageView&thumbnail=3000y1687&type=jpg&quality=96&stripmeta=0&type=jpg"
            />
          </p>
        </div>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
