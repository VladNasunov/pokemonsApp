import { useState, FC } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { AuthAction } from "../../redux/actions/AuthAction";
import { Link } from "react-router-dom";
import { RouteNames } from "../routeMap";

const Login: FC = () => {
  const [nameValue, setNameValue] = useState<string>("");
  const dispatch = useDispatch();
  const login = () => {
    dispatch(AuthAction.login());
    dispatch(AuthAction.setUserName(nameValue));
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
