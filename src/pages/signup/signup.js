import React from "react";
import "./signup.css";
import loginimage from '../../assets/imageslogin.jpeg';

export default function Login() {
  return (
    <div className="login-container">
        <section className="login-content">
        <div className="login-image">
            
        <img src={loginimage} alt="foto" width='100%' height='100%' />

        </div>
    <form className="login_form">
      
      <div class="login">
        <h2>Login</h2>

        <input type="text" name="u" placeholder="email" required="required" />
        <input
          type="password"
          name="p"
          placeholder="Password"
          required="required"
        />
        <button type="submit" class="btn btn-primary btn-block btn-large">
          Login
        </button>
      </div>
    </form>
    </section>
    </div>
  );
}


















// import React from "react";
// import "./signup.css";
// import table from '../../assets/orangeball.jpeg';

// const SignInSignUpForm = () => {
//   return (
//     <div className="container">
//       <div className="forms-container">
//         <div className="signin-signup">
//           <form action="#" className="sign-in-form">
//             <h2 className="titlesignup22">Sign in</h2>
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" />
//             </div>
//             <input type="submit" value="Login" className="btn solid" />
//           </form>
//           <form action="#" className="sign-up-form">
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-envelope"></i>
//               <input type="email" placeholder="Email" />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" />
//             </div>
//             <input type="submit" className="btn" value="Sign up" />
//           </form>
//         </div>
//       </div>
//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>New here?</h3>
//             <span className="signupdescrip">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
//               ex ratione. Aliquid!
//             </span>
//             <button className="btn transparent" id="sign-up-btn">
//               Sign up
//             </button>
//           </div>
//           <img src="img/log.svg" className={table} alt="" />
//         </div>
//         <div className="panel right-panel">
//           <div className="content">            <h3>One of us?</h3>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//               laboriosam ad deleniti.
//             </p>
//             <button className="btn transparent" id="sign-in-btn">
//               Sign in
//             </button>
//           </div>
//           <img src="img/register.svg" className="image" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInSignUpForm;