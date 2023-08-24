// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_register_form

import React from 'react';

function Login() {
  return (
    <div className="login ">
      <div className="container text-center py-4">
        <div className="row ">
          <div className="col mx-auto">
            <main className="form-signin w-100 m-auto">
              <form>
                <img
                  className="mb-4"
                  src="https://picsum.photos/200"
                  alt=""
                  width="72"
                  height="57"
                />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    fdprocessedid="aywbcj"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    fdprocessedid="ks8z3f"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div className="form-check text-start my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="remember-me"
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <button
                  className="btn btn-primary w-100 py-2"
                  type="submit"
                  fdprocessedid="vcltxg"
                >
                  Sign in
                </button>
                <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
