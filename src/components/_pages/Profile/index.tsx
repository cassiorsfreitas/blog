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
                  alt="image"
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
                A blog by a <strong>full-stack developer</strong>, digital
                marketing analyst and consumer experience enthusiast. Team
                Liquid fan and musician in his spare time.
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
