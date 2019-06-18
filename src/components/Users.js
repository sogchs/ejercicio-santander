import React from 'react';
import UserService from '../services/UserService';
import User from './User';

class Users extends React.Component {
  state = {
    users: [],
    search: ''
  }

  fetchUsers = () => {
    UserService.list().then(response => {
      this.setState({ users: response.data})
    })
  }

  searchUsers = () => {
    UserService.search(this.state.search).then(response => {
      this.setState({ users: response.data })
    })
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    }, () => {
      this.searchUsers()
    })
  }

  componentDidMount() {
    this.fetchUsers()
  }

  render() {
    return (
      <article className="Users">
        <div>
          <input className="form-control mb-3" value={this.state.search} onChange={this.handleChange} placeholder="Buscar usuario por Nombre o Apellido..."/>
        </div>
        <div className="mt-5">
          <p>Listado de todos los Usuarios</p>
        {this.state.users.map(user => <User { ...user } key={user.id}/>)}
        </div>
        
      </article>

      
    );
  }
}

export default Users