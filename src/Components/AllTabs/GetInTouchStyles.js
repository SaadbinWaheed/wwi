import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: white;
  position: absolute;
  ${'' /* position: "fixed", */}
  
  ${'' /* bottom: 700, */}
  ${'' /* padding-bottom:60px
  width: 1000%;
   */}
   
 ${'' /* border-top:2px solid red; */}

 padding-bottom:60px;
 width: 100%;
 bottom: 0;
 color: white;
 font-size: 25px;
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    height: 40,
    borderColor: 'orange', 
    
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
    color: #760326;
      transition: 200ms ease-in;
  }
`;

   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;