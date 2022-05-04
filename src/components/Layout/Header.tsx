import { FC } from "react";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { RouteNames } from "../routeMap";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthAction } from "../../redux/actions/AuthAction";
import { authSlice } from "../../store/reducers/AuthSlice";

const AppHeader: FC = () => {
  const { user_name, auth } = useTypedSelector((store) => store.authReducer);
  const { setAuth } = authSlice.actions;
  const dispatch = useAppDispatch();

  const logout = () => {
    localStorage.clear();
    dispatch(setAuth(false));
  };
  
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
              <Link to={`${RouteNames.CHARTS}`}>
                <Menu.Item key="4">Charts</Menu.Item>
              </Link>
              <Link to={`${RouteNames.LOGIN}`}>
                <Menu.Item key="6" onClick={logout}>
                  Logout
                </Menu.Item>
              </Link>{" "}
              <div style={{ color: "#fff", marginLeft: "10px" }}>
                {user_name}
              </div>
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
