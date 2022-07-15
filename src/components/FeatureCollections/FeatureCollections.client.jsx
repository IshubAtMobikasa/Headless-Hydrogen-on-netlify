import React from "react";
import { Container } from "./../BootstrapIndex";
import './FeatureCollections.client.css'
const FeatureCollections = () => {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
};

export default FeatureCollections;
