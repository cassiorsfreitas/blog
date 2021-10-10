import React from 'react'
import Image from 'next/image'

import HeadSeo from '../../organisms/HeadSeo'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'
import SocialCard from '../../molecules/SocialCard'
import ProgressBar from '@ramonak/react-progress-bar'
import { Container } from './styles'

const Profile = () => {
  return (
    <>
      <HeadSeo
        title="Fav - Cássio Freitas"
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
                  width={50}
                  height={50}
                  layout="responsive"
                  objectFit="cover"
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
                  Liquid fan and musician in his spare time.
                </p>
                <br />
                <p>
                  I love working in a team and I am very communicative. Whenever
                  possible, I like to teach my friends about something I{"'"}ve
                  learned, I think that{"'"}s why this blog was born.
                </p>
              </div>
              <div className="status">
                <div className="tech">Javascript</div>
                <ProgressBar
                  completed={80}
                  bgColor="#FFC72C"
                  isLabelVisible={false}
                />

                <div className="tech">Java</div>
                <ProgressBar
                  completed={60}
                  bgColor="#FFC72C"
                  isLabelVisible={false}
                />

                <div className="tech">SEO</div>
                <ProgressBar
                  completed={90}
                  bgColor="#FFC72C"
                  isLabelVisible={false}
                />
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
