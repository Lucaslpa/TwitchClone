import styled from 'styled-components' 


export  const Container = styled.div` 
 height: 20vw;
   
 padding: 1.5vw;

.Title { 
    font-size: 1.3vw;
   margin-left: 1.5vw;
}  
`

export const VideosContainer = styled.div`
display:flex;

padding: 1vw;
`
export const StreamItem = styled.div` 
display: flex; 
flex-direction: column;
* { 
    margin-top: 0.2vw;
}
.Hover { 
    height: 13vw;
    width: 26vw;
    .LiveAndEspec{
     height: 13vw;
    position: relative;
    border-radius: 10px;  
    width: 24vw;
    transition: 0.1s;
    :hover { 
         border-bottom: solid 0.5vw #aa0ee8;
         border-left: solid 0.5vw #aa0ee8;
         transform: translateY(-4px);
            }  
    img {
        margin: 0px; 
        position: absolute; 
        width: 100%;
        transition: 0.1s; 
        height: 100%;  
    }
    .Live{ 
        margin: 1vw;
        position: absolute;
        left : 0 ;
        background: red; 
        padding: 0.3vw;
        color: white;
        font-size: max(2px , min(10px , 0.6vw));
        border-radius: 5px;     
    }
    .Espec { 
        margin-left: 1vw;
        position: absolute;
        left : 0 ;
        bottom: 10px;
        background: red; 
        color: white;
        font-size: max(2px , min(10px , 1vw));
        background: rgb(0,0,0, 0.7); 
        padding: 0.3vw;
        border-radius: 5px;
    }
 }

}
strong { 
    font-family: Roboto;
    font-size: 1vw;
    margin-top: 1.3vw;
}
span { 
    font-family: 'Quicksand', sans-serif;
    font-size: 1vw;
}

.Tag { 
     margin: 0.5vw; 
     padding: 0.2vw; 
     background: #e3e3e3;
     width: 5vw; 
     border-radius: 0.4vw;
     font-size: 0.9vw;
     display: flex;
     justify-content: center;
     :hover{
         background:#c9c9c9;
     }

    .LiveAndViewers { 
        position: absolute; 
        color: red; 
        top: 0 ;
    }  
}
`


   
