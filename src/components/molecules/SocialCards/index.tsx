import { Container } from './styles'
import Link from 'next/link'
import { SocialDataProps } from './interfaces'

export interface SocialCardsProps {
  socialData: SocialDataProps[]
}

const SocialCards = ({ socialData }: SocialCardsProps) => {
  return (
    <Container>
      {socialData.map(card => {
        return (
          <div className="card" key={card.title}>
            <Link href={card.link}>
              <div className="container-card">
                <div className="title">{card.title}</div>
                <div className="subtitle">{card.subtitle}</div>
                <div className="icon">{card.icon}</div>
              </div>
            </Link>
          </div>
        )
      })}
    </Container>
  )
}

export default SocialCards
