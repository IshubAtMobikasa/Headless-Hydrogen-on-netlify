import React from "react";
import { Container,Row,Col } from "./../BootstrapIndex";
// import './FeatureCollections.client.css'
import TabComponent from "./Tab/TabComponent.client";


const FeatureCollections = ({myData}) => {
  console.log(myData)

  return (
    <div>
      <Container className="page_width">

        <div className="text-block custom-margin">
          <h2 className="main-heading">
            Skincare needs
            <br />
            commitment, not miracles
          </h2>
          <p className="subtitle">
            Your skin has a memory. In ten, twenty, thirty years from now, your
            skin will show the results of how it was treated today.
          </p>
        </div>

        <div className="slider">
          <TabComponent product={myData}/>
        </div>
        <div className="view_all pt-3">
          <button>View All</button>
        </div>
      </Container>
    </div>
  );
};

export default FeatureCollections;
