// UI component which can be the hero section
import React from 'react';
import styled from './CalltoAction.module.css';

const CalltoAction = (props) => {
  return (
    <section className='text-center p-3'>
        <h1 className={styled.title}>{props.title}</h1>
        <p className={styled.subtitle}>{props.subTitle}</p>
    </section>
  )
}

export default CalltoAction