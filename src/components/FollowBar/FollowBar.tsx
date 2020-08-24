import React from 'react' 
import { Container , ContainerStreamers ,ContainerFollowAndRecomended
 , ContainerSearch , InputSearch, 
SearchImg, ContainerViews, NameAndCategory,StreamerItem,ArrowfromRight
,StreamerImg , TitleStreamer} from './style'
import ButtonIcon from '../buttonIcon/button'
import {Streamer , Recomendação} from '../../pages/Home/DataExample'
 


function FollowBar() { 
 
    return ( 
         <Container>
           <ContainerFollowAndRecomended>
                  <ContainerStreamers> 
                      <div className='FollowAndOcult'>
                           <strong className='Chanelsfollow'> CANAIS SEGUIDOS</strong>
                            
                            <ButtonIcon>
                            <ArrowfromRight/>
                            <div className='HoverText' >
                             <span> Ocultar </span>
                           </div>
                            </ButtonIcon>
                      </div>
                    { 
                       Streamer.map(streamer => (
                        <StreamerItem  key={streamer.id} >
                        <StreamerImg src={streamer.image} /> 
                        <NameAndCategory>
                           <strong> {streamer.Name} </strong>
                           <span>{streamer.Category} </span>    
                        </NameAndCategory>
                        <ContainerViews>
                         <div className='LiveOn' ></div> 
                        <span>{ streamer.Viewers }</span>    
                       </ContainerViews>   
        
                       </StreamerItem> 
                       ))
                     }
                     


                    <span  className='showmore' >Mostrar mais</span>
                   </ContainerStreamers>
                   <ContainerStreamers> 
                      <div className='FollowAndOcult'>
                           <strong className='Chanelsfollow'>CANAIS RECOMENDADOS</strong>
                            
                           
                      </div>
                    { 
                       Recomendação.map(streamer => (
                        <StreamerItem  key={streamer.id} >
                        <StreamerImg src={streamer.image} /> 
                        <NameAndCategory>
                           <strong> {streamer.Name} </strong>
                           <span>{streamer.Category} </span>    
                        </NameAndCategory>
                        <ContainerViews>
                         <div className='LiveOn' ></div> 
                       <span>{ streamer.Viewers }</span>    
                       </ContainerViews>   
                       
                        <TitleStreamer className='TitleStream' >
                          <span> {streamer.Title} </span>
                        </TitleStreamer>
                        
                      
                       </StreamerItem> 
                       ))
                     }
                     


                    <span  className='showmore' >Mostrar mais</span>
                   </ContainerStreamers>
           </ContainerFollowAndRecomended>
           <ContainerSearch 
             className='Focused'
            >  
               <div>
               <SearchImg/> 
               <InputSearch placeholder='Buscar amigos par adicionar' />  
               </div>
              
           </ContainerSearch>
         </Container>
    )
}


export default FollowBar 