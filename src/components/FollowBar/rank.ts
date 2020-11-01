
import { Streamer } from '../../pages/Home/DataExample'

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

export function Rank() { 
     
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


      return { 
              arr , 
               streams
      }

}