import Head from 'next/head'

import { meta } from '../src/api/meta'
import Header from '../src/components/Header'
import LandingSection from '../src/components/LandingSection'
import SubscribeSection from '../src/components/SubscribeSection'
import FeaturesSection from '../src/components/FeaturesSection'
import FeaturesInDetailSection from '../src/components/FeaturesInDetailSection'
import FaqSection from '../src/components/FaqSection'
import Footer from '../src/components/Footer'
import useIsMobile from '../src/components/hooks/useIsMobile'

import '../sass/style.scss'

export default function HomePage() {
  const isMobile = useIsMobile(991)

  console.log(process.env.GA_TRACKING_ID) // env does not work. issue 👉 https://github.com/zeit/next.js/issues/7320
  return (
    <>
      <Head>
        <title>{meta.meta_ogTitle}</title>
      </Head>
      <>
        <Header />
        <LandingSection />
        <FeaturesSection />
        <FeaturesInDetailSection />
        <SubscribeSection
          style={(() => {
            if (isMobile) return { marginTop: '70px' }
          })()}
        />
        <FaqSection />
        <Footer />
      </>
    </>
  )
}
