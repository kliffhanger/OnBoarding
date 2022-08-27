// This component shows the progress of the form application in the form
// of circled numbers on the UI.
//Below code takes a value using props and based on which form the user is
//on it highlights the circle ex if the user is on  2nd step then 1st n 2nd 
//are highlighted.

import React from 'react';
import styled from './StepsUI.module.css';

const StepsUI = (props) => {

  const step = props.stepCount; //takes a value from the form component

  //sets each circle and line to be empty by default
  let circleColor1 = [styled.circleEmpty];
  let lineColor1 = [styled.lineEmpty];

  let circleColor2 = [styled.circleEmpty];
  let lineColor2 = [styled.lineEmpty];
  
  let circleColor3 = [styled.circleEmpty];
  let lineColor3 = [styled.lineEmpty];

  let circleColor4 = [styled.circleEmpty];
  let lineColor4 = [styled.lineEmpty];

  //changes the circle and line to be filled based on the step value
  if(step >= 1){
    circleColor1 = [styled.circleFilled];
    lineColor1 = [styled.lineFilled];
  }if(step >= 2){
    circleColor2 = [styled.circleFilled];
    lineColor2 = [styled.lineFilled];
  }if(step >=3){
    circleColor3 = [styled.circleFilled];
    lineColor3 = [styled.lineFilled];
  }if(step ==4){
    circleColor4 = [styled.circleFilled];
    lineColor4 = [styled.lineFilled];
  }


  return (
    <section className='d-flex justify-content-center align-items-center py-5 '>
        <div className={`${styled.stepCircle} ${circleColor1} `}>1</div>
        <hr className={`${lineColor1} `}/>
        <hr className={`${lineColor2} `}/>
        <div className={`${styled.stepCircle} ${circleColor2} `}>2</div>
        <hr className={`${lineColor2} `}/>
        <hr className={`${lineColor3} `}/>
        <div className={`${styled.stepCircle} ${circleColor3} `}>3</div>
        <hr className={`${lineColor3} `}/>
        <hr className={`${lineColor4} `}/>
        <div className={`${styled.stepCircle} ${circleColor4} `}>4</div>
    </section>
  )
}

export default StepsUI