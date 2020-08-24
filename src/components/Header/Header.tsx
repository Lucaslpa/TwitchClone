import React , {useState} from 'react';
import { Container , TwitchImg , LinksMenu , ContainerGeralMenu 
,ContainerSearch,ContainerUserInfo, HorizontalMenu
, InputSearch,SearchImg , SearchImgContainer , 
Chat,
Crown,Sino , HorizontalMenuContainer,HorizontalMenuNav} from './style'
import ButtonIcon from '../buttonIcon/button'

function App() {

    const [menu , setMenu] = useState(false)

  
   function toggleMenu () { 
    setMenu(!menu)
   }

  return (
   <Container>
       <ContainerGeralMenu>
       <TwitchImg/> 
       <LinksMenu> Seguindo </LinksMenu>
       <LinksMenu> Procurar </LinksMenu>
       <LinksMenu>  Esports </LinksMenu>
       <LinksMenu>  Musica </LinksMenu>
       <HorizontalMenuContainer  onClick={(e) => setMenu(!menu)} >
             <ButtonIcon>
                     <HorizontalMenu/> 
                     <div className='HoverText' >
                        <span> Mais </span>
                     </div>
             </ButtonIcon>
                   
                  {menu && ( <HorizontalMenuNav>
                       <strong>Geral</strong>
                       <li> Anunciantes</li>
                       <li> Blogs </li>
                       <li> Desenvolvedores </li>
                       <li> Baixar Aplicativo </li>
                   </HorizontalMenuNav>)}
       </HorizontalMenuContainer>
       </ContainerGeralMenu>
       <ContainerSearch>
            <InputSearch placeholder='Buscar' />
             <SearchImgContainer>
             <SearchImg/> 
             </SearchImgContainer>        
       </ContainerSearch>
       <ContainerUserInfo>
           <ButtonIcon>
                     <Crown/>
                    <div className='HoverText' >
                        <span> Novo loot prime </span>           
                    </div>
           </ButtonIcon>
                   
               
           <ButtonIcon>
                <div className='Notification' >
                    <span className='numberNotification' > 2</span>
                </div>
                <Sino/>
                <div className='HoverText' >
                    Notificações
                </div>
                </ButtonIcon>  
         <ButtonIcon>
               <Chat/> 
               <div className='HoverText' >
                    Sussurros
                </div>
         </ButtonIcon>
       
      
        <strong className='BuyBits'>
           Comprar Bits
        </strong>
        <img className='UserProfilePic' src='https://static.vecteezy.com/system/resources/previews/000/574/512/non_2x/vector-sign-of-user-icon.jpg'
         /> 
       </ContainerUserInfo>
        
   </Container>
  );
}

export default App;