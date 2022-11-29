import { Outlet } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

function DefaultTemplate() {
  return (
    <>
      <HeaderComponent />

      <Outlet />

      <FooterComponent />
    </>
  );
}

export default DefaultTemplate;
