import styled from 'styled-components'

export const StoryCardsAnimationStyled = styled.div`
`

export const StoryCardsAnimationItem = styled.article`
padding: 2.5em;
border-bottom: 8px solid #222222;
text-align: center;
`

export const StoryCardsAnimationSubItem = styled.div`
max-width: 950px;
margin: 0 auto;

@media(min-width: 760px) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
}
`

export const StoryCardsAnimationPane = styled.div`

`

export const StoryCardsAnimationTitle = styled.h1`
color: #ffffff;
margin-bottom: .5em;
`
export const StoryCardsAnimationSubTitle = styled.h3`
color: #ffffff;
`;
export const StoryCardsAnimationImage = styled.img`
max-width: 100%;
`;