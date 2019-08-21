import React, { Component } from 'react';
import EachRow from "./../EachRow";

class EachUserMapping extends Component {
    render() {
        // console.log(this.props);
        const { userData, deptMapping } = this.props;
        return (
            <div className="user-block">
                <h5>{userData.name}</h5>
                {userData.subjects.map(subject => <EachRow key={subject} allDept={userData.subjects} selectedDept={subject} deptCategories={deptMapping} />)}
            </div>
        );
    }
}

export default EachUserMapping;