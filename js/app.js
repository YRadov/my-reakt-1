var App = React.createClass({
    render: function() {
        return (
           <div className="app">
               Компонент Арр!
           </div>
        );
    }
});

ReactDOM.render(
    <App />,
document.getElementById('root')
);