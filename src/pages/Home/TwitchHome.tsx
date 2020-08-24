import React from 'react';
import { Container , ContainerNavigation, SubContainer } from './style'
import Header from '../../components/Header/Header'
import RightBar from '../../components/FollowBar/FollowBar'
import YouWillLike from '../../components/YouWillLike/YouWillLike'
import Carousel from '../../components/Carousel/Carousel'

function App() {
  return (
   <Container>
        <Header/> 
     
  <SubContainer>
        <RightBar/> 
       <ContainerNavigation>
       <Carousel/>
       <YouWillLike/>
       </ContainerNavigation>
        

       
    </SubContainer> 
       
   </Container>
  );
}

export default App;
