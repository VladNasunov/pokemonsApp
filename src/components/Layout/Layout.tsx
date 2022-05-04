import React, { FC } from "react";
import Layout, { Content } from "antd/lib/layout/layout";
import Header from "./Header";
import Footer from "./Footer";

export type AppLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const AppLayout: FC = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content
        style={{
          padding: "0 50px",
          marginTop: 64,
          minHeight: "80vh",
          overflow: "scroll",
        }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
      <Footer title="Pokemon App ©2022 Created by Vlad Nasunov" />
    </Layout>
  );
};
export default AppLayout;
