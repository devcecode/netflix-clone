import React, { useState } from 'react'


import {
  AccordionStyled,
  AccordionTitle,
  AccordionItem,
  AccordionHeader,
  AccordionQuestion,
  AccordionBody,
  AccordionAnswer
} from "./styles/accordion";

const data = [
  {
    question: "What is Netflix",
    answer: [
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    ]
  },
  {
    question: "How much does Netflix cost?",
    answer: [
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from PEN24.90 to PEN44.90 a month. No extra costs, no contracts."
    ]
  },
  {
    question: "Where can I Watch?",
    answer: [
      "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    ]
  },
  {
    question: "How do I Cancel?",
    answer: [
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    ]
  },
  {
    question: "What can I watch on Netflix?",
    answer: [
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    ]
  },
  {
    question: "Is Netflix good for kids?",
    answer: [
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    ]
  }
];

const Accordion = () => {

  const [ activeElement, setActiveElement ] = useState(null)

  const toggleContent = (index) => {
    if(activeElement === index) {
      return setActiveElement(null);
    }

    setActiveElement(index)
  }
  return (
    <AccordionStyled>
      <AccordionTitle>Frequently Asked Questions</AccordionTitle>
      {
        data.map((currentData, index) => {
          return (
            <AccordionItem>
              <AccordionHeader onClick={(e) => toggleContent(index)}>
                <AccordionQuestion>{currentData.question}</AccordionQuestion>
                <span style={{ color: "#ffffff", fontSize: "2em" }}>
                  {activeElement == index ? 'x' : '+'}
                </span>
              </AccordionHeader>
              <AccordionBody
                style={
                  activeElement === index
                    ? { maxHeight: "999px", height: "auto", padding: '1em', transition: 'all .5s cubic-bezier(0,1,0,1)'}
                    : { maxHeight: "0", overflow: "hidden", padding: '0', transition: 'all .5s cubic-bezier(1,0,1,0)'}
                }
              >
                {currentData.answer.map((a) => {
                  return (
                    <AccordionAnswer style={activeElement == index ? {marginBottom: '1em'} : {marginBottom: '0'}}>
                      {a}
                    </AccordionAnswer>
                  );
                })}
              </AccordionBody>
            </AccordionItem>
          );
        })
      }
    </AccordionStyled>
  );
}

export default Accordion
