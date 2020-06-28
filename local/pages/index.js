import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NM Control Room</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl">
          Welcome to <a 
          href="https://nightmoves.gg"
          target="_blank"
          rel="noopener noreferrer">Nightmoves</a> Stream Control Room!
        </h1>

        <p className="description">
          You can monitor and control the behavior of overlay from here.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Link href='/overlay'>
            <a className="border rounded p-2">
              <h3 className='text-3xl'>Overlay &rarr;</h3>
              <p>Live overlay to be used in OBS.</p>
            </a>
          </Link>
          
          <Link href='/settings'>
            <a className="border rounded p-2">
              <h3 className='text-3xl'>Settings &rarr;</h3>
              <p>Configure the overlay with the help of a demo.</p>
            </a>
          </Link>

          <Link href='/dashboard'>
            <a className='border rounded p-2'>
            <h3 className='text-3xl'>Dashboard &rarr;</h3>
              <p>Manage profiles and screens.</p>
            </a>
          </Link>
          
          <Link href='/stats'>
            <a className="border rounded p-2">
              <h3 className='text-3xl'>Stats &rarr;</h3>
              <p>Stats related to stream and overlay.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://nightmoves.gg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <img src="/vercel.svg" alt="Nightmoves Logo" className="logo" />
        </a>
      </footer>

      
    </div>
  )
}
