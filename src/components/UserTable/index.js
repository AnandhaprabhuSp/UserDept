import React, { Component } from 'react';
import EachUserMapping from "./../EachUserMapping";

class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            deptMapping: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:8887/users.json").then(data => data.json()).then(data => this.setState({
            userData: data.users
        }));

        fetch("http://localhost:8887/subMap.json").then(data => data.json()).then(data => this.setState({
            deptMapping: data
        }));
    }

    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.userData.length > 0 && this.state.deptMapping.length >0 && this.state.userData.map(user => <EachUserMapping key={user.name} userData={user} deptMapping={this.state.deptMapping} />)}
            </div>
        );
    }
}

export default UserTable;