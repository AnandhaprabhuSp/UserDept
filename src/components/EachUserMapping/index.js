import React, { Component } from 'react';
import EachRow from "./../EachRow";

class EachUserMapping extends Component {
    // Inside each user, looping the row - contains two drop down
    render() {
        // console.log(this.props);
        const { userData, deptMapping } = this.props;
        return (
            <div className="user-block">
                <h5>{userData.name}</h5>
                {/* Each row  - contains Subject(Dept) and sub category  */}
                {/* we are sending all depts and selected subject and dept mapping (sub depts - m1,m2,etc) */}
                {userData.subjects.map(subject => <EachRow key={subject} allDept={userData.subjects} selectedDept={subject} deptCategories={deptMapping} />)}
            </div>
        );
    }
}

export default EachUserMapping;