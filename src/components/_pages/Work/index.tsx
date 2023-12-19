import Image from 'next/image'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import Career from '../../molecules/Career'
import SocialCards from '../../molecules/SocialCards'
import HeadSeo from '../../organisms/HeadSeo'
import MainContent from '../../templates/MainContent'
import { Container } from './styles'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

const Work = () => {
  const SOCIAL_DATA = [
    {
      link: 'https://github.com/cassiorsfreitas',
      title: 'PORTFOLIO',
      subtitle: 'Last projects',
      icon: <GitHubIcon fontSize="large" />
    },
    {
      link: 'https://twitter.com/cassiorsfreitas',
      title: 'TWITTER',
      subtitle: 'Discussions',
      icon: <TwitterIcon fontSize="large" />
    },
    {
      link: 'https://www.linkedin.com/in/cassiorsfreitas/',
      title: 'LINKEDIN',
      subtitle: 'Connect to me',
      icon: <LinkedInIcon fontSize="large" />
    },
    {
      link: 'mailto:cassio.rsfreitas@gmail.com',
      title: 'EMAIL',
      subtitle: 'Talk to me',
      icon: <EmailIcon fontSize="large" />
    }
  ]
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
                priority
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
                Hey there! My name is Cássio Freitas and I{"'"}m a web developer
                from Brazil living in Portugal. Although I studied Chemical
                Engineering, I started my professional career as Marketing
                Analyst, Digital Traffic Manager and Programmer.
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
          <SocialCards socialData={SOCIAL_DATA} />
        </Container>
      </MainContent>
    </>
  )
}

export default Work
