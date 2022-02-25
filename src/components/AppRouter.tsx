import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PublicRoutes, PrivateRoutes, RouteNames } from "./routeMap";
import AppLayout from "./Layout/Layout";

const AppRouter = () => {
  const auth: boolean = true;
  return auth ? (
    <AppLayout>
      <Routes>
        {PrivateRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}
        <Route path="*" element={<Navigate to={RouteNames.POKEMON_FIGHT} />} />
      </Routes>
    </AppLayout>
  ) : (
    <Routes>
      {PublicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  );
};

export default AppRouter;
