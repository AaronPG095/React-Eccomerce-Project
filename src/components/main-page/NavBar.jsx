import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Route, Link, useNavigate } from "react-router-dom";
import { dataContext } from "../../functions/Context";
import { fetchContext } from "../../functions/fetchContext";
import { BiMenuAltLeft } from "../../../node_modules/react-icons/bi";

function NavBar() {
  const { userState, dispatchUserState } = React.useContext(dataContext);
  const basketRef = React.useRef();
  const searchRef = React.useRef("");

  // state for keeping track of searching value
  const [searchState, setSearchState] = React.useState("");
  const { state, dispatch } = React.useContext(fetchContext);

  const navigate = useNavigate();
  // put search value to a state to send it to
  // Context and
  // Product component
  React.useEffect(() => {
    dispatch({ type: "SET_SEARCH_STATE", payload: searchState });
  }, [searchRef.current.value]);

  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll">
          <p>
            <BiMenuAltLeft />
          </p>
        </Navbar.Toggle>
        {/* Home Button */}

        <Navbar.Brand>
          <Link className="nav-list-item" to="/">
            A S K
          </Link>
        </Navbar.Brand>
        <div className="d-flex">
          {/* Products Dropdown */}

          <DropdownButton
            className="drop-down-button"
            id="dropdown-basic-button"
            variant="light"
            size="md"
            title="Products"
          >
            <Dropdown.Item onClick={() => navigate("/Product")}>
              Men's
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/Product")}>
              Women's
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/Product")}>
              Children's
            </Dropdown.Item>
          </DropdownButton>

          {/* User Account */}

          {userState.users[0].isLogin ? (

            <Button variant="light" size="lg">
              <Link className="nav-list-item" to="/userinfo">
                <i className="bi bi-person-check-fill"></i>
              </Link>
            </Button>
          ) : (
            <Link className="nav-list-item" to="/registration">
              <Button variant="light" size="lg">
                <i className="bi bi-person"></i>
              </Button>
            </Link>

            <DropdownButton
              className="drop-down-button"
              id="dropdown-basic-button"
              variant="light"
              size="lg"
              title={<i className="bi bi-person-check-fill"></i>}
            >
              <Dropdown.Item onClick={() => navigate("/userinfo")}>
                Your Account
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/home")}>
                Log Out
              </Dropdown.Item>
            </DropdownButton>
          ) : (
            <DropdownButton
              className="drop-down-button"
              id="dropdown-basic-button"
              variant="light"
              size="lg"
              title={<i className="bi bi-person"></i>}
            >
              <Dropdown.Item onClick={() => navigate("/login")}>
                Login
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/registration")}>
                Register
              </Dropdown.Item>
            </DropdownButton>

          )}

          {/* Shopping Cart */}
          <Link className="nav-list-item" to="/ShoppingCart">
            <Button variant="light">
              <i className="bi bi-basket basket-icon-nav-bar"></i>
              <span
                ref={basketRef}
                className={
                  userState.cart.length !== 0
                    ? "amount_of_products_in_basket "
                    : ""
                }
              >
                {userState.cart.length === 0 ? null : userState.cart.length}
              </span>
            </Button>
          </Link>
        </div>

        {/* Search Bar */}

        <Navbar.Collapse className="hamburger">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              ref={searchRef}
              onChange={(e) => setSearchState(e.target.value)}
            />
            <Button onClick={() => navigate("/Product")} variant="light">
              <i className="bi bi-search"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
