
var NavBar = React.createClass({
    getInitialState: function() {
        return {activeTab: 0};
    },
    _clickNav: function(tab) {
        this.setState({activeTab: tab});
    },
    render: function() {
        var options = ["Resume", "Projects", "Personal Interests"];
        var optionLi = options.map(function(o, i) {
            var classes = this.state.activeTab === i ? "active" : "";
            return (
                <li key={i} className={classes} onClick={this._clickNav.bind(this, i)}>
                    <a>{o}</a>
                </li>);
        }.bind(this));

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Wilson Y. Lee</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            {optionLi}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

var App = React.createClass({
	render: function() {
		return (
            <div>
                <NavBar />
                <div className="col-xs-12">
                </div>
            </div>
        );
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
);