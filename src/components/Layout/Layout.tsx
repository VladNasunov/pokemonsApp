import React from "react";
import Layout, { Content } from "antd/lib/layout/layout";
import Header from "./Header";
import Footer from "./Footer";

export type AppLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const AppLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 64,
          background: "#FF0000",
          height: "80vh",
        }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
export default AppLayout;
