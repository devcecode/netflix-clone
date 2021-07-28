import styled from 'styled-components'

export const StoryCardsStyled = styled.div`
  height: 445px;
  padding: 1.5em 0;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 8px solid #222222;

  @media (min-width: 550px) {
    height: 635px;
  }

  @media (min-width: 1100px) {
    height: 665px;
  }
`;

export const StoryCardsBack = styled.div`
width: 100%;
height: calc(100% + 100px);
position: absolute;
top: -100px;
z-index: 0;

&:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  /* background-image: linear-gradient(rgba(0,0,0,.8), transparent); */
}
`

export const StoryCardsBackShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  background: linear-gradient(180deg,rgba(0, 0, 0, 0.85) 0%,rgba(0, 0, 0, 0.3) 50%,rgba(0, 0, 0, 0.90) 100%);
`;

export const StoryCardsText = styled.div`
  padding: 1.5em;
  position: relative;
  /* background-color: tomato; */
  z-index: 1;
  max-width: 950px;
  @media (min-width: 550px) {
    padding: 2em;
  }
`;

export const StoryCardsTextTitle = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: 1.7em;
  margin-bottom: 0.5em;
  line-height: 1em;

  @media (min-width: 760px) {
    padding: 0 1em;
    font-size: 4em;
  }

  @media (min-width: 960px) {
    padding: 0 2em;
    font-size: 4em;
  }
`;

export const StoryCardsTextSubTitle = styled.h4`
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  font-size: 1.2em;
  margin-bottom: 0.6em;
  @media (min-width: 1100px) {
    margin-bottom: 1em;
    /* font-size: 1.5em; */
    padding: 0 3em;
  }
`;

export const StoryCardsTextSubTitleSpan = styled.span`
display: block;
margin-bottom: 1em;

@media(min-width: 550px) {
  font-size: 1.3em;
}
`

export const StoryCardsTextGetStarted = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 0em;
  max-width: 870px;
  margin: 0 auto;

  @media (min-width: 960px) {
    padding: 0 4em;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

export const StoryCardsTextGetStartedInput = styled.input`
  display: block;
  width: 100%;
  margin: 0 auto;
  border-radius: 0.2em;
  margin-bottom: 1em;
  border: none;
  height: 45px;
  padding: 0 1.2em;
  max-width: 600px;
  
  @media (min-width: 1100px) {
    height: 65px;
    margin-bottom: 0;
    border-top-left-radius: .2em;
    border-bottom-left-radius: .2em;
    border-top-right-radius: 0em;
    border-bottom-right-radius: 0em;
  }
`;

export const StoryCardsTextGetStartedButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 1em;
  height: 45px;
  border-radius: 0.2em;
  border: none;
  color: #ffffff;
  background-color: #ff0014;
  font-size: 1em;
  cursor: pointer;
  
  @media (min-width: 1100px) {
    height: 65px;
    justify-content: center;
    font-size: 1.8em;
    min-width: 250px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.2em;
    border-bottom-right-radius: 0.2em;
  }
`;