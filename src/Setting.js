import AddUser from "./Login/AddUser";
import Login from "./Login/Login"; 
import { useState } from 'react';
import Print from './Login/Print';


const Setting = () => { 

    const[save, setSave] = useState([]);
    const[show, setShow] = useState([]);
    const getUserDataHandler = (userName, teamName, comment, Id) => {
        setSave((prev) => {
             
            return [
                ...prev,
                {name: userName, team: teamName, comment: comment, Id: Math.random().toString()}
                
            ]
        }); 
    }

    const userData = {
        userName: 'Vinoth',
        passWord: 'Vinoth'
    } 

    const parentHand = (val) =>{
        setShow((prev) => {
            return[
                ...prev,
                [val]
            ]
        })
        
    }
    
    return <div>
        <Login uName = {userData.userName} pass={userData.passWord} parent={parentHand}/>
        <AddUser getUserData={getUserDataHandler} showVal={show} />
        <Print allVal = {save}/>

    </div>
}

export default Setting;