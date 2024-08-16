import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  let navigate = useNavigate()

  /*
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
  */

  return (
    <>
      <div className='w-full bg-red-600 text-white'>
        <div className="container mx-auto flex justify-between text-lg p-4">

          <Link to='/home' className='text-2xl font-bold uppercase'>Far Marcia</Link>
          
          <div className='flex gap-4'>
          <Link to='/Listar' className='text-2xl font-bold uppercase'>Listar</Link>
          <Link to='/Cadastrar' className='text-2xl font-bold uppercase'>Cadastrar</Link>
          <Link to='/Atualizar' className='text-2xl font-bold uppercase'>Atualizar</Link>
          <Link to='/Deletar' className='text-2xl font-bold uppercase'>Deletar</Link>



          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
