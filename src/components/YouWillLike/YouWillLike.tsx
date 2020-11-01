import React from 'react'
import { VideosContainer , Container,StreamItem } from './style'
import {CanaisAoVivoQueAchamosQueVocêVaiGostar } from '../../pages/Home/DataExample'
function YouWillLike() { 
     return ( 
        <Container>
             <strong  className='Title' >
    Canais ao vivo que achamos que vai gostar</strong>
  <VideosContainer>
      {   CanaisAoVivoQueAchamosQueVocêVaiGostar.map(stream => (
            <StreamItem key={stream.id} >
                    <div className='Hover'  >
                  <div className='LiveAndEspec' >
                   <img src={stream.image} />
                  <strong className='Live'>AO VIVO</strong>
                    <span className='Espec' >{stream.Viewers}</span>
                            </div>
                            </div>             
                   <strong>{stream.Title}</strong>
                    <span>{stream.Name}</span>
                    <span>{ stream.Category }</span>
                    <span className='Tag' >{stream.Tags}</span>                   
                         </StreamItem>
     ))
                }
  </VideosContainer>     
        </Container>
     )
}


export default YouWillLike