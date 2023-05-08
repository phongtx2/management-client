import { Layout } from "antd";
import "../App.css";
import logo from "../logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";
export const Header = () => {
  return (
    <Layout.Header
      style={{
        lineHeight: "0px",
        height: "100px",
        position: "fixed",
        zIndex: 1,
        width: "100%",
        background: "rgba(255,176,81,1)",
        display: "flex",
        alignItems: "center",
      }}>
      <a href="/" className="nav-logo">
        <img src={logo} alt="logo" height="80px" />
      </a>
      <a
        href="https://www.facebook.com/duyensk15nbk"
        target="_blank"
        rel="noreferrer"
        className="fa-logo">
        <img src={facebook} alt="logo" height="80px" />
      </a>
      <a
        href="https://www.instagram.com/_souris20s/"
        target="_blank"
        className="in-logo"
        rel="noreferrer">
        <img src={instagram} alt="logo" height="63px" />
      </a>
      <a
        href="https://mail.google.com/mail/"
        target="_blank"
        className="gm-logo"
        rel="noreferrer">
        <img src={gmail} alt="logo" height="63px" />
      </a>
    </Layout.Header>
  );
};
