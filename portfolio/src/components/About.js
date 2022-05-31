import React from 'react';
import { Link } from 'react-scroll';

// import img
import Image from '../assets/img/Aboutimg.png';
import {navigation} from "./../data"

const About = () => {
  console.log(navigation[3].href,"nav")
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img style={{margin:"auto"}}
            className='object-cover h-full w-[500px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Aakash
              </h2>
              <p className='mb-4 text-accent'>
                 Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Hey my name is Aakash , I live in Bahadurgarh , India. 
                I am a Front End developer with hands on project experience,  building websites and web applications . 
                I am passoniate about building excellent software that imporess the lives of those around me.
                 I specialize in creating software for clients ranging from individuals and small-business all the way to large enterprise corporation. 
                What would you do if you had a software expert available at your fingerpoints.
                My role is to write and style the front-end and backend components that meet the requirements of our mocks and fulfill our user stories. <br />
                <br />
              </p>
            </div>
           {/* <a href={navigation[3].href}  >
           <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
           </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
