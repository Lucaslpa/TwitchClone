import React from 'react'
import { Container } from './style'
import Anime1 from './images/anime (1).jpg'
import Anime2 from './images/anime (2).jpg'
import Anime3 from './images/anime (3).jpg'
import Anime4 from './images/anime (4).jpg'
import Anime5 from './images/anime (5).jpg'

function Carousel() { 
     return ( 
       <Container>

       <div className='Carousell' >
       <div className='First' >
             <img className='First' src={Anime1}/>
             </div >

             <div className='Second'>
             <img className='Second' src={Anime2}/> 
                   </div>
                   <div className='Terceiro'>
                   <img  src={Anime3} />
                   <div className='StreamInfo'>
                   </div> 
                   </div>
                   <div className='Quarto'>
                   <img className='Quarto' src={Anime4}/> 
                   </div>
                   <div className='Quinto'>
                   <img className='Quinto' src={Anime5}/> 
                    </div>
             
          </div> 
       </Container>
     )
}


export default Carousel