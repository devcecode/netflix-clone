import styled from 'styled-components'

export const StoryCardsAnimationStyled = styled.div`
`

export const StoryCardsAnimationItem = styled.article`
padding: 2.5em;
border-bottom: 8px solid #222222;
text-align: center;

@media(min-width: 760px) {
  padding: 5em 2.5em;
  text-align: left;
}
`

export const StoryCardsAnimationSubItem = styled.div`
max-width: 1100px;
margin: 0 auto;

@media(min-width: 760px) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
}
`

export const StoryCardsAnimationPane = styled.div`
  @media (min-width: 760px) {
    width: 50%;
  }
`;

export const StoryCardsAnimationTitle = styled.h1`
color: #ffffff;
margin-bottom: .5em;

@media(min-width: 760px) {
  font-size: 3em;
}
`
export const StoryCardsAnimationSubTitle = styled.h3`
  color: #ffffff;
  font-weight: 400;
  max-width: 100%;
  @media (min-width: 760px) {
    font-size: 1.6em;
  }
`;
export const StoryCardsAnimationImage = styled.img`
  max-width: 100%;
  @media (min-width: 760px) {
    max-width: calc(100% - 100px);
    margin-left: ${({ left }) => left};
    margin-right: ${({ right }) => right};
  }
`;