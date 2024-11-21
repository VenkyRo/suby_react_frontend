import React from 'react'
import TopBar from '../components/TopBar'
import ItemDisplay from '../components/ItemDisplay'
import Chanins from '../components/Chanins';
import FirmCollection from '../components/FirmCollection';
import ProductMenu from '../components/ProductMenu';

const LandingPage = () => {
  return (
    <>
      <div>
        <TopBar></TopBar>

        <div className="landiSection">
          <ItemDisplay></ItemDisplay>
          <Chanins></Chanins>
          <FirmCollection></FirmCollection>
        </div>
      </div>
    </>
  );
}

export default LandingPage