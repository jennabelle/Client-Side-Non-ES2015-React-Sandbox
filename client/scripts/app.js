var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>Hello World!</div>
      )
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <HelloWorld />
      </div>
      )
  }
})

React.render(
  <App />,
  document.getElementById('app')
  );