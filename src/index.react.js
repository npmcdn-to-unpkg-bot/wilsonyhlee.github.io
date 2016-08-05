
var NavBar = React.createClass({
    getInitialState: function() {
        return {
            options: ["Resume", "Projects", "Personal Interests"]
        };
    },
    _clickNav: function(tab) {
        this.props.clickNav(tab);
    },
    render: function() {
        var options = this.state.options;
        var optionLi = options.map(function(o, i) {
            var classes = this.props.activeTab === i ? "active" : "";
            return (
                <li key={i} className={classes} onClick={this._clickNav.bind(this, i)}>
                    <a>{o}</a>
                </li>);
        }.bind(this));

        return (
            <nav className="navbar navbar-inverse">
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

function compare(a ,b) {
    if(a < b) {
        return -1;
    }
    if(a > b) {
        return 1;
    }
    return 0;
}

function compareDate(a,b) {
    var dateA = new Date(a);
    var dateB = new Date(b);
    if (dateA < dateB) {
        return -1;
    }
    if (dateA > dateB) {
        return 1;
    }
    return 0;
}

var Restaurants = React.createClass({
    getInitialState: function() {
        return {
            restaurants: [
                {name: "Jean Georges", date: "Feb 28, 2016", rating: 4.0},
                {name: "Café Boulud", date: "March 6, 2016", rating: 4.3},
                {name: "Yakitori Tori Shin", date: "March 27, 2016", rating: 4.6},
                {name: "Kajitsu", date: "April 3, 2016", rating: 4.3},
                {name: "Dovetail", date: "April 10, 2016", rating: 3.6},
                {name: "Wallsé", date: "April 17, 2016", rating: 3.1},
                {name: "The Musket Room", date: "April 24, 2016", rating: 3.8},
                {name: "Telepan", date: "May 1, 2016", rating: 4.2},
                {name: "Andanada", date: "May 15, 2016", rating: 3.3},
                {name: "Ai Fiori", date: "May 22, 2016", rating: 3.9},
                {name: "Aureole", date: "May 29, 2016", rating: 3.5},
                {name: "Sushi of Gari", date: "June 5, 2016", rating: 4.0},
                {name: "Cafe China", date: "June 26, 2016", rating: 3.8},
                {name: "The Breslin Bar and Dining Room", date: "July 3, 2016", rating: 3.5},
                {name: "PUBLIC", date: "July 10, 2016", rating: 3.9},
                {name: "Junoon", date: "July 17, 2016", rating: 3.7},
                {name: "Delaware and Hudson ", date: "July 24, 2016", rating: 3.9},
                {name: "Yakitori Tori Shin", date: "July 31, 2016", rating: 4.6}
            ]
        }
    },
    render: function() {
        var tabCells = this.state.restaurants.map(function(r, i) {
            return (
                <tr key={i}>
                    <td>{r.name}</td>
                    <td>{r.date}</td>
                    <td>{r.rating}</td>
                </tr>)
        });
        var classes = "panel panel-primary" + (this.props.show ? "" : " hide");
        return (
            <div className={classes}>
                <div className="panel-heading">Restaurants</div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Our Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabCells}
                    </tbody>
                </table>
            </div>
        );

    }
});

var App = React.createClass({
    getInitialState: function() {
        return {activeTab: 0};
    },
    _clickNav: function(tab) {
        this.setState({activeTab: tab});
    },
	render: function() {
		return (
            <div className="container-fluid">
                <NavBar activeTab={this.state.activeTab} clickNav={this._clickNav}/>
                <div className="col-xs-12">
                    <Restaurants show={this.state.activeTab === 2}/>
                </div>
            </div>
        );
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
);