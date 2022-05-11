import "../Login/LoginPage.css";
import { BiUserPlus, BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";


import { SigninCredentialType } from "../../Types/Auth/Auth";
import { useAuth } from '../../Context/authContext';


const SigninPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<{
    password: boolean;
    confirmPassword: boolean;
  }>({
    password: false,
    confirmPassword: false,
  });
  
  const { SignInUser } = useAuth();
  console.log(useAuth())
  const handleTogglePasswordVisbility = (key: keyof typeof isPasswordVisible) =>
    setIsPasswordVisible({
      ...isPasswordVisible,
      [key]: !isPasswordVisible[key],
    });

    
  const HandleLoginFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("worked");
    const target = event.target as typeof event.target & SigninCredentialType;
    const fNameDetails = target.fName.value;
    const emailDetails = target.email.value;
    const passwordDetails = target.password.value;
    const confirmPasswordDetails = target.confirmPassword.value;
    if (passwordDetails === confirmPasswordDetails) {
      SignInUser(fNameDetails, emailDetails, passwordDetails, );
    } else {
      //  ?TODO
      console.error("diffrent password")
    }
  };
  return (
    <main className="content">
      <div className="authentication-body flex center">
        <div className="card authentication-container ">
          <h3 className="headline3 bold text-center">
            Signup <BiUserPlus className="react-icons " />
          </h3>
          <form className="form-group" onSubmit={HandleLoginFormSubmit}>
            <div className="flex space-between">
              <div className="input-group">
                <input
                  type="fName"
                  name="fName"
                  id="fName"
                  required
                  placeholder="First Name"
                  title="eg: Jhon"
                />
              </div>
              <div className="input-group">
                <input
                  type="lName"
                  name="lName"
                  id="lName"
                  required
                  placeholder="Last Name"
                  title="eg: Doe"
                />
              </div>
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                title="your email for eg: neog@neog.com"
                pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$"
              />
            </div>
            <div className="input-group">
              <input
                required
                type={isPasswordVisible.password ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                title="must contains one digit, Lower-case and Upper-case characters, one special character, minimum  length of 8 characters"
              />
              {isPasswordVisible.password ? (
                <BiHide
                  onClick={() => handleTogglePasswordVisbility("password")}
                  className="react-icons password-icon"
                />
              ) : (
                <BiShow
                  onClick={() => handleTogglePasswordVisbility("password")}
                  className="react-icons password-icon"
                />
              )}
            </div>
            <div className="input-group">
              <input
                required
                type={isPasswordVisible.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                title="must simmilar to password"
              />
              {isPasswordVisible.confirmPassword ? (
                <BiHide
                  onClick={() =>
                    handleTogglePasswordVisbility("confirmPassword")
                  }
                  className="react-icons password-icon"
                />
              ) : (
                <BiShow
                  onClick={() =>
                    handleTogglePasswordVisbility("confirmPassword")
                  }
                  className="react-icons password-icon"
                />
              )}
            </div>

            <button type="submit" className="btn btn-contained ">
              SIGN UP
            </button>
            <Link to="/Login" className="subtitle1 text-center">
              Already Have Account ?
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SigninPage;
