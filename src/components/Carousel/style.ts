import styled from 'styled-components' 
import {ArrowIosForwardOutline,
ArrowIosBackOutline} from '@styled-icons/evaicons-outline'

export const ArrowRight =  styled(ArrowIosForwardOutline)`

width: 2vw;
fill: black ; 
 
`

export const ArrowLeft = styled(ArrowIosBackOutline)`
width: 2vw;
fill: black ; 
 
`


export  const Container = styled.div` 
  z-index: 0; 
 .Carousell { 
    display: flex; 
    position: relative;
    width: 100%;
    height: 23vw;
    justify-content: center;
    align-items: center; 
    padding: 1vw; 



    .toleft { 
       width: 3vw; 
       position: absolute; 
       display: flex;
       justify-content: center; 
       align-items: center; 
       left: 5% ; 
       height: 3vw;
      
       color: white;
       border-radius: 5px;
       :hover { 
         background: #dedede
       }
    }
    .toright { 
      width: 3vw; 
      position: absolute; 
      display: flex;
       justify-content: center; 
       align-items: center; 
      right: 5%; 
      height: 3vw; 
     
       color: white;
       border-radius: 5px;
       :hover { 
         background: #dedede
       }
    }
  
    div { 
        height: 20vw;
        width: 30vw ; 
        position:absolute;
     
       iframe { 
         
            height: 100%;
            width: 100%;    
        }
    }
.First {
   height: 14vw;

   right: 17% ; 
   z-index: 5; 
   width: 35vw;
  :hover { 
   right: 16.5%; 
   height: 14.5vw;
   width: 35.5vw;
  }
}
.Second { 
    z-index:10; 
    left: 21%; 
    height: 17vw;
    width: 38vw;
    :hover { 
     left: 20.5%; 
     height: 17.5vw;
     width: 38.5vw; 
  }
}
.Terceiro { 
 z-index: 20; 
 width: 40vw;
}
.Quarto { 
  z-index: 10; 
  right: 21%; 
  height: 17vw;
  width: 38vw;
  :hover { 
     right: 20.5%; 
     height: 17.5vw;
     width: 38.5vw; 
  }
}
.Quinto { 
   height: 14vw;
 left: 17%; 
  z-index: 5 ;
  width: 35vw;
  :hover { 
   left: 16.5%; 
   height: 14.5vw;
   width: 35.5vw;
  }
}




 }
`