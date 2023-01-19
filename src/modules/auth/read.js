import { onValue, ref } from "firebase/database"
import { useStateContext } from "../../contexts/ContextProvider"


export const Read = (unique) =>{
    const {db}=  useStateContext()
    const userID = unique.matricNo.split('/').join('-')

   onValue(ref(db, `users/${userID}`), async(snapshot)=>{
        if(snapshot.exists()){
            return await snapshot.val()
        }
        return 'Error'
})
}