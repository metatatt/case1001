import React from 'react';
import Zoom from "react-reveal/Zoom";
// import MyButton from '../Utils/myButton';

import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react';
const img_url = "";

const PPTUpload2 = () => {
  const data = [
    {
      cath_name: "#CV",
      cath_name2: "" ,
      cath_info:
        "20 electrodes, spacing 2-6-2, ring elec 1mm",
      linkto: "https://onlinelibrary.wiley.com/doi/epdf/10.1002/joa3.12308",
      img_url : "https://metatatt.github.io/case25/OpenSlide1.jpg",
      delay: 500
    },
    {
      cath_name: "#case",
      cath_name2: "" ,
      cath_info:
        "20 electrodes, spacing 2-6-2, ring elec 1mm",
      linkto: "https://onlinelibrary.wiley.com/doi/epdf/10.1002/joa3.12308",
      img_url : "https://metatatt.github.io/case25/OpenSlide2.jpg",
      delay: 500
    },
    {
      cath_name: "#workflow",
      cath_name2: "" ,
      cath_info:
        "10 electrodes, spacing 2-6-2, ring elec 1mm",
      linkto: "https://onlinelibrary.wiley.com/doi/epdf/10.1002/joa3.12308",
      img_url : "https://metatatt.github.io/case25/OpenSlide3.jpg",
      delay: 500
    }
  ];

 
  const showBoxes = () =>
  data.map((item, i) => (
    <Zoom delay={item.delay} key={i}>
      <div className="pricing_item">
          <div className="dpricing_inner_wrapper">
          <Form.Field
            control={Checkbox}
            label={item.cath_name}
            value='T2'
          /> 
         <div>{item.cath_name2}</div>
          </div>
          <div className="pricing_title">
            <img src = {`${item.img_url}`} height={160} width={282} />
          </div>
          
      </div>
    </Zoom>
  ));
  return (
    // <div className="bck_white">
    //   <div className="center_wrapper pricing_section">
    <div className="segment" align="center">
      <div classname="grid" align="left" style={{width: 800}}>
        <p></p><p>Theme</p>
        <div className="pricing_wrapper">{showBoxes()}</div>     
      </div>
    </div>


  );
};

export default PPTUpload2;

