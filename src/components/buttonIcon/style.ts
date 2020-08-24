import styled from 'styled-components'




export const Container = styled.div` 
    cursor: pointer;
    position: relative;
    .Notification { 
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center; 
      left: 35% ;
      width: 1.3vw; 
      height: 1vw;
      border-radius: 2vw;
      background:red; 
      color: white;
      span { 
          font-size: 0.8vw;
      }
    }
    .HoverText {   
      display:none;
  }
   :hover { 
    .HoverText { 
        position: absolute;
         top: 100%;
        right: 50%; 
        transform: translateX(60%);
        padding: 0.3vw;
       span { 
        white-space: nowrap;}
        font-size: 0.8vw;
        background: black;
        border-radius: 0.6vw;
        color: white;
        font-family: Roboto;
        display: block;
   }
   }


`