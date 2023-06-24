import {Outlet} from 'react-router-dom';
import { useStateContext } from '../context/contextprovider';


export default function DefaultLayout(){
    const {user, token} = useStateContext();

    if(!token)
    {
        return <Navigate to="/login" />
    }
    
    return (
        <div>

        </div>
    )
}