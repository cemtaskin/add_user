import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErroModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';


const AddUser = (props) =>{
    const [enteredUserName,setEnteredUserName]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError] = useState();


    const usernameChangeHandler = (event)=>{
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    };

    const errorHandler = () =>{
        setError(null);
    }

    const addUserHandler = (event) =>{
        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().trim === 0){
            setError({title:'Invalid Input',message:'Please enter a valid name and age (non-empty values).'});
            return;
        }

        if (+enteredAge<1){
            setError({title:'Invalid age',message:'Please enter a valid age (>0)'});
            return;
        }

        props.onAddUser(enteredUserName,enteredAge);
        
        setEnteredUserName('');
        setEnteredAge('');
    }


    return (
        <Wrapper>
        { error && <ErroModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
        <Card cssClass={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age(Years)</label>
            <input id="age" type="number" value={enteredAge}  onChange={ageChangeHandler}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </Wrapper>
    );
};

export default AddUser;