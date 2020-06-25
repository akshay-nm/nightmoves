import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitch, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div className="container mx-auto h-full">
      <Head>
        <title>NightMoves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex flex-col justify-around h-full">
        <div className="flex items-center">
          <div className="flex-1"></div>
          <div className="flex-1">
            <img src="/nm.png" alt="NightMoves Logo" />
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="flex items-center justify-center text-4xl">
          <div className="flex-1 text-center">
            <a href="https://www.youtube.com/channel/UCgQDm-CbAddx6G-riaUR0cA" id="youtube" title="Link to youtube" target="_blank" rel="noopener" > <FontAwesomeIcon icon={faYoutube}/> </a>
          </div>
          <div className="flex-1 text-center">
            <a href="https://www.twitch.tv/nightmoves" id="twitch" title="Link to twitch" rel="noopener" target="_blank" > <FontAwesomeIcon icon={faTwitch}/> </a>
          </div>
          <div className="flex-1 text-center">          
            <a href="https://www.instagram.com/ak.nightmoves" id="instagram" title="Link to instagram" rel="noopener" target="_blank" > <FontAwesomeIcon icon={faInstagram}/> </a>
          </div>
          <div className="flex-1 text-center">
            <a href="https://www.facebook.com/ak.nightmoves/" id="facebook" title="Link to facebook" rel="noopener" target="_blank" > <FontAwesomeIcon icon={faFacebook}/> </a>
          </div>
          <div className="flex-1 text-center">
            <a href="https://twitter.com/ak_nightmoves" id="twitter" title="Link to twitter" rel="noopener" target="_blank" > <FontAwesomeIcon icon={faTwitter}/> </a>
          </div>
        </div>
      </main>
    </div>
  )
}
