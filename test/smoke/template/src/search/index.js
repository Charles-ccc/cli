

import React from 'react';
import ReactDOM from 'react-dom';
import largeNumber from 'large-number';
import logo from './images/logo.png';
import './search.less';

// eslint-disable-next-line no-unused-vars
class Search extends React.Component {
  constructor() {
    // eslint-disable-next-line prefer-rest-params
    super(...arguments);

    this.state = {
      Text: null,
    };
  }

  loadComponent() {
        import('./text').then((Text) => {
          this.setState({
            Text: Text.default,
          });
        });
  }

  render() {
    const { Text } = this.state;
    const addResult = largeNumber('999', '1');
    return <div className="search-text">
            {
                Text ? <Text /> : null
            }
            { addResult }
            搜索文字的内容<img src={ logo } onClick={ this.loadComponent.bind(this) } />
        </div>;
  }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root'),
);
