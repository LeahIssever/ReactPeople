import React from 'react'
import PersonForm from './PersonForm'
import PersonRow from './PersonRow'

class PeopleTable extends React.Component {
    
    state = {
        currentPerson: {
            firstName: "",
            lastName: "",
            age: "" 
        },
        people: []
    }

    onFirstNameTextBoxChange = (e) => {
        this.setState({
            currentPerson: {
                firstName: e.target.value,
                lastName: this.state.currentPerson.lastName,
                age: this.state.currentPerson.age
            }
        });
    }

    onLastNameTextBoxChange = (e) => {
        this.setState({
            currentPerson: {
                firstName: this.state.currentPerson.firstName,
                lastName: e.target.value,
                age: this.state.currentPerson.age
            }
        });
    }

    onAgeTextBoxChange = (e) => {
        this.setState({
            currentPerson: {
                firstName: this.state.currentPerson.firstName,
                lastName: this.state.currentPerson.lastName,
                age: e.target.value
            }
        });
    }

    onAddClick = () => {
        if(!this.state.currentPerson.firstName || !this.state.currentPerson.lastName || !this.state.currentPerson.age){
            return;
        }
        this.setState({
            people: [...this.state.people, this.state.currentPerson], 
            currentPerson: { firstName: "", lastName: "", age: ""}, });
    }

    fillTable = () => {
        if(this.state.people.length === 0){
            return <h2>Nothing to display...</h2>
        }
        return <table className='table table-striped table-hover table-bordered'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {this.state.people.map(p => <PersonRow person={p} />)}
            </tbody>
        </table>
    }

    onClearClick = () => {
        this.setState({currentPerson: { firstName: "", lastName: "", age: ""}, people: []});
    }

    render() {
        <PersonForm 
        currentPerson={this.state.currentPerson}
        onFirstNameTextChange={this.onFirstNameTextBoxChange}
        onLastNameTextBoxChange={this.onLastNameTextBoxChange}
        onAgeTextBoxChange={this.onAgeTextBoxChange}
        onAddClick={this.onAddClick}
        onClearClick={this.onClearClick} 
        />
        this.fillTable();
    }
}

export default PeopleTable;
