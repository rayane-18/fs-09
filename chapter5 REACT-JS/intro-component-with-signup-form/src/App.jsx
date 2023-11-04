import { useState } from "react";

const App = () => {
  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [FreeTrial, SetFreeTrial] = useState({});
  const FirstNameChange = (event) => {
    SetFirstName(event.target.value);
  };
  const LastNameChange = (event) => {
    SetLastName(event.target.value);
  };
  const EmailChange = (event) => {
    SetEmail(event.target.value);
  };
  const PasswordChange = (event) => {
    SetPassword(event.target.value);
  };
  const AddFreeTrial = () => {
    SetFreeTrial({
      ...FreeTrial,
      FIRSTNAME: FirstName,
      LASTNAME: LastName,
      EMAIL: Email,
      PASSWORD: Password,
    });
  };
  return (
    <div className="container">
      <div className="Left">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="Right">
        <div className="top">
          <button>Try it free 7 days then $20/mo. thereafter</button>
        </div>
        <div className="Botom">
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={FirstNameChange}
            value={FirstName}
          />

          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={LastNameChange}
            value={LastName}
          />
          <input
            type="email"
            id="email"
            name="email"
            onChange={EmailChange}
            value={Email}
          />
          <input
            type="password"
            id="password"
            name="password"
            onChange={PasswordChange}
            value={Password}
          />
          <button onClick={AddFreeTrial}>Claim your free trial</button>
          <h2>
            By clicking the button, you are agreeing to our Terms and Services
          </h2>
        </div>
      </div>
    </div>
  );
};

export default App;
