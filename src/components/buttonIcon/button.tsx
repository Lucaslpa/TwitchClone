import React from 'react'
import { Container} from './style'

interface ButtonProps { 
    Text?: string ; 
}



const  ButtonIcon: React.FC<ButtonProps>  = (props) => { 

    return ( 
        <Container>

            {props.children}
       
      

       </Container>

    )
}

export default ButtonIcon