import React from "react";
import "../style/mainPage.css";
import "particles.js";
import jsonPathParticles from "../particles.json";
import NavBar from "../components/navBar";
import iconJS from "../icons/javascript-icon.svg";
import iconGit from "../icons/github-icon.svg";
import iconHeroku from "../icons/heroku-icon.svg";
import iconnLinkedin from "../icons/linkedin.svg";
import iconMysql from "../icons/mysql-icon.svg";
import iconNode from "../icons/node-icon.svg";
import iconPhp from "../icons/php-icon.svg";
import iconPsql from "../icons/postgresql-icon.svg";
import iconPython from "../icons/python-icon.svg";
import iconReact from "../icons/react-icon.svg";
import iconXD from "../icons/xd-icon.svg";
import iconCss from "../icons/css-icon.svg";
import downArrow from "../icons/arrow-down.svg";
import floppyerIcon from "../images/floppy-icon.svg";
import floppyerProject from "../images/safari-floppyer.svg";
import mailIcon from "../images/mail.svg";

export default class MainPage extends React.Component {
  loadParticles = () => {
    window.particlesJS("particles-js", jsonPathParticles);
  };

  componentDidMount() {
    this.loadParticles();
  }

  render() {
    return (
      <div className="pageContainer">
        <div className="top-container">
          <div id="particles-js" className="particlesContainer"></div>
          <div className="introContainer">
            <div className="introTop">
              <h2>Hi, I'm Osvaldo</h2>
              <h1>I build things for the web</h1>
              <h3>
                I'm a Software Engineer who loves building digital products
              </h3>
            </div>
          </div>
          <div className="mainPageNavBar">
            <NavBar />
          </div>
          <div className="arrowDown">
            <a href="#work">
              <p>See Work</p>
              <img src={downArrow} alt="" />
            </a>
          </div>
        </div>
        <div className="aboutContainer" id="about">
          <h1>About</h1>
          <p>
            I strive to create elegant solutions that surprise and delight users
            while keeping complex technical dependencies in mind for
            implementation, scalability and developer sanity.
          </p>
        </div>
        <div className="skillsContainer">
          <h1>Stack Technologies</h1>
          <p>
            I strive to create elegant solutions that surprise and delight users
            while keeping complex technical dependencies in mind for
            implementation, scalability and developer sanity.
          </p>
          <div className="stackImages">
            <img src={iconJS} alt="" />
            <img src={iconNode} alt="" />
            <img src={iconHeroku} alt="" />
            <img src={iconXD} alt="" />
            <img src={iconPython} alt="" />
            <img src={iconCss} alt="" />
            <img src={iconMysql} alt="" />
            <img src={iconReact} alt="" />
            <img src={iconPhp} alt="" />
            <img src={iconPsql} alt="" />
          </div>
        </div>
        <div className="linksContainer" id="links">
          <h1>Links</h1>
          <div className="linksImages">
            <a
              href="https://www.linkedin.com/in/osvaldo-carrillo/"
              target="_blank"
            >
              <img src={iconnLinkedin} alt="" />
            </a>
            <a href="https://github.com/Osvaldo111" target="_blank">
              <img src={iconGit} alt="" />
            </a>
          </div>
        </div>
        <div className="workContainer" id="work">
          <h1>Work</h1>
          <div className="workSection">
            <div className="workContaDesc">
              <div className="workProject">
                <img src={floppyerIcon} alt="" />
                <h2>Sound Canvas</h2>
              </div>
              <div className="projectDesc">
                <p>
                  A web application for designing paintings according to sound
                  frequencies provided by the user, which can be customized with
                  the many features of the app.
                </p>
              </div>
              <div className="techContainer">
                <h2>Technology</h2>
                <p>
                  SoundCanvas is a Node.js application living in Heroku. The
                  front-end implements React JS with Redux. The back-end
                  implements Node.js/Express/PostgreSQL to request data from the
                  server.
                </p>
              </div>
              <div className="appBttnContainer">
                <a
                  className="appBttn"
                  href="https://www.floppyer.com/"
                  target="_blank"
                >
                  Go to App
                </a>
              </div>
            </div>
            <div className="floppyerContainer">
              <img src={floppyerProject} alt="" />
            </div>
          </div>
          <div className="workSection">
            <div className="workContaDesc">
              <div className="workProject">
                <img src={floppyerIcon} alt="" />
                <h2>Floppyer</h2>
              </div>
              <div className="projectDesc">
                <p>
                  A web application for people in the tech industry looking for
                  a remote job.
                </p>
              </div>
              <div className="techContainer">
                <h2>Technology</h2>
                <p>
                  Floppyer is a Node js app living in Heroku. The front-end
                  implements React JS for easy page manipulation. The backend
                  implements Express/Node.js to requests the data from the
                  server.
                </p>
              </div>
              <div className="appBttnContainer">
                <a
                  className="appBttn"
                  href="https://www.floppyer.com/"
                  target="_blank"
                >
                  Go to App
                </a>
              </div>
            </div>
            <div className="floppyerContainer">
              <img src={floppyerProject} alt="" />
            </div>
          </div>
          <div className="workSection">
            <div className="workContaDesc">
              <div className="workProject">
                <img src={floppyerIcon} alt="" />
                <h2>CryptoList</h2>
              </div>
              <div className="projectDesc">
                <p>
                  A web application for people with interest in consulting the
                  current market price and financial information of the top 100
                  cryptocurrencies
                </p>
              </div>
              <div className="techContainer">
                <h2>Technology</h2>
                <p>
                  CryptoList was made with plain JavaScript vanilla and AJAX.
                  This app uses the CoinGecko API to gather the data of the
                  cryptocurrencies. The app is living in Github Pages.
                </p>
              </div>
              <div className="appBttnContainer">
                <a
                  className="appBttn"
                  href="https://www.floppyer.com/"
                  target="_blank"
                >
                  Go to App
                </a>
              </div>
            </div>
            <div className="floppyerContainer">
              <img src={floppyerProject} alt="" />
            </div>
          </div>
          <div className="workSection">
            <div className="workContaDesc">
              <div className="workProject">
                <img src={floppyerIcon} alt="" />
                <h2>Sorting Visualizer</h2>
              </div>
              <div className="projectDesc">
                <p>
                  A web application for people with interest in consulting the
                  current market price and financial information of the top 100
                  cryptocurrencies
                </p>
              </div>
              <div className="techContainer">
                <h2>Technology</h2>
                <p>
                  This app was designed with Javascript vanilla. In this
                  application, there are two algorithms used which are "Quick
                  Sort" and "Bubble Sort". The purpose of the application is to
                  visually demonstrate how these two algorithms work
                  respectively.
                </p>
              </div>
              <div className="appBttnContainer">
                <a
                  className="appBttn"
                  href="https://www.floppyer.com/"
                  target="_blank"
                >
                  Go to App
                </a>
              </div>
            </div>
            <div className="floppyerContainer">
              <img src={floppyerProject} alt="" />
            </div>
          </div>
        </div>
        <div className="contactContainer" id="contact">
          <h3>I'm available for work, get in touch</h3>
          <a className="contactMail" href="mailto:osvaldofabricio11@gmail.com">
            <img src={mailIcon} alt="" />
            <p>osvaldofabricio11@gmail.com</p>
          </a>
        </div>
      </div>
    );
  }
}
