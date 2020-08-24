import styled from 'styled-components'


export const Container = styled.div` 
 height: 99vh;
 overflow: hidden;
` 

export const ContainerNavigation = styled.div` 
 width: 100%;
 height:44vw;
 overflow: scroll;
 overflow-x: hidden;
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

export const SubContainer = styled.div` 
display: flex; 
width: 100%;
height: 44vw;
.Pa { 
    overflow: scroll;
    .P{
        color: red; 
        height: 1000px;
    }
    
    justify-content: center;
    
}
`