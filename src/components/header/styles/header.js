import styled from 'styled-components'

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5em;
  /* background-color: #333333; */
  position: relative;
  z-index: 100;
  max-height: 90px;

  @media (min-width: 550px) {
    padding: 0 2em;
  }
`;

export const HeaderLeft = styled.div`
`

export const HeaderLeftLogo = styled.img`
  width: 120px;
  @media (min-width: 550px) {
    width: 150px;
  }

  @media (min-width: 960px) {
    width: 170px;
  }

  @media (min-width: 1400px) {
    width: 200px;
  }
`;



export const HeaderRight = styled.div`
display: flex;
align-items: center;
margin-right: 1em;
`

export const HeaderLanguageContainer = styled.div`

`

export const DropDown = styled.div`

`

export const DropDownVisible = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: .2em .5em;
border-radius: .1em;
border: 1px solid #aaaaaa;
@media(min-width: 760px) {
  height: 35px;
  padding: 0 .5em;
}
`

export const HeaderSignInContainer = styled.div`
margin-left: 1em;
@media(min-width: 1100px) {
  margin-left: 2em;
}
`

export const HeaderSignInButton = styled.a`
  background-color: #ff0016;
  border-radius: 0.2em;
  padding: 0.3em 0.6em;
  text-decoration: none;
  color: #ffffff;
  font-size: 0.9em;
  display: block;
  @media (min-width: 760px) {
    font-size: 1em;
    min-width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
  }
`;