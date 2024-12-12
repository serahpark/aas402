import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import About from './About'
import './styling/index.css'

import neko from './images/neko.jpg'
import barleyTea from './images/barleytea.jpg'
import soapMold from './images/silicone.jpg'
import musicBox from './images/musicbox.jpg'
import sweater from './images/sweater.jpg'
import shoes from './images/shoes.jpg'

import serahneko from './audio/serahneko.mp3'
import serahbarley from './audio/serahbarley.mp3'
import serahmold from './audio/serahsoap.mp3'
import serahmusic from './audio/serahmusic.mp3'
import serahsweater from './audio/serahsweater.mp3'
import serahshoes from './audio/serahshoes.mp3'

import momneko from './audio/momneko.mp3'
import mombarley from './audio/mombarley.mp3'
import mommold from './audio/mommold.mp3'
import mommusic from './audio/mommusic.mp3'
import momsweater from './audio/momsweater.mp3'
import momshoes from './audio/momshoes.mp3'

const sample = [
  {
    id: "1",
    image: neko,
    serahAudio: serahneko,
    momAudio: momneko,
    serahT: "Although its eyes, nose, and ears are all crooked because my mom made it, it is such a lovely stuffed animal to me.",
    momT: "Gunengi is the first crochet stuffed cat that I made for Serah.",
    link1: 'https://blog.lionbrand.com/behind-the-scenes-the-making-of-yarn/',
    link2: 'https://gethiroshima.com/features/artisans/tulip-needles/',
  },
  {
    id: "2",
    image: barleyTea,
    serahAudio: serahbarley,
    momAudio: mombarley,
    serahT: "It's inconvenient to make barley tea at school, so my mom makes this tea for me only at home.",
    momT: "Barley tea is a tea that I often had Serah drink when she was young and had stomachaches.",
    link1: 'https://laborrights.org/industries/tea#:~:text=Low%20Wages%20and%20High%20Quotas,child%20labor%2C%20and%20debt%20bondage.',
    link2: 'https://www.ambitionbox.com/reviews/living-food-reviews',
  },
  {
    id: "3",
    image: soapMold,
    serahAudio: serahmold,
    momAudio: mommold,
    serahT: "In third grade, my mom made a bunch of soaps for me to share with my friends. Eleven years later, we still talk about them.",
    momT: "For Christmas time, I used this mold to make pretty soaps for Serah's school teachers and friends.",
    link1: 'https://www.amazon.com/Amyandone-Mini-Christmas-Silicone-Molds/dp/B0DFCYTRJ5/ref=sr_1_2?crid=1RZLDBY8G4AAL&dib=eyJ2IjoiMSJ9.nMyX2DOsdRuCCXm73L-sP8-jfrMpX7O8xzK9XiZolGaEJvehnCrgRIZ5vsqgXh7oe6qb0psosLtNsar6rRYEmp07TZBk90zjLgJKcu1y8TmegMtNamZAs9FExXPSeU7tsCEtfVdPvXFFeYV5XpSALFPeIxdMa1OOoDXjJBB3C87_s8mIhoBQHhlnwXp1uSl-SKLn5PmBV7hUqrvshIVgWPhkQ_q7g61NSVQeAnlHEySxPIh_gim1QY-3B2fLi1vmwXgwR_Hr5awkA8IvPA3lctpn-lfKaPKj2CEN7ChnOA0.-Bvzl9rpiSihpQPK0Y6hZdByoJXze-XAdzMqFkmq-lg&dib_tag=se&keywords=amyandone%2Bsilicone%2Bmold&qid=1733999705&sprefix=amyandone%2Caps%2C86&sr=8-2&th=1',
    link2: 'https://www.newtopsilicone.com/advancing-sustainability-volatile-management-in-silicone-manufacturing/',
  },
  {
    id: "4",
    image: musicBox,
    serahAudio: serahmusic,
    momAudio: mommusic,
    serahT: "When I traveled to Japan, I found a music box that played a song that my mom often played on the piano.",
    momT: "The music box that Serah bought for me in Japan contains a song that I like.",
    link1: 'https://www.otaru-orgel.co.jp/en',
    link2: 'https://www.dol.gov/agencies/ilab/reports/child-labor/list-of-goods-print?items_per_page=10&combine=china',
  },
  {
    id: "5",
    image: sweater,
    serahAudio: serahsweater,
    momAudio: momsweater,
    serahT: "I recently crocheted a sweater. My mom really liked it, so I shared the pattern and she made one too.",
    momT: "I thought the sweater Serah crocheted was really pretty, so I crocheted one too.",
    link1: 'https://www.youtube.com/watch?v=vmsDH1WnDlA',
    link2: 'https://caron-yarn.com/#:~:text=Their%20line%20includes%20classics%20like,located%20in%20Washington%2C%20North%20Carolina.',
  },
  {
    id: "6",
    image: shoes,
    serahAudio: serahshoes,
    momAudio: momshoes,
    serahT: "I didn't have any running shoes so I took one of my mom's to school. I normally dislike running but recently, I tried to run like how mom used to run in these shoes.",
    momT: "I gave my running shoes to Serah. I told her she should wear running shoes to prevent injuries.",
    link1: 'https://sustainablereview.com/brand-ratings/altra/',
    link2: 'https://www.business-humanrights.org/en/latest-news/north-facevf-corps-response/',
  },
]

const App = () => {


  return (
    <div className='page-container'>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Gallery objects={sample} />} />
            <Route path='/about' element={<About />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
