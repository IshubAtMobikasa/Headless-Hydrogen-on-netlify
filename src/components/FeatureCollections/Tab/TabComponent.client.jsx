import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "./../../BootstrapIndex";
import SliderComponent from "./Slider/SliderComponent.client";
// import './TabComponent.css'
const TabComponent = ({ product }) => {
  console.log(product, "from the Tab TabComponent");
  const {
    Acne,
    AntiAgening,
    DamagedHair,
    Dandruff,
    HairFall,
    Hydration,
    Hyperpigmentation,
    Regimes,
    SunProtection,
  } = product;

  console.log(Acne,"Product Tab Component ")
  return (
    <div>
      <Tabs className="container">
        <TabList className={`react-tabs__tab-list parent`}>
          <Tab>Skin</Tab>
          <Tab>Hair</Tab>
          <Tab>Regimes</Tab>
        </TabList>
        <TabPanel>
          <Tabs defaultIndex={0} className="active_list_element">
            <TabList>
              <Tab className="sub_list">
                Sun Protection
              </Tab>
              <Tab className="sub_list">
                Acne
              </Tab>
              <Tab className="sub_list">
                Hyperpigmentation
              </Tab>
              <Tab className="sub_list">
                Hydration
              </Tab>
              <Tab className="sub_list">
                Anti-Ageing
              </Tab>
            </TabList>
            <TabPanel>
              <SliderComponent product={SunProtection} />
            </TabPanel>
            <TabPanel>
              <SliderComponent product={Acne} />
            </TabPanel>
            <TabPanel>
              <SliderComponent product={Hyperpigmentation} />
            </TabPanel>
            <TabPanel>
              <SliderComponent product={Hydration} />
            </TabPanel>
            <TabPanel>
              <SliderComponent product={AntiAgening} />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel style={{ fontSize: "20px", margin: "20px" }}>
          <Tabs defaultIndex={1} className="active_list_element">
            <TabList>
              <Tab className="sub_list">
                Hair Fall
              </Tab>
              <Tab className="sub_list">
                Dandruff
              </Tab>
              <Tab className="sub_list">
                Damaged Hair
              </Tab>
            </TabList>
            <TabPanel>
              <SliderComponent product={HairFall} />
            </TabPanel>
            <TabPanel>
              <SliderComponent product={Dandruff} />
            </TabPanel>
            <TabPanel>
              <SliderComponent product={DamagedHair} />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs defaultIndex={1} className="active_list_element">
            <TabList>
              <Tab className="sub_list">Combos</Tab>
            </TabList>
            <TabPanel>
              <SliderComponent product={Regimes} />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabComponent;
