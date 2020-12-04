import deleteCookie from "./deleteCookie";


const graphQlErrors = (error)=>{
    
    return (
        error.graphQLErrors.map(({message})=>{
            if(message==="Please signIn") 
            {
                deleteCookie("signedin"); 
            }
            else{
                return message;
            }
            return message;
               
        }))
}
export default graphQlErrors;