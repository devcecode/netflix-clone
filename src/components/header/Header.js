import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faSortDown } from "@fortawesome/free-solid-svg-icons";


import {
  HeaderStyled,
  HeaderLeft,
  HeaderLeftLogo,
  HeaderRight,
  HeaderLanguageContainer,
  DropDown,
  DropDownVisible,
  HeaderSignInContainer,
  HeaderSignInButton,
} from "./styles/header";


import logo from '../../images/netflix_logo.png'
const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLeft>
        <HeaderLeftLogo src={logo} />
      </HeaderLeft>
      <HeaderRight>
        <HeaderLanguageContainer>
          <DropDown>
            <DropDownVisible>
              <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff" }} />
              <span style={{ marginLeft: ".2em", color: "#ffffff" }}>
                English
              </span>
              <FontAwesomeIcon
                icon={faSortDown}
                style={{
                  transform: "translateY(-.25em)",
                  color: "#ffffff",
                  margin: "0 .5em",
                }}
              />
            </DropDownVisible>
          </DropDown>
        </HeaderLanguageContainer>
        <HeaderSignInContainer>
          <HeaderSignInButton href="/">Sign In</HeaderSignInButton>
        </HeaderSignInContainer>
      </HeaderRight>
    </HeaderStyled>
  );
}

export default Header
