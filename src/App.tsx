import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import present from "./img/present.gif"
import jungle from "./img/jungle_back.png"
import soil from "./img/soil.png"
import worm from "./img/worm.svg"
import spud from "./img/spud.svg"
import mole from "./img/mole.svg"
import mole2 from "./img/mole_left.png"
import mole3 from "./img/mole_right.png"
import { useState } from 'react'
import confetti from "./img/confetti.svg"
import guitar from "./img/guitar.svg"
import mic from "./img/mic.svg"

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {

  const [showVideo, setShowVideo] = useState(false)

  return (
    <div style={{ width: '100%', height: '100%', background: '#071E04'
  }}> 
      <Parallax pages={4}>

      <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            opacity: 0.1,
          }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          </ParallaxLayer>

      <ParallaxLayer
          offset={0}
          factor={2}
          speed={0.1}
          style={{
            background: '#CEA902',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
          <h1 style={{
            position: 'absolute',
            top: '10px'
          }}>Olivia, follow the mysterious flying present</h1>
          <p style={{
            position: 'absolute',
            top: '500px',
            zIndex: 1,
            opacity: '0.4'
          }}>Scroll down</p>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={-1} style={{ zIndex: showVideo ? 0 : 1,             display: 'flex', justifyContent: 'center', alignItems: 'center',
 }}> {!showVideo ? <img 
  src={present} 
  style={{ 
    opacity: '0.9',
    width: '25%'
   }}
  onClick={() => {
    setShowVideo(true)
    }
  }
   /> : <div style={{
    zIndex: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center'
  }} >
    <h2>I have got some 🎫 For Jungle at The Piece Hall!</h2>
    </div>}
          
        </ParallaxLayer>

        <ParallaxLayer offset={0.7} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
        
        
     
        <ParallaxLayer offset={0.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${jungle})`,
            backgroundSize: 'cover',
          }}>
            <p style={{
            position: 'absolute',
            opacity: '0.7',
            top: '10px', zIndex: 1, }}>Keep going</p>
        </ParallaxLayer>
        
        <ParallaxLayer offset={2.2} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={spud} style={{ display: 'block', width: '5%', marginLeft: '60%' }} />
          <img src={spud} style={{ display: 'block', width: '5%', marginLeft: '30%' }} />
          <img src={spud} style={{ display: 'block', width: '5%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={0.2}
          factor={1.5}
          style={{
            display: 'flex ',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            opacity: '0.7',
            backgroundSize: 'cover',
          }}>
            <p style={{
            position: 'absolute',
            top: '10px', zIndex: 1,color: '#F5E9D2'}}>almost there</p>

        </ParallaxLayer> 
        
        <ParallaxLayer offset={2.7} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={showVideo ? confetti : mole3} style={{ display: 'block', width: '16%', marginLeft: '95%' }} />
          <img src={showVideo ? confetti : worm} style={{ display: 'block', width: '10%', marginLeft: '30%' }} />
          <img src={showVideo ? confetti : worm} style={{ display: 'block', width: '4%', marginLeft: '32%' }} />
          <img src={showVideo ? confetti : worm} style={{ display: 'block', width: '12%', marginLeft: '90%' }} />
          <img src={showVideo ? confetti : worm} style={{ display: 'block', width: '12%', marginLeft: '90%' }} />
          <img src={showVideo ? confetti : worm} style={{ display: 'block', width: '12%', marginLeft: '45%' }} />
          <img src={showVideo ? confetti : worm} style={{ display: 'block', width: '12%', marginLeft: '52%' }} />
          <img src={showVideo ? confetti : worm} style={{ display: 'block', width: '12%', marginLeft: '84%' }} />
          <img src={showVideo ? confetti : worm} style={{ display: 'block', width: '12%', marginLeft: '69%' }} />
          <img src={showVideo ? confetti : mole} style={{ display: 'block', width: '16%', marginLeft: '0%' }} />
          <img src={showVideo ? confetti : mole3} style={{ display: 'block', width: '16%', marginLeft: '80%' }} />
          <img src={showVideo ? confetti : worm} style={{ display: 'block', width: '12%', marginLeft: '69%' }} />
          <img src={showVideo ? mic : worm} style={{ display: 'block', width: '16%', marginLeft: '17%' }} />
          <img src={showVideo ? confetti : mole3} style={{ display: 'block', width: '16%', marginLeft: '85%' }} />
          <img src={showVideo ? guitar : worm} style={{ display: 'block', width: '14%', marginTop: '22%', marginLeft: '85%' }} />
          <img src={showVideo ? confetti : mole2} style={{ display: 'block', width: '16%', marginLeft: '0%' }} />

        </ParallaxLayer>
        
            
        

          <ParallaxLayer
          offset={3.4}
          speed={0.2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center'
          }}
          >
                      {showVideo ?          
                  <iframe 
                    className="bg-video"
                    src="https://www.youtube-nocookie.com/embed/q3lX2p_Uy9I?si=kiEPKWTDjqyJuK2B&amp;autoplay=1&amp;mute=1"
                    allowFullScreen
                    allow="autoplay"
                />
              
             
          : <h2>Tap on the 🎁 to see where we will be on the <em>25th of August</em></h2>}
           
                
            
        </ParallaxLayer> 
        
        
      </Parallax>
    </div>
  )
}