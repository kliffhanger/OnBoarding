import React, { useState, Fragment } from 'react';

import StepsUI from '../UI/StepsUI';
import ActionButton from '../../../components/ActionButton';
import CalltoAction from '../../../components/CalltoAction';

const FormTwo = (props) => {
    //Info from the input tabs are stored
    const [workspaceName, setWorkspaceName] = useState('');
    const [workspaceURL, setWorkspaceURL] = useState('');

    //Text values for title, subtitle for CallToAction component
    const title = "Let's set up a home for all your work";
    const subTitle = "You can always create another workspace later.";

    //text value for the action button
    const buttonTitle = "Create Workspace";

    //onsubmit fn recieves the values and does a simple check if empty 
    //if no issues then only stepTwoComplete fn is triggered to move to next form
    const addWorkspacehandler = (event) =>{
        event.preventDefault();
        if(workspaceName.trim().length === 0){
            alert("Please enter Workspace Name");
            return;
        }
        props.stepTwoComplete(true); //sends back to Onboarding component
    }

    //workspace name n workspace URl is stored using the below fn
    const addWorkspaceNameHandler = (e) =>{
        setWorkspaceName(e.target.value);
    }
    const addWorkspaceURLHandler = (e) =>{
        setWorkspaceURL(e.target.value);
    }

  return (
    <Fragment>
        <StepsUI stepCount={2}/>
        <CalltoAction title={title} subTitle={subTitle}/>
        <section className='w-50 mx-auto my-4 py-3'>
            <form onSubmit={addWorkspacehandler}>
                <div className="mb-3">
                    <label htmlFor="workspaceName" className="form-label fw-semibold">Workspace Name</label>
                    <input type="text" onChange={addWorkspaceNameHandler} className="form-control fw-light" id="workspaceName" placeholder='Eden'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="workspaceURL" className="form-label fw-semibold">Workspace URL <span className='fw-lighter'>(optional)</span></label>
                    <input type="text" onChange={addWorkspaceURLHandler} className="form-control fw-light" id="workspaceURL" placeholder='www.eden.com/  Example'/>
                </div>
                <div className="py-3">
                    <ActionButton buttonTitle={buttonTitle}/> 
                </div>
            </form>
        </section>
    </Fragment>
  )
}

export default FormTwo