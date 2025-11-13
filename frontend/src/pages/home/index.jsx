import './style.css'
import Trash from '../../assets/delete.png'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'

function Home() {

  const[users, setUsers] = useState([])

  const inputName = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()

  async function getUsers(){
    const res = await api.get('/user')

    setUsers(res.data)
  }

  async function createUser(){
    await api.post('/user', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value
    })
  }

  async function deleteUser(id){
    await api.delete(`/user/${id}`)
  }

  useEffect(() => {
    getUsers()
  })

  return (
    <>
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input name="name" type='text' placeholder='Nome' ref={inputName}/>
          <input name="email" type='email' placeholder='E-mail' ref={inputEmail}/>
          <input name="password" type='password' placeholder='Senha' ref={inputPassword}/>
          <button type='button' onClick={createUser}>Cadastrar</button>
        </form>

        {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Id: <span>{user.id}</span></p>
            <p>Name: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUser(user.id)}><img src={Trash}></img></button>
        </div>
        ))}
      </div>
    </>
  )
}

export default Home
