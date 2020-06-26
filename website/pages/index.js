import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitch, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import SocialMediaLink from '../components/social-media-link'

export default function Home() {
  return (
    <div className="container mx-auto h-full">
      <Head>
        <title>NightMoves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex flex-col h-full">
        <div className="flex-1 flex items-center">
          <div className="flex-1"></div>
          <div className="flex-1">
            <img src="/nm.png" alt="NightMoves Logo" />
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="flex-1 h-full flex items-center">
            <SocialMediaLink profileLink="https://www.youtube.com/channel/UCgQDm-CbAddx6G-riaUR0cA" icon={faYoutube} />
          </div>
          <div className="flex-1 h-full flex items-center">
            <SocialMediaLink profileLink="https://www.twitch.tv/nightmoves" icon={faTwitch} />
          </div>
          <div className="flex-1 h-full flex items-center">
            <SocialMediaLink profileLink="https://www.instagram.com/ak.nightmoves" icon={faInstagram} />
          </div>
          <div className="flex-1 h-full flex items-center">
            <SocialMediaLink profileLink="https://www.facebook.com/ak.nightmoves/" icon={faFacebook} />
          </div>
          <div className="flex-1 h-full flex items-center">
            <SocialMediaLink profileLink="https://twitter.com/ak_nightmoves" icon={faTwitter} />
          </div>
        </div>
      </main>
    </div>
  )
}
