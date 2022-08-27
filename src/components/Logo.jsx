import React,{Fragment} from 'react';
/* Logo from assets */
import EdenLogo from '../assets/Eden-logo.svg';
/* css file */
import styled from './Logo.module.css';

const Logo = () => {
  return (
    <Fragment>
        <section className='d-flex justify-content-center py-5'>
          <img src={EdenLogo} alt="Eden logo" className={styled.logo}/>
          <h3 className={styled['logo-text']}>Eden</h3>
        </section>
    </Fragment>
  )
}

export default Logo