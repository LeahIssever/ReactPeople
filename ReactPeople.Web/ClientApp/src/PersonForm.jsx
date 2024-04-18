import React from 'react'

class PersonForm extends React.Component {
    render () {
        return (
            <div className='row'>
                <div className='col-md-2'>
                    <input type='text' className='form-control' onChange={this.props.onFirstNameTextChange} 
                    value={this.props.currentPerson.firstName} placeholder='First Name'/>
                </div>
                <div className='col-md-2'>
                    <input type='text' className='form-control' onChange={this.props.onLastNameTextBoxChange} 
                    value={this.props.currentPerson.lastName} placeholder='Last Name'/>
                </div>
                <div className='col-md-2'>
                    <input type='text' className='form-control' onChange={this.props.onAgeTextBoxChange} 
                    value={this.props.currentPerson.age} placeholder='Age Name'/>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-primary w-100' onClick={this.props.onAddClick}>Add</button>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-warning' onClick={this.props.onClearClick}>Clear</button>
                </div>
            </div>
        )
    }
}

export default PersonForm;