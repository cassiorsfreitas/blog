import React from 'react'
import Image from 'next/image'

import HeadSeo from '../../organisms/HeadSeo'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'
import SocialCard from '../../molecules/SocialCard'
import { Container } from './styles'

const Profile = () => {
  return (
    <>
      <HeadSeo
        title="Profile - Cássio Freitas"
        description="This is my personal website"
      />
      <LayoutMobile noTop>
        <MainContent>
          <Container>
            <div className="header">
              <div className="photo">
                <Image
                  src="/profile.jpg"
                  alt="Profile picture"
                  width={842}
                  height={842}
                  layout="responsive"
                  className="ProfileImageIn"
                />
              </div>
              <div className="titles">
                <SectionDoubleTitle
                  titleMin="Full Stack Developer"
                  titleMax="Cássio Freitas"
                />
              </div>

              <div className="description">
                <p>
                  A blog by a <strong>full-stack developer</strong>, digital
                  marketing analyst and consumer experience enthusiast. Team
                  Liquid fan and musician in his spare time. Whenever possible,
                  I like to teach my friends about something I{"'"}ve learned, I
                  think that{"'"}s why this blog was born.
                </p>
              </div>
              <div className="status">
                <div className="tech">
                  <div className="about-title">Age</div>
                  <div className="about-description">29</div>
                </div>
                <div className="tech">
                  <div className="about-title">From</div>
                  <div className="about-description">Recife, Brazil</div>
                </div>
                <div className="tech">
                  <div className="about-title">Language</div>
                  <div className="about-description">JavaScript</div>
                </div>
                <div className="tech">
                  <div className="about-title">Favorite Sport</div>
                  <div className="about-description">Futsal</div>
                </div>
              </div>
            </div>
            <SocialCard />
          </Container>
        </MainContent>
      </LayoutMobile>
    </>
  )
}

export default Profile
