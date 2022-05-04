import { useState, FC } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { RouteNames } from "../routeMap";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { authSlice } from "../../store/reducers/AuthSlice";

const Login: FC = () => {
  const [nameValue, setNameValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const {setAuth, setName} = authSlice.actions

  const login = () => {
    dispatch(setAuth(true))
    localStorage.setItem("name", nameValue);
    dispatch(setName(nameValue))
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={login}
        autoComplete="off"
        style={{ marginTop: "30vh" }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={(e) => setNameValue(e.target.value)} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Link to={RouteNames.POKEMON_FIGHT}>
            <Button type="primary" htmlType="submit" onClick={login}>
              Submit
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
