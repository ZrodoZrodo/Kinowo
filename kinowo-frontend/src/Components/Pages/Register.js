import RegisterForm from "../Forms/RegisterForm";
import Card from "../UI/Card";

const Register = (props) => {
  return (
    <div className="Register grid content-center justify-items-center">
      <Card className="flex flex-wrap">
        <p className="text-2xl text-black font-bold text-center tracking-widest mt-10">
          Stwórz swoje konto!
        </p>
        <p className="text-center mt-2 text-pink">
          Stwórz z nami konto, żebyś mógł w pełni skorzystać z naszego serwisu!
        </p>
        <RegisterForm />
      </Card>
    </div>
  );
};

export default Register;
