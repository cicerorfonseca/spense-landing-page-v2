import React from 'react';
import desktopimg from '../assets/imgs/hero-image-desktop.png';
import tabletimg from '../assets/imgs/hero-image-tablet.png';
import mobileimg from '../assets/imgs/hero-image-mobile.png';
import checkmark from '../assets/imgs/checkmark.svg';
import Button from './Button';

const HeroBanner = () => {
  return (
    <section className='hero-banner container'>
      <picture className='hero-image'>
        <source srcSet={desktopimg} media='(min-width: 1200px)' />
        <source srcSet={tabletimg} media='(min-width: 768px)' />
        <img src={mobileimg} alt='April earning withdraw' />
      </picture>
      <h1>Share your unfiltered thoughts. Get paid.</h1>
      <p>
        Spence is an open platform for individuals to share their unfiltered thoughts. Discus the topics you love, and get paid for doing{' '}
        <em>just</em> that.
      </p>
      <ul>
        <li>
          <img src={checkmark} alt='checkmark' />
          Receive 99% of the earnings.
        </li>
        <li>
          <img src={checkmark} alt='checkmark' />
          Get paid via Debit Card, ACH, or PayPal.
        </li>
        <li>
          <img src={checkmark} alt='checkmark' />
          Withdraw your earnings anytime.
        </li>
      </ul>
      <div className='form-container'>
        <input type='text' id='email' placeholder='john@example.com' />
        <Button buttonType='primary' text='Get Started' />
      </div>
    </section>
  );
};

export default HeroBanner;
