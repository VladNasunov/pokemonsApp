import { FC } from "react";
import { Footer } from "antd/lib/layout/layout";

export type AppFooterProps = {
  title: string;
};

const AppFooter: FC<AppFooterProps> = ({ title }) => {
  return <Footer style={{ textAlign: "center" }}>{title}</Footer>;
};

export default AppFooter;
