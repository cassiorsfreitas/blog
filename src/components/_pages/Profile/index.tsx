import Image from 'next/image'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import Career from '../../molecules/Career'
import SocialCard from '../../molecules/SocialCard'
import HeadSeo from '../../organisms/HeadSeo'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'
import { Container } from './styles'

const Profile = () => {
  return (
    <>
      <HeadSeo
        title="Profile - Cássio Freitas"
        description="This is a blog about web development"
        keyword="full stack developer"
        cover="https://cassiorsfreitas.com/cover-blog.png"
        slug="https://cassiorsfreitas.com/profile"
        canonical="https://cassiorsfreitas.com/profile"
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
                  className="profileImageIn"
                  quality={100}
                />
              </div>
              <div className="titles">
                <SectionDoubleTitle
                  titleMin="Full Stack Developer"
                  titleMax="Cássio Freitas"
                />
              </div>
              <div className="description">
                <h2>Bio</h2>
                <p>
                  A blog by a <strong>full-stack developer</strong>, digital
                  marketing analyst and consumer experience enthusiast.
                </p>
                <br />
                <p>
                  Hey there! My name is Cássio Freitas and I{"'"}m a web
                  developer from Brazil living in Portugal. Although I studied
                  Chemical Engineering, I started my professional career as
                  Marketing Analyst, Digital Traffic Manager and Programmer.
                </p>
                <br />
                <p>
                  Nowadays, I am Code Cadet of the 52nd class of the Academia de
                  Código, passionate about web applications and open source
                  projects, that{"'"}s why I{"'"}ve always loved producing and
                  sharing a lot of content with everyone around me.
                </p>
              </div>
            </div>
            <div className="career">
              <h2>Career</h2>
              <div className="careerContainer">
                <Career
                  role="Frontend Developer"
                  company="AGAP2IT"
                  urlCompany="https://www.agap2-it.pt/"
                  city="Porto"
                  country="Portugal"
                  startDate="Nov 2021"
                  finalDate="Present"
                />
                <Career
                  role="Full Stack Developer"
                  company="Blend Euro"
                  urlCompany="https://www.blendit.com/"
                  city="Porto"
                  country="Portugal"
                  startDate="Jun 2021"
                  finalDate="Nov 2021"
                  duration="6 mos"
                />
                <Career
                  role="Chief Marketing Officer"
                  company="Projeto Musique"
                  urlCompany="https://projetomusique.com"
                  city="Recife"
                  country="Brazil"
                  startDate="Jun 2018"
                  finalDate="Sep 2020"
                  duration="8 mos"
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
