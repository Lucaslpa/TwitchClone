import React, {useEffect , useState} from 'react' 
import { Container , ContainerStreamers ,ContainerFollowAndRecomended
 , ContainerSearch , InputSearch, 
SearchImg, ContainerViews, NameAndCategory,StreamerItem,ArrowfromRight,StreamerImgOff
,StreamerImg , TitleStreamer , Heart , VideoCam} from './style'
import ButtonIcon from '../buttonIcon/button'
import { Streamer ,  Recomendação} from '../../pages/Home/DataExample'
 
interface props {
    id: number;
    image: string;
    Name: string;
    Category: string;
    Viewers: number;
    Title: string;
    Status?:  string;
    Videos?:  string;
}
 


function FollowBar() { 

   const [ Newarray , setarray] = useState<props[]>([])
   const [FinalArray , setFinal] = useState<props[]>([])
   const [Show , setShow] = useState(false)
   const [Ocult , setOcult] = useState(true)
   const [number , setNumber] = useState(0)


   useEffect(() => {

        let arr = [] 
    for(var i = 0; i <  6; i++) {  
                
              arr.push(Newarray[i])
              
    } 
    console.log('arr',arr)
       setFinal(arr)
   } , [Newarray])

    
  useEffect(() => {     
    const streams: props[] = []
    const verifie = [] 
     for(var i = 0; i <  Streamer.length; i++) {      
         verifie.push(Streamer[i])
         const index = streams.indexOf(verifie[i-1])
         const word1: number =  Streamer[i].Viewers
         if (index !== -1 ) {    
               const menor =  streams.find( item => item.Viewers < word1)
               const maior = streams.find(item => item.Viewers > word1 ) 
           if(menor) {
            const indexg = streams.indexOf(menor)    
            streams.splice(indexg + 1 , 0 , Streamer[i] )
           }
           else { 
         if(maior) {
          const indexj = streams.indexOf(maior)          
          streams.splice(indexj  , 0 , Streamer[i])  } } }
        else { 
         streams.unshift(Streamer[i])
        } }  
      streams.reverse()


      let arr = [] 
      for(var i = 0; i <  6; i++) {             
                arr.push(streams[i])           
      } 
      console.log('arr',arr)
         setFinal(arr) 
     setarray(streams)


  } , [])

  
 function handleShowMore() { 
        setShow(!Show)
 }

 function handleOcult() { 
    setOcult(!Ocult)
    console.log('foi')
    setNumber(number + 1)
 }
 
    return ( 
         <Container>
           



           <ContainerFollowAndRecomended>
                  <ContainerStreamers> 
                      <div className='FollowAndOcult'>
                           {
                              Ocult  ? <></> : <strong className='Chanelsfollow'> CANAIS SEGUIDOS</strong>
                           }
                             
                            <ButtonIcon   >
                            <ArrowfromRight onClick={() => handleOcult()} />
                            <div   className='HoverText' >
                             <span> Ocultar </span>
                           </div>
                            </ButtonIcon>
                      </div>
                      {
                        Ocult ? <Heart/> : <></>
                      }
                    { 
                        (Show || Ocult ? Newarray : FinalArray).map(streamer =>  { 
                                                   
                          if(!Ocult) { 
                            return ( 
                              <StreamerItem  key={streamer.id} >
                            { streamer.Status ? <StreamerImgOff  src={streamer.image} /> : <StreamerImg  src={streamer.image} />   }
                             <NameAndCategory>
                                <strong> {streamer.Name} </strong>
                                <span>{streamer.Status ?  streamer.Videos : streamer.Category} </span>    
                             </NameAndCategory>
                            
                              { 
                                streamer.Status && <ContainerViews><span>Offline</span></ContainerViews> 
                                 
                               }
                               { 
                               !streamer.Status &&  <ContainerViews> <div className='LiveOn' ></div> 
                               <span>{ streamer.Viewers }</span> </ContainerViews> 
                               }   
                              
             
                            </StreamerItem> 
                            )
                          }
                          else return ( 
                            <StreamerItem  key={streamer.id} >
                            { streamer.Status ? <StreamerImgOff  src={streamer.image} /> : <StreamerImg  src={streamer.image} />   }
                                         
                            </StreamerItem>   
                          )                        
                        }
                       
                       )
                     }
                     

                     { 
                  !Ocult ? ( 
                    Show ? <span onClick={() => handleShowMore()}  className='showmore' >Mostrar menos</span>  : (
                      <span onClick={() => handleShowMore()}  className='showmore' >Mostrar mais</span>
                    )
                  ) : <></>
                }
                    
                   </ContainerStreamers>
                   <ContainerStreamers> 
                      <div className='FollowAndOcult'>
                           {
                              Ocult  ? <></> : <strong className='Chanelsfollow'> CANAIS RECOMENDADOS</strong>
                           }
                            
                           
                      </div>
                      {
                        Ocult ? <VideoCam/> : <></>
                      }
                    { 
                       Recomendação.map(streamer =>  { 
                                                   
                        if(!Ocult) { 
                          return ( 
                            <StreamerItem  key={streamer.id} >
                           <StreamerImg  src={streamer.image} />   
                           <NameAndCategory>
                              <strong> {streamer.Name} </strong>
                              <span>{ streamer.Category} </span>    
                           </NameAndCategory>
                          
                            <ContainerViews> <div className='LiveOn' ></div> 
                             <span>{ streamer.Viewers }</span> </ContainerViews> 
                             
                             
           
                          </StreamerItem> 
                          )
                        }
                        else return ( 
                          <StreamerItem  key={streamer.id} >
                         <StreamerImg  src={streamer.image} />   
                                       
                          </StreamerItem>   
                        )                        
                      }
                     
                     )
                     }
                     

               { 
                  !Ocult ? ( 
<span  className='showmore' >Mostrar mais</span>
                  ) : <></>
                }
                    
                   </ContainerStreamers>
           </ContainerFollowAndRecomended>
         {
           !Ocult ? (  <ContainerSearch 
            className='Focused'
           >  
              <div>
              <SearchImg/> 
              <InputSearch placeholder='Buscar amigos par adicionar' />  
              </div>
             
          </ContainerSearch>) :<></>
         }
         </Container>
    )
}


export default FollowBar 