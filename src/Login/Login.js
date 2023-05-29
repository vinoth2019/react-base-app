import { Button, Container, Row, Col } from 'bootstrap-4-react'; 
import { Form } from 'bootstrap-4-react/lib/components';
import { useState } from 'react';
import './Login.css';

const Login = (props) => { 
    const uname = props.uName;
    const Pass = props.pass;

    // console.log(uname, Pass)

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [submit, setSubmit] = useState(true); 
    
     
    const userNameHandler = (e) => {
    //  console.log(e.target.value)
        setName(e.target.value)
    }

    const userPassHandler = (e) => {
        // console.log(e.target.value)
        setPass(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(name === uname && pass === Pass){ 
            console.log('Success Login Welcome ' + name ); 
            setSubmit(false);  
            props.parent(submit);
        }
        else{
            console.log('OOPS Wrong Data');
            alert('OOPS Wrong Data')
        }
        setName('');
        setPass('') 
    }

    return(
        <div>
            { submit &&
                <Container className='login'bg = 'secondary'>
                <Row display="flex" justifyContent="center"  m='3' >            
                    <Form p='3'>
                        <Col text="white">
                            <label>UserName</label><br></br>
                            <input type='text' onChange={userNameHandler} value={name} />
                        </Col>
                        <Col text="white">
                            <label>Password</label><br></br>
                            <input type='password' onChange={userPassHandler} value={pass}/><br></br><br></br>
                        </Col>
                        
                        <Col text='center'>   
                            <Button primary type='submit' onClick={submitHandler}>Submit</Button>
                        </Col>
                        
                    </Form>
                </Row>
            </Container>
            }
        
            
        </div>
    )
}

export default Login;