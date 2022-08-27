//Here the main file is Onboarding which has the following components
//     Logo(UI component)
//     Forms(the main component of the page).
// there are 4 forms based on the steps in onboarding which are as follow
//    FormOne - containing first name n display name
//    FormTwo - containing workspace details
//    FormThree - containing the use of the platform
//    Completed - containing the final confirmation
// 
// Each form has a
//      StepUI(shows the progress of the form)
//      calltoAction(text box)
//      form(the actual filling component)
//      ActionButton(to submit the form) 

import React,{ useState,Fragment} from 'react';

import Logo from '../../components/Logo';
import FormOne from './Form/FormOne';
import FormTwo from './Form/FormTwo';
import FormThree from './Form/FormThree';
import Completedform from './Form/Completedform';

const Onboarding = () => {

  //useState is used to keep track of the form pages n to load the repective form 
  const [progressOne, setProgressOne] = useState(true);
  const [progressTwo, setProgressTwo] = useState(false);
  const [progressThree, setProgressThree] = useState(false);
  const [progressFour, setProgressFour] = useState(false);

  //the below fn's check if the specified form is filled n helps in loading the next form
  const CheckCompletionOfStepOne = (val) =>{
    if(val === true){
      setProgressOne(false);
      setProgressTwo(true);
    }
  };

  const CheckCompletionOfStepTwo = (val) =>{
    if(val === true){
      setProgressTwo(false);
      setProgressThree(true);
    }
  }
  const CheckCompletionOfStepThree = (val) =>{
    if(val === true){
      setProgressThree(false);
      setProgressFour(true);
    }
  }
  
  return (
    <Fragment>
        <Logo />
        {progressOne && <FormOne  stepOneComplete={CheckCompletionOfStepOne} />}
        {progressTwo && <FormTwo stepTwoComplete={CheckCompletionOfStepTwo}/>}
        {progressThree && <FormThree stepThreeComplete={CheckCompletionOfStepThree}/>}
        {progressFour && <Completedform/>}
    </Fragment>
  )
}

export default Onboarding