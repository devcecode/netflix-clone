import React from 'react'

import {
  StoryCardsAnimationStyled,
  StoryCardsAnimationItem,
  StoryCardsAnimationSubItem,
  StoryCardsAnimationPane,
  StoryCardsAnimationTitle,
  StoryCardsAnimationSubTitle,
  StoryCardsAnimationImage
} from "./styles/storycardsanimation";

import watchtv from '../../images/watch_tv.jpg'
import watch_and_download from "../../images/watch_and_download.jpg";
import watch_on_drive from "../../images/watch_on_drive.jpg";
import kids from "../../images/kids.png";

const StoryCardsAnimation = () => {
  return (
    <StoryCardsAnimationStyled>
      <StoryCardsAnimationItem>
        <StoryCardsAnimationSubItem direction="row">
          <StoryCardsAnimationPane>
            <StoryCardsAnimationTitle>
              Enjoy on your TV.
            </StoryCardsAnimationTitle>
            <StoryCardsAnimationSubTitle>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </StoryCardsAnimationSubTitle>
          </StoryCardsAnimationPane>
          <StoryCardsAnimationPane>
            <StoryCardsAnimationImage src={watchtv} loading="lazy" />
          </StoryCardsAnimationPane>
        </StoryCardsAnimationSubItem>
      </StoryCardsAnimationItem>

      <StoryCardsAnimationItem>
        <StoryCardsAnimationSubItem direction="row-reverse">
          <StoryCardsAnimationPane>
            <StoryCardsAnimationTitle>
              Download your shows to watch offline.
            </StoryCardsAnimationTitle>
            <StoryCardsAnimationSubTitle>
              Save your favorites easily and always have something to watch.
            </StoryCardsAnimationSubTitle>
          </StoryCardsAnimationPane>
          <StoryCardsAnimationPane>
            <StoryCardsAnimationImage src={watch_and_download} loading="lazy" />
          </StoryCardsAnimationPane>
        </StoryCardsAnimationSubItem>
      </StoryCardsAnimationItem>

      <StoryCardsAnimationItem>
        <StoryCardsAnimationSubItem direction="row-reverse">
          <StoryCardsAnimationPane>
            <StoryCardsAnimationTitle>
              Watch everywhere.
            </StoryCardsAnimationTitle>
            <StoryCardsAnimationSubTitle>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </StoryCardsAnimationSubTitle>
          </StoryCardsAnimationPane>
          <StoryCardsAnimationPane>
            <StoryCardsAnimationImage src={watch_on_drive} loading="lazy" />
          </StoryCardsAnimationPane>
        </StoryCardsAnimationSubItem>
      </StoryCardsAnimationItem>

      <StoryCardsAnimationItem>
        <StoryCardsAnimationSubItem direction="row-reverse">
          <StoryCardsAnimationPane>
            <StoryCardsAnimationTitle>
              Create profiles for kids.
            </StoryCardsAnimationTitle>
            <StoryCardsAnimationSubTitle>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </StoryCardsAnimationSubTitle>
          </StoryCardsAnimationPane>
          <StoryCardsAnimationPane>
            <StoryCardsAnimationImage src={kids} loading="lazy" />
          </StoryCardsAnimationPane>
        </StoryCardsAnimationSubItem>
      </StoryCardsAnimationItem>
    </StoryCardsAnimationStyled>
  );
}

export default StoryCardsAnimation
