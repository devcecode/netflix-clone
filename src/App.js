import React from 'react'
import styled from 'styled-components'

// Components

import Header from './components/header/Header'
import StoryCards from './components/story-cards/StoryCards'

import StoryCardsAnimation from './components/storycardsanimation/StoryCardsAnimation'

import Accordion from './components/Accordion/Accordion'

const AppStyled = styled.div``;
const App = () => {
  return (
    <AppStyled>
      <Header />
      <StoryCards />
      <StoryCardsAnimation />
      <Accordion />
    </AppStyled>
  )
}

export default App
