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
    // alert();
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
          <div>
            <p>Home</p>
          </div>
          <div>
            <p>About</p>
          </div>
          <div>
            <p>Work</p>
          </div>
          <div>
            <p>Contact</p>
          </div>
        </div>
      </div>
    );
  }
}
