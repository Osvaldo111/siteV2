import React from "react";
import "../style/navbar.css";
import menuBttn from "../icons/menu-bttn.svg";
import exitBttn from "../icons/exit-icon.svg";
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      changeWidth: "",
      displayBttn: ""
    };
  }

  componentDidMount() {
    console.log("My REF: ", this.myRef.current);
  }
  displayMobileMenu = () => {
    this.setState({ changeWidth: "100%" });
    this.setState({ displayBttn: "none" });
  };

  closeMobileMenu = () => {
    this.setState({ changeWidth: "0%" });
    this.setState({ displayBttn: "flex" });
  };

  render() {
    return (
      <div className="navbarContainer" ref={this.myRef}>
        <div className="iconWrapper">
          <img
            src={menuBttn}
            alt=""
            className="menuBttn"
            onClick={this.displayMobileMenu}
            style={{ display: this.state.displayBttn }}
          />
        </div>
        <div
          className="navBarTopMenu"
          style={{ width: this.state.changeWidth }}
        >
          <div className="exitBttnContainer">
            <img src={exitBttn} alt="" onClick={this.closeMobileMenu} />
          </div>
          <div className="navBarLink">
            <a href="#about">About</a>
          </div>
          <div className="navBarLink">
            <a href="#links">Links</a>
          </div>
          <div className="navBarLink">
            <a href="#work">Work</a>
          </div>
          <div className="navBarLink">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    );
  }
}
