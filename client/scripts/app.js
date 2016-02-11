

var App = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world!
      </div>
      )
  }
})

React.render(
  <App />,
  document.getElementById('app')
  );