import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./GetInTouchStyles";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GetInTouch = () => {
  return (
    <Box>
      <h1 style={{ color: '#760326', 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GET IN TOUCH
      </h1>
      <Container>
      
       
         
         

            <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <input
          type="text"
          placeholder="Your name"
          name="name"
          maxlength="4" size="6"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
    <input  maxlength="4" size="600" type="submit" value="Submit"></input>
  
      
           
           
         
      </Container>
    </Box>
    
  );
};
// export default Footer;


