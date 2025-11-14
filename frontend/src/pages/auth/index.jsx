import './style.css'
import Card from '../../components/card/Card';
import Logo from '../../components/logo/Logo'

function Auth() {

  return (
    <>
      <div className='container'>
        <Logo />
        <Card title={"Welcome"} label={"Sign in to your account or create a new one"}/>
      </div>
    </>
  )
}

export default Auth
