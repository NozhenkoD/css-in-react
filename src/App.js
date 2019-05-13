import React, { Component } from 'react';
import './styles/styles.scss'

import { Navigation } from './components/navigation'
import { View } from './components/view'
import { ViewCode } from './components/viewCode'
import { Code } from './components/code'
import { GithubLogo } from './components/GithubLogo'
import PAGES from './constants/pages';

export class App extends Component {

  constructor(props) {
    super(props);
    this.handleClickNavItem = this.handleClickNavItem.bind(this);
    this.state = {
      currentPage: "STYLED_COMPONENTS",
    }
  }

  handleClickNavItem(page) {
    this.setState({
      currentPage: page,
    })
  }

  render() {
    const { currentPage } = this.state;
    const { component, code } = PAGES[currentPage];
    return (
      <div className="App">
        <Navigation active={currentPage} handleClick={this.handleClickNavItem} />
        <View component={component} />
        <Code code={code} />
        <GithubLogo />
      </div>
    );
  }
}

export default App;
