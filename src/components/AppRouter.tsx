import { Routes, Route, Navigate } from "react-router-dom";
import { PublicRoutes, PrivateRoutes, RouteNames } from "./routeMap";
import AppLayout from "./Layout/Layout";
import { useTypedSelector, useAppDispatch } from "../hooks/useTypedSelector";
import { authSlice } from "../store/reducers/AuthSlice";
import { useLayoutEffect } from "react";

const AppRouter = () => {
  const { auth } = useTypedSelector((store) => store.authReducer);
  const dispatch = useAppDispatch();
  const { setAuth, setName } = authSlice.actions;

  useLayoutEffect(() => {
    const userName = localStorage.getItem("name");
    if (userName) {
      dispatch(setAuth(true));
      dispatch(setName(userName));
    }
  }, []);

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
          {/* <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} /> */}
          <Route
            path="*"
            element={<Navigate to={RouteNames.POKEMON_LIST} />}
          />
        </Routes>
      )}
    </AppLayout>
  );
};

export default AppRouter;
