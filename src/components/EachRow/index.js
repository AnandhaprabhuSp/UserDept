import React, { Component } from 'react';

class EachRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selectedDept,
            subDeptSelected: this.props.deptCategories[0][this.props.selectedDept][0]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubDeptChange = this.handleSubDeptChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            selected: event.target.value
        });
    }

    handleSubDeptChange(event) {
        this.setState({
            subDeptSelected: event.target.value
        });
    }

    render() {
        let subDepts = this.props.deptCategories[0][this.state.selected];
        return (
            <div className="row">
                <select value={this.state.selected} onChange={this.handleChange} multiple={false}>
                    {this.props.allDept.map(subject => <option key={subject}>{subject}</option>)}
                </select>
                <select value={this.state.subDeptSelected} onChange={this.handleSubDeptChange} multiple={false}>
                    {subDepts.map(subDepts => <option key={subDepts}>{subDepts}</option>)}
                </select>
                <input type="text" value={this.state.subDeptSelected}/>
            </div>
        );
    }
}

export default EachRow;