import React, {useState, Fragment} from 'react';

import UserLogo from '../../../assets/singleUser.svg'; //single user svg
import GroupLogo from '../../../assets/multiUser.svg'; //multi user svg

import ActionButton from '../../../components/ActionButton';
import CalltoAction from '../../../components/CalltoAction';
import StepsUI from '../UI/StepsUI';

import styled from './FormThree.module.css';

const FormThree = (props) => {
    //Info from the input tab is stored
    const [useage, setUseage] = useState('');

    //Text values for title, subtitle for CallToAction component
    const title = "how are you planning to use Eden?";
    const subTitle = "We'll streamline your setup experience accordingly";

    //text value for the action button
    const buttonTitle = "Create Workspace";

    //onsubmit fn recieves the values and does a simple check if empty 
    //if no issues then only stepthreeComplete fn is triggered to move to next form
    const UseageHandler = (event) =>{
        event.preventDefault();
        if(useage === ''){
            alert("kindly choose between the 2 options");
            return;
        }
        props.stepThreeComplete(true);  //sends back to Onboarding component
    }

    //Useage data is stored
    const MyselfHandler = () =>{
        setUseage('individual');  
    }
    const TeamHandler = () =>{
        setUseage('team');  
    }
  return (
    <Fragment>
        <StepsUI stepCount={3}/>
        <CalltoAction title={title} subTitle={subTitle}/>
        <section className={styled.boxContent}>
            <form onSubmit={UseageHandler}>
                <div className='d-sm-flex gap-4 mb-3'>
                    <div className={styled.myselforTeam} onClick={MyselfHandler}>
                        <img src={UserLogo} alt='user logo' className={styled.formLogo}/>
                        <h5>For myself</h5>
                        <p>Write better. think more clearly. Stay organized.</p>
                    </div>
                    <div className={styled.myselforTeam} onClick={TeamHandler}>
                        <img src={GroupLogo} alt='group logo' className={styled.formLogo}/>
                        <h5>With my team</h5>
                        <p>Wikis, docs, tasks & projects, all in one place.</p>
                    </div>
                </div>
                <div className="py-3">
                    <ActionButton buttonTitle={buttonTitle}/> 
                </div>
            </form>
        </section>
    </Fragment>
  )
}

export default FormThree