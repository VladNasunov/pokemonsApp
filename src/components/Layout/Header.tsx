import React from "react";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { RouteNames } from "../routeMap";

const AppHeader = () => {
  return (
    <>
      <Header
        style={{ position: "fixed", zIndex: 1, width: "100%", height: "11vh" }}
      >
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
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
            <Menu.Item key="3">Logout</Menu.Item>
          </Link>
        </Menu>
      </Header>
    </>
  );
};

export default AppHeader;
