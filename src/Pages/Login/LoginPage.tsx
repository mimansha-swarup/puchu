import "./LoginPage.css";
import { BiLogIn, BiShow, BiHide } from "react-icons/bi";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoginCredentialType } from "../../Types";
import { useAuth } from "../../Context";
const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisbility = () =>
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);

  const { LogInUser,  } = useAuth();
  

  
  const handleLoginFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginCredentialType;
    const emailDetails = target.email.value;
    const passwordDetails = target.password.value;

    LogInUser(emailDetails, passwordDetails);
  };
  const handleDefaultLogin = () => {

    LogInUser("test@test.com", "test123");
  };
  return (
    <main className="content">
      <div className="authentication-body flex center">
        <div className="card authentication-container ">
          <h3 className="headline3 bold text-center">
            Login <BiLogIn className="react-icons " />
          </h3>

          <form className="form-group" onSubmit={handleLoginFormSubmit}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                title="your email for eg: neog@neog.com"
                pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$"
              />
            </div>
            <div className="input-group">
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              {isPasswordVisible ? (
                <BiHide
                  onClick={handleTogglePasswordVisbility}
                  className="react-icons password-icon"
                />
              ) : (
                <BiShow
                  onClick={handleTogglePasswordVisbility}
                  className="react-icons password-icon"
                />
              )}
            </div>
            <div className=" flex  space-between">
              <span className="flex ">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </span>
              <Link to="./forgot-password" className="btn btn-text teal">
                Forgot Your Password?
              </Link>
            </div>
            

            <button  onClick={handleDefaultLogin} className="btn btn-text">
              Log In with Test Credential
            </button>
            <button type="submit" className="btn btn-contained">
              LOG IN
            </button>

            <Link to="/signin" className="subtitle1 text-center">
              Create New Account{" "}
              <IoIosArrowDropright className="react-icons " />
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
