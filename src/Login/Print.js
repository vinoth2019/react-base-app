import './Print.css';
import { FaUserCircle } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { FiMessageSquare } from 'react-icons/fi';

const Print = (props) =>{
    return(
        <div className="print_container">
            <ul>
                {props.allVal.map((val) => (
                    <li key={val.Id}>
                        <div className='name'><FaUserCircle /> {val.name}</div>
                        <div><RiTeamFill /> {val.team}</div>
                        <div><FiMessageSquare /> {val.comment}</div>  
                    </li>
                    ))}
                
            </ul>
        </div>
    )
}

export default Print;