import React from 'react'

import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

import { Container } from './styles'
import Link from 'next/link'

const SocialCard = () => {
  return (
    <Container>
      <div className="card">
        <Link href="https://github.com/cassiorsfreitas">
          <div className="container-card">
            <div className="title">PORTFOLIO</div>
            <div className="subtitle">Last projects</div>
            <div className="icon">
              <GitHubIcon fontSize="large" />
            </div>
          </div>
        </Link>
      </div>
      <div className="card">
        <Link href="https://twitter.com/cassiorsfreitas">
          <div className="container-card">
            <div className="title">TWITTER</div>
            <div className="subtitle">Discussions</div>
            <div className="icon">
              <TwitterIcon fontSize="large" />
            </div>
          </div>
        </Link>
      </div>
      <div className="card">
        <Link href="https://www.linkedin.com/in/cassiorsfreitas/">
          <div className="container-card">
            <div className="title">LINKEDIN</div>
            <div className="subtitle">Connect to me</div>
            <div className="icon">
              <LinkedInIcon fontSize="large" />
            </div>
          </div>
        </Link>
      </div>
      <div className="card">
        <Link href="mailto:cassio.rsfreitas@gmail.com">
          <div className="container-card">
            <div className="title">EMAIL</div>
            <div className="subtitle">Talk to me</div>
            <div className="icon">
              <EmailIcon fontSize="large" />
            </div>
          </div>
        </Link>
      </div>
    </Container>
  )
}

export default SocialCard
