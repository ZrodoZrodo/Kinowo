import InputForm from "./InputForm";
import { useContext} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Submit from "./Submit";
import UserContext from "../../UserContext";
import Cookies from "universal-cookie";
import API from "../../env";
import { useCookies } from 'react-cookie';

const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const {role}=useParams();
  const navigate = useNavigate();
  const [cookies, setCookie,removeCookie] = useCookies(['UserData','Token']);
  async function Login(e) {
    e.preventDefault();
    const setCookies = new Cookies();
    const formData = new FormData(e.target);
    try {
      const response = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
          username: formData.get("email").valueOf()+`:${role}`,
          password: formData.get("password").valueOf()
        }),
      });
      const { user, token } = await response.json();
      const cookieNames = Object.keys(cookies);
      cookieNames.forEach((name) => {
        removeCookie(name);
      });
      if(user&&token) {
        console.log(token)
        removeCookie('Token')
        console.log(cookies.Token)
        setCookie('Token',token)
        setCookie('UserData',user)
        setCookie('Token',token)
        navigate("/dashboard");
        console.log(cookies.Token)
      }
    } catch (error) {
      console.error(error);
    }
  
  }

  return (
    <form onSubmit={Login}className="flex flex-col ml-8 mt-4">

      <InputForm label={"Twoj email"} name="email" />
      <InputForm label={"Hasło"} type="password" name="password" />
      <div className="flex flex-nowrap w-3/4"></div>
      <div className="self-center mt-4 mb-8 mr-8">
        <Submit>Zaloguj się!</Submit>
      </div>
    </form>
  );
};

export default LoginForm;
