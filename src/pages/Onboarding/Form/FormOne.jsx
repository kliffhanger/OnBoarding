import React, {useState, Fragment, Component} from 'react';

import StepsUI from '../UI/StepsUI'; 
import ActionButton from '../../../components/ActionButton';
import CalltoAction from '../../../components/CalltoAction';

const FormOne = (props) => {
    //Info from the input tabs are stored
    const [userName, setUserName] = useState('');
    const [displayName, setDisplayName] = useState('');

    //Text values for title, subtitle for CallToAction component
    const title = "Welcome! First things first...";
    const subTitle = "You can always change them later."; 

    //text value for the action button
    const buttonTitle = "Create Workspace";

    //onsubmit fn recieves the values and does a simple check if empty 
    //if no issues then only stepOneComplete fn is triggered to move to next form
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(userName.trim().length === 0){
            alert("Please enter First name");
            return;
        } else if(displayName.trim().length === 0){
            alert("Please enter Display name");
            return;
        }
    
        props.stepOneComplete(true); //sends back to Onboarding component
    };

    //Username n displayname is stored using the below fn
    const addUsernameHandler = (e) =>{
        setUserName(e.target.value);
    };
    const addUserDisplaynameHandler = (e) =>{
        setDisplayName(e.target.value);
    };

  return (
    <Fragment>
        <StepsUI stepCount={1}/>
        <CalltoAction title={title} subTitle={subTitle}/>
        <section className='w-50 mx-auto my-4 py-3'> 
            <form onSubmit={addUserHandler}>
                <div className="mb-3">
                    <label htmlFor="userFirstName" className="form-label fw-semibold">First Name</label>
                    <input type="text" className="form-control fw-light" id="userFirstName" onChange={addUsernameHandler} placeholder='Steve Jobs'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userDisplayName" className="form-label fw-semibold">Display Name </label>
                    <input type="text" className="form-control fw-light" id="userDisplayName" onChange={addUserDisplaynameHandler} placeholder='Steve'/>
                </div>
                <div className="py-3">
                    <ActionButton buttonTitle={buttonTitle}/> 
                </div>
            </form>
        </section>
    </Fragment>
  )
}

export default FormOne