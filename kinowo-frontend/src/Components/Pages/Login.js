import LoginForm from "../Forms/LoginForm";
import Card from "../UI/Card";



const Login = (props) => {
  return (
    <div className="Register grid content-center justify-items-center">
      <Card className="flex flex-wrap">
        <p className="text-2xl text-black font-bold text-center tracking-widest mt-10">
          Zaloguj się na swoje konto
        </p>
        <p className="text-center mt-2 text-pink">
        Witamy na naszej stronie.
        </p>
        <LoginForm />
      </Card>
    </div>
  );
};

export default Login;
