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

const data = [
  {
    title: "Enjoy on your TV.",
    subtitle:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    image: watchtv,
    direction: "row",
  },
  {
    title: "Download your shows to watch offline.",
    subtitle: "Save your favorites easily and always have something to watch.",
    image: watch_and_download,
    direction: "row-reverse",
  },
  {
    title: "Watch everywhere.",
    subtitle:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
    image: watch_on_drive,
    direction: "row",
  },
  {
    title: "Create profiles for kids.",
    subtitle:
      "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    image: kids,
    direction: "row-reverse",
  },
];

const StoryCardsAnimation = () => {
  return (
    <StoryCardsAnimationStyled>
      {
        data.map((d, index) => {
          return (
            <StoryCardsAnimationItem>
              <StoryCardsAnimationSubItem direction={d.direction}>
                <StoryCardsAnimationPane>
                  <StoryCardsAnimationTitle>
                    {d.title}
                  </StoryCardsAnimationTitle>
                  <StoryCardsAnimationSubTitle>
                    {d.subtitle}
                  </StoryCardsAnimationSubTitle>
                </StoryCardsAnimationPane>
                <StoryCardsAnimationPane>
                  <StoryCardsAnimationImage src={d.image} loading="lazy" />
                </StoryCardsAnimationPane>
              </StoryCardsAnimationSubItem>
            </StoryCardsAnimationItem>
          );
        })
      }
    </StoryCardsAnimationStyled>
  );
}

export default StoryCardsAnimation
