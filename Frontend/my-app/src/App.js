import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from "./styles/layouts"
import Orb from "./components/orb/Orb";
import Navigation from "./components/Navigations/navigation";

function App() {

  return (
    <AppStyled  bg ={bg} className="App">
      <Orb>
      <h1>
      
      </h1>

      </Orb>
    
      <MainLayout>
        <Navigation />
        

      </MainLayout>
      
    </AppStyled>
  );
}


const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg}); 
position: relative;
`;

export default App;
