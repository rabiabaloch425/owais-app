import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const NavbarPage = () => {
  const [menuItems, setMenuItems] = useState([
    {
      menu: "أخبار صناديقنا",
      link: "#action1",
    },
    {
      menu: "مركز المساعدة",
      link: "#action2",
    },
    {
      menu: "الفرص الاستثمارية",
      link: "action",
    },
    {
      menu: "اضف فرصتك",
      link: "action",
    },
    {
      menu: "استثمر",
      link: "action",
    },
  ]);
  return (
    <>
      <Navbar className="navbar-bg ms-auto" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Brand href="#" className="sm:block md:hidden">
            <img
              src="../../public/assets/images/logo.png"
              alt="owais logo"
              width={"75px"}
            />
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 gap-7"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="flex text-white">
                <img
                  src="../../public/assets/images/drop-down.png"
                  alt="drop-down"
                  className="h-[20px] mr-[10px] w-[20px] mt-[3px]"
                />
                العربية
              </Nav.Link>

              <button className="text-white bg-[#03989E] border-[1px] border-[#03989E] sm:text-[10px] md:text-[14px] w-[150px]  py-[10px] sm:rounded-[3px] md:rounded-[12px]">
                التسجيل
              </button>
              <button className="text-white bg-transparent border-[1px] border-[#fff] sm:text-[10px] md:text-[14px] w-[150px]  py-[10px] sm:rounded-[3px] md:rounded-[12px]">
                تسجيل الدخول
              </button>
            </Nav>
            <Nav
              className="me-auto my-2 my-lg-0 gap-3"
              style={{ maxHeight: "500px" }}
              navbarScroll
            >
              <Nav.Link
                href="#action1"
                className="flex text-white font-light underline underline-offset-8"
              >
                أخبار صناديقنا
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="text-white font-light underline underline-offset-8"
              >
                مركز المساعدة
              </Nav.Link>

              <Nav.Link
                href="#"
                className="text-white font-light underline underline-offset-8"
              >
                الفرص الاستثمارية
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-white font-light underline underline-offset-8"
              >
                اضف فرصتك
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-white font-light underline underline-offset-8"
              >
                استثمر{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#" className="sm:hidden md:block">
            <img
              src="../../public/assets/images/logo.png"
              alt="owais logo"
              width={"75px"}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
