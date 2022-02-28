import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PublicRoutes, PrivateRoutes, RouteNames } from "./routeMap";
import AppLayout from "./Layout/Layout";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter = () => {
  const { auth } = useTypedSelector((store) => store.auth);
  return (
    <AppLayout>
      {auth ? (
        <Routes>
          {PrivateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          <Route
            path="*"
            element={<Navigate to={RouteNames.POKEMON_FIGHT} />}
          />
        </Routes>
      ) : (
        <Routes>
          {PublicRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
        </Routes>
      )}
    </AppLayout>
  );
};

export default AppRouter;
