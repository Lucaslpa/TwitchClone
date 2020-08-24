import styled from 'styled-components' 


export  const Container = styled.div` 
   padding: 1.5vw;
   height: 20vw;
   display: flex;
   justify-content: center;
   align-items: center;  
  position: relative;
  .Carousell { 
   display: flex;
   justify-content: center;
   align-items: center;  
   width: 70vw;
   border: solid 1px pink; 
   position: relative;

* { 
   padding: 2%; 
}

   .Terceiro { 
      position: absolute;
      display: flex;
      padding: 0px; 
      justify-content: space-between;
      height: 20vw;
      width: 44vw;
       right: 16.5% ; 
      z-index: 10;
      transition: 0.2s; 
      background: white;
      border: solid 1px black;
      box-sizing: border-box;
      img { 
        
         height:90%;
         width: 60%;
      }
      
      .StreamInfo { 
         margin: 0px ; 
         height: 90%;
         width: 50%;
         background: Blue;
      }
     
    
     
  }
  .Second { 
   height: 17.5vw;
      width: 39vw;
      left: 14% ; 
      z-index: 6;
      transition: 0.2s; 
      :hover { 
         height: 18vw;
      width: 39.5vw;
      left: 13.5%
      }
  }
   
    .Quarto { 
      height: 17.5vw;
      width: 39vw;
  right: 14%; 
      z-index: 6;
      transition: 0.2s; 
      :hover { 
         height: 18vw;
      width: 39.5vw;
       right: 13.5%
      }
  }

  .First { 
   height: 14.5vw;
      width: 37vw;
   left: 12%; 
      z-index: 4;
      transition: 0.2s; 
      :hover { 
         height: 15vw;
      width: 37.5vw;
      left: 11.5% ; 
      }
  }
  
 .Quinto  { 
   height: 14.5vw;
      width: 37vw;
       right: 12% ; 
      z-index: 2 ; 
      transition: 0.2s; 
      :hover { 
         height: 220px;
         height: 15vw;
      width: 37.5vw;
      right: 11.5%
      }
  }
  
  }
   

  

`