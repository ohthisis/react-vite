import React from 'react';
import Hero from '../components/Hero'
import Homecards from '../components/Homecards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePages = () => {
  return (
    <>
        <Hero title='Become a React dev' subtitle='Find a react job That Your positions'/>
        <Homecards/>
        <JobListings isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePages;

