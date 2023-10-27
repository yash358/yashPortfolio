import React from 'react'
import BgAnimation from '../BgAnimation'
import { Container, Bg, LeftContainer, Img, RightContainer, InnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './Style'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const Section = () => {
    return (
        <div id="about">
            <Container>
                <Bg>
                    <BgAnimation />
                </Bg>
                <InnerContainer >
                    <LeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </LeftContainer>

                    <RightContainer id="Right">

                        <Img src="/images/profile1.jpg" alt="profile-image" />
                    </RightContainer>
                </InnerContainer>

            </Container>
        </div>
    )
}

export default Section