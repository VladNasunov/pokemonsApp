import { FC } from "react";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { RouteNames } from "../routeMap";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { AuthAction } from "../../redux/actions/AuthAction";

const AppHeader: FC = () => {
  const { user_name, auth } = useTypedSelector((store) => store.auth);
  const dispatch = useDispatch();
  const logout = () => dispatch(AuthAction.logout());
  return (
    <>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {auth ? (
            <>
              <Link to={`${RouteNames.POKEMON_FIGHT}`}>
                <Menu.Item key="1">Battle</Menu.Item>
              </Link>
              <Link to={`${RouteNames.POKEMON_LIST}`}>
                <Menu.Item key="2">All Pokemons</Menu.Item>
              </Link>
              <Link to={`${RouteNames.POKEMON_OF_THE_DAY}`}>
                <Menu.Item key="3">Pokemon of the Day</Menu.Item>
              </Link>
              <Link to={`${RouteNames.LOGIN}`}>
                <Menu.Item key="3" onClick={logout}>
                  Logout
                </Menu.Item>
              </Link>{" "}
              {user_name}
            </>
          ) : (
            <></>
          )}
        </Menu>
      </Header>
    </>
  );
};

export default AppHeader;
