---
title: "Renderizado condicional de componentes en 'React.js'"
date: 2021-06-05
tags: react
layout: post-react
description: "Guía para el renderizado condicional de componentes en 'React.js'"
---

# Renderizado condicional de componentes en 'React.js'
````jsx
import React from 'react';
import ReactDOM from 'react-dom';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
````

***

- Quiero aprender más sobre: ["React"](../00/react)
