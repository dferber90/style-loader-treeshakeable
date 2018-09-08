import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import { Butler } from "../../src";

class App extends React.Component {
  static displayName = "App";
  state = {
    isVisible: false
  };
  render() {
    return (
      <div>
        <h1><code>style-loader-treeshakeable demo</code></h1>
        <button
          onClick={() =>
            this.setState(prevState => ({ isVisible: !prevState.isVisible }))
          }
        >
          Show Component
        </button>
        {this.state.isVisible && (
          <Butler />
        )}
        <p style={{ 'max-width': '400px' }}>
          You can use <b>Show Component</b> to experiment with hot module updates. The
          styles will not get added to the DOM after an HMR when they were not
          added yet. In case they were already added (because the component
          called <code>styles()</code>), they will get updated immediately.
        </p>
        <p style={{ 'max-width': '400px' }}>
          So try making changes to the Butler CSS before showing the component,
          and after showing the component. First the changes will not end up
          in <code>head</code>, and afterwards they will.
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
