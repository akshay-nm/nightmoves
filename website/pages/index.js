import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitch, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NightMoves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <div class="logo-container">
          <img class="logo" src="/nm.png" alt="NightMoves Logo" />
        </div>
        <div class="details">
          <h2 class="container">Hey there!</h2>
          <br/>
          <p class="container">Gamer from <span class="flag-icon flag-icon-in"></span> <br/> Don't forget to checkout the links below!!!  <br/> Thanks!</p>
        </div> 
        <div class="social">
          <ul class="social-icons" style={{ listStyle: 'none' }}>
            <li><a href="https://www.youtube.com/channel/UCgQDm-CbAddx6G-riaUR0cA" id="youtube" title="Link to youtube" class="social-icon" target="_blank" rel="noopener" > <FontAwesomeIcon icon={faYoutube}/> </a></li>
            <li><a href="https://www.twitch.tv/nightmoves" id="twitch" title="Link to twitch" class="social-icon" rel="noopener" target="_blank" > <FontAwesomeIcon icon={faTwitch}/> </a></li>
            <li><a href="https://www.instagram.com/ak.nightmoves" id="instagram" title="Link to instagram" class="social-icon" rel="noopener" target="_blank" > <FontAwesomeIcon icon={faInstagram}/> </a></li>
            <li><a href="https://www.facebook.com/ak.nightmoves/" id="facebook" title="Link to facebook" class="social-icon" rel="noopener" target="_blank" > <FontAwesomeIcon icon={faFacebook}/> </a></li>
            <li><a href="https://twitter.com/ak_nightmoves" id="twitter" title="Link to twitter" class="social-icon" rel="noopener" target="_blank" > <FontAwesomeIcon icon={faTwitter}/> </a></li>
          </ul>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
