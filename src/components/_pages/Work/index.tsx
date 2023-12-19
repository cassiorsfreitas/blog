import HeadSeo from '../../HeadSeo'
import MainContent from '../../templates/MainContent'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

const Work = () => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
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
      <MainContent>Work</MainContent>
    </>
  )
}

export default Work
