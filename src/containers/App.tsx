import { SignupForm, AccountRequestConfirmation } from "../pages";
import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components";
const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="detail" element={<AccountRequestConfirmation />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
