import React from 'react'

import {
  StoryCardsStyled,
  StoryCardsBack,
  StoryCardsBackShadow,
  StoryCardsText,
  StoryCardsTextTitle,
  StoryCardsTextSubTitle,
  StoryCardsTextSubTitleSpan,
  StoryCardsTextGetStarted,
  StoryCardsTextGetStartedInput,
  StoryCardsTextGetStartedButton,
} from "./styles/storycards";

import back from '../../images/back.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const StoryCards = () => {
  return (
    <StoryCardsStyled>
      <StoryCardsBack>
        <img
          src={back}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <StoryCardsBackShadow />
      </StoryCardsBack>
      <StoryCardsText>
        <StoryCardsTextTitle>
          Unlimited movies, TV shows, and more.
        </StoryCardsTextTitle>
        <StoryCardsTextSubTitle>
          <StoryCardsTextSubTitleSpan>
            Watch anywhere. Cancel anytime.
          </StoryCardsTextSubTitleSpan>
          Ready to watch? Enter your email to create or restart your membership.
        </StoryCardsTextSubTitle>
        <StoryCardsTextGetStarted>
          <StoryCardsTextGetStartedInput placeholder="Email addres" />
          <StoryCardsTextGetStartedButton>
            Get Started
            <FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '.5em'}}/>
          </StoryCardsTextGetStartedButton>
        </StoryCardsTextGetStarted>
      </StoryCardsText>
    </StoryCardsStyled>
  );
}

export default StoryCards
