import styled from 'styled-components'
import {MagnifyingGlass} from'@styled-icons/entypo'
import ArrowClose from'@styled-icons/boxicons-regular/ArrowFromRight'
import { ArrowFromRight} from'@styled-icons/boxicons-regular'


export const Container = styled.div`
width: 17vw; 
height: 44vw  ; 
display: flex ;
flex-direction: column ; 
justify-content: space-between;
background: #f0f0f0;
`

export const ContainerStreamers= styled.div`
  display: flex; 
  flex-direction: column;
  .FollowAndOcult { 
      .Chanelsfollow { 
            font-size: 1vw;
      }
      box-sizing: border-box;
       display: flex; 
       padding: 1vw;
      width: 100%;
       height: 3vw;
       justify-content: space-between;
       align-items: center; 
  }
  .showmore { 
       font-size: 0.8vw; 
        cursor: pointer;
         color: #aa00d4; 
        width: 30%;
        padding: 5px;
       :hover { 
        text-decoration: underline ;
       }
  }

` 
export const ArrowfromRight = styled(ArrowFromRight)`
 padding: 2px;
width: 1.5vw; 
:hover { 
    border-radius: 0.3vw;
 background: #cfcfcf;
}
`
export const StreamerItem= styled.div` 
height: 4vw; 
display: flex; 
width: 100%;
height: 3.5vw;
align-items: center; 
transition: 0.1s;
cursor: pointer;
:hover { 
    background: #e3e3e3;
    .TitleStream { 
        position: absolute;
        span { 
            width: 100%;
            height: 100%;
            font-family: 'Quicksand', sans-serif;
        }
        padding: 10px;
 width: 13vw;
 height: auto; 
 background: #fcfcfc;
 border-radius: 10px; 
 transform: translateX(18vw);
 z-index: 2000;  
 display: block;
 
 -webkit-box-shadow: 2px 0px 20px -7px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 0px 20px -7px rgba(0,0,0,0.75);
box-shadow: 2px 0px 20px -7px rgba(0,0,0,0.75);

    }
}
`
export const TitleStreamer = styled.div`
  display: none 
`
export const StreamerImg= styled.img` 
border-radius: 100%; 
width: 2vw; 
height: 2vw;
margin-left: 0.6vw;
`
export const NameAndCategory = styled.div`
display: flex; 
justify-content: center;
flex-direction : column;
margin-left: 0.6vw;
width: 40%; 
strong{ 
 font-size: 1vw;
 font-family: Roboto; 
}
span { 
    font-size: 0.9vw;
    font-family: 'QuiQuicksand', sans-serif;
}
* { 
    white-space: nowrap
}
` 
export const ContainerViews = styled.div`
display: flex; 
align-items: center; 
margin-left: 2vw;
 span { 
    font-family: 'Quicksand', sans-serif;
    font-size: 1vw;
 }
 .LiveOn { 
       margin-right: 0.5vw;
      border-radius: 100%; 
      height: max(3px , min(20px, 0.5vw));
      width: max(3px , min(20px, 0.5vw)); 
      background: red; 
 }
`
export const ContainerFollowAndRecomended = styled.div`
overflow-x: hidden;
overflow-y: scroll;  
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar {
    width: 0.5vw;
}
::-webkit-scrollbar-thumb {
  background: #363636;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`
export const ContainerSearch = styled.div`
border-top: solid 1px #d7d7db ; 
height: 3vw;
display: flex; 
justify-content: center;
align-items: center; 
padding: 0.3vw; 
:focus { 
    border: 1px solid black;
}
div { 
  display: flex; 
  
   height: 2vw;
    background: #e3e3e3;
    padding: 0.4vw;
    border-radius: 5px;
}
`

export const InputSearch = styled.input` 
padding: 0.3vw;
width: 13vw;
height: 1vw;
border:solid 1.5px  transparent;
background: #e3e3e3;
outline: none;
font-size: 1vw;
:focus { 
    border:solid 1.5px  #ab02e3
 } 
`
export const SearchImg = styled(MagnifyingGlass)` 
 width: 1.5vw; 
 fill: #545454; 
`