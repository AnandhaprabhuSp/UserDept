import React, { Component } from 'react';

class EachRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selectedDept, // User selected subject seted as default selected one
            subDeptSelected: this.props.deptCategories[0][this.props.selectedDept][0] // by default, we are giving first sub category
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubDeptChange = this.handleSubDeptChange.bind(this);
    }
    // On First drop down change 
    handleChange(event) {
        this.setState({
            selected: event.target.value
        });
    }
    // On sub drop down change
    handleSubDeptChange(event) {
        this.setState({
            subDeptSelected: event.target.value
        });
    }

    render() {
        let subDepts = this.props.deptCategories[0][this.state.selected];
        return (
            <div className="row">
                {/* First drop down - looping each subject in option */}
                <select value={this.state.selected} onChange={this.handleChange} multiple={false}>
                    {this.props.allDept.map(subject => <option key={subject}>{subject}</option>)}
                </select>
                {/* Sub drop down, using the data from main drop down */}
                <select value={this.state.subDeptSelected} onChange={this.handleSubDeptChange} multiple={false}>
                    {subDepts.map(subDepts => <option key={subDepts}>{subDepts}</option>)}
                </select>
                {/* Other required components */}
                <input type="text" value={this.state.subDeptSelected} />
            </div>
        );
    }
}

export default EachRow;