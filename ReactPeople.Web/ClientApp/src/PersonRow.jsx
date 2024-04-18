import React from "react";

class PersonRow extends React.Component {

    getPersonRow = () => {
        return <tr className={this.props.person.age > 65 ? 'table-danger' : ''}> 
            <td>{this.props.person.firstName}</td>
            <td>{this.props.person.lastName}</td>
            <td>{this.props.person.age}</td>
        </tr>
    }

    render () {
        return this.getPersonRow();
    }
}

export default PersonRow; 