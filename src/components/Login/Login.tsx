import React, { useState } from "react";
import { Input } from "antd";
const Login: React.FC = () => {
  const [loginValue, setLoginValue] = useState<string>("");
  return (
    <>
      Login
      <Input
        type="text"
        placeholder="Please Enter Login"
        value={loginValue}
        onChange={(e) => setLoginValue(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Please Enter Password"
        value={loginValue}
      />
      <button>Login</button>
    </>
  );
};
export default Login;
