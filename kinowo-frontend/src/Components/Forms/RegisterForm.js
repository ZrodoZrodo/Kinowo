import API from "../../env";
import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";
import Submit from "./Submit";
const RegisterForm = (props) => {
  const navigate = useNavigate();
  async function Register(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    try {
      const response = await fetch(`${API}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formdata.get("name").valueOf(),
          lastName: formdata.get("lastName").valueOf(),
          email: formdata.get("email").valueOf(),
          password: formdata.get("password").valueOf(),
        }),
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={Register} className="flex flex-col ml-8 mt-4">
      <InputForm label={"Twoje imie"} name="name" />
      <InputForm label={"Twoje nazwisko"} name="lastName" />
      <InputForm label={"Twoj email"} name="email" />
      <InputForm label={"Hasło"} type="password" name="password" />
      <div className="flex flex-nowrap w-3/4">
        <input
          type="checkbox"
          className="checkbox checkbox-secondary border-1 border-solid border-pink mt-6"
          required
        />
        <p className="mt-6 ml-2 font-semibold text-black text-left">
          Zapoznałem się z Polityką prywatności i akceptuje umowę członkowska
        </p>
      </div>
      <div className="self-center mt-4 mb-8 mr-8">
        <Submit>Zarejestruj się!</Submit>
      </div>
    </form>
  );
};

export default RegisterForm;
