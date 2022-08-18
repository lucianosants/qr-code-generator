import QrCode from "./Components/QrCode";
import { Container } from "./Styles";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <Container>
        <QrCode />
      </Container>

      <GlobalStyles />
    </div>
  );
}

export default App;
