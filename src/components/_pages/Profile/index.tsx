import React from 'react'
import Image from 'next/image'

import HeadSeo from '../../organisms/HeadSeo'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'
import { MdEmail } from 'react-icons/md'
import { Container } from './styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import Link from 'next/link'

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
              <div className="social">
                <a href="mailto:someone@yoursite.com">
                  <MdEmail size={30} />
                </a>
                <Link
                  href="https://www.linkedin.com/in/cassiorsfreitas/"
                  passHref={true}
                >
                  <a>
                    <LinkedInIcon style={{ fontSize: 30 }} />
                  </a>
                </Link>
                <Link href="https://github.com/cassiorsfreitas" passHref={true}>
                  <a>
                    <GitHubIcon style={{ fontSize: 28 }} />
                  </a>
                </Link>
                <Link
                  href="https://twitter.com/cassiorsfreitas"
                  passHref={true}
                >
                  <a>
                    <TwitterIcon style={{ fontSize: 30 }} />
                  </a>
                </Link>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                iste dolor odit. Molestias alias aspernatur, error adipisci nam
                earum, deleniti mollitia vel totam blanditiis minima praesentium
                laboriosam, odit amet explicabo!
              </div>
            </div>
          </Container>
        </MainContent>
      </LayoutMobile>
    </>
  )
}

export default Profile
