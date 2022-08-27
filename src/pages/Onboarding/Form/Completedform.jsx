import React,{Fragment} from 'react';

import CalltoAction from '../../../components/CalltoAction';
import ActionButton from '../../../components/ActionButton';
import StepsUI from '../UI/StepsUI';

import CorrectLogo from '../../../assets/correct.svg';

import styled from './Completedform.module.css';

const Completeform = () => {
    //Text values for title, subtitle for CallToAction component
    const title = "Congratulations, Eren!";
    const subTitle = "You have completed onboarding, you can start using the Eden!";

    //text value for the action button
    const buttonTitle = "Launch Eden";
    
  return (
    <Fragment>
        <StepsUI stepCount={4} />
        <div className="text-center mx-auto">
            <img src={CorrectLogo} alt="correct" className={styled.formLogo}/>
        </div>
        <CalltoAction title={title} subTitle={subTitle}/>
        <div className='w-50 mx-auto my-4 py-3'>
            <ActionButton buttonTitle={buttonTitle}/>
        </div>
    </Fragment>
  )
}

export default Completeform