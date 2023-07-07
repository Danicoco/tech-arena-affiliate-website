import LoginForm from '../components/forms/LoginForm';

const Login = () => {
  return (
    <div className='grid place-items-center w-screen h-screen'>
        <div className='shadow-xl p-3 rounded-xl sm:w-[350px] bg-white'>
            <LoginForm />
        </div>
    </div>
  )
}

export default Login;
