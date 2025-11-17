import './style.css'
import Form from '../../components/login-form/Form';
import Logo from '../../components/logo/Logo'

const Auth = ({}) => {

  return (
    <>
      <div className='container'>
        <div className='card-container'>
          <Logo />
          <Form title={"Welcome"} label={"Sign in to your account or create a new one"}/>
        </div>
      </div>
    </>
  )
}

export default Auth
