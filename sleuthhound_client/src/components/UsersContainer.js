import { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/usersActions'

import UserForm from './UserForm'


class UsersContainer extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }
    render() {
        return(
        <div>Users
            <UserForm />
        </div>
        
        );
    }
}

export default connect(null , { fetchUsers })(UsersContainer);