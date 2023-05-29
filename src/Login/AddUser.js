import './AddUser.css';
import { useState } from 'react';

const AddUser = (props) => {
    const[userName, setUserName] = useState('');
    const[teamName, setTeamName] = useState('');
    const[comment, setComment] = useState('');
    const[show, setShow] = useState(false); 
    

    const userNameHandler = (e) => {
        setUserName(e.target.value);
    }
    const teamNameHandler = (e) => {
        setTeamName(e.target.value);
    }
    const commentHandler = (e) => {
        setComment(e.target.value);
    }
    const clickHandler = (e) => {
        e.preventDefault();
        props.getUserData(userName, teamName, comment);
        setShow(props.showVal[0]);
        console.log(show);
        setUserName('');
        setTeamName('');
        setComment('');
    }

    return(
        <div>
            { props.showVal[0] &&
                <div className="Add_User_container">        
                    <form>
                        <div>
                            <label>User Name</label><br></br>
                            <input type='text' onChange={userNameHandler} value={userName}/>
                        </div>
                        <div>
                            <label>Team</label><br></br>
                            <input type='text' onChange={teamNameHandler} value={teamName}/>
                        </div>
                        <div>
                            <label>Comment</label><br></br>
                            <textarea rows="4" cols="50" onChange={commentHandler} value={comment}/>
                        </div>
                        <button type='submit' onClick={clickHandler}>Send</button>
                    </form>
        
    </div> }
    </div>)
}

export default AddUser;