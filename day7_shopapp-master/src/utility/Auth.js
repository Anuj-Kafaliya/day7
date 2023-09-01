import { useNavigate } from "react-router-dom"

const Auth = ({children}) => {
   
    for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) === 'loggedInUser'){
            return children;
        }
    }
    
}

export default Auth