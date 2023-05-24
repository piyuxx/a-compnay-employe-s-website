import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { ContactPage, DashboardPage } from "./pages";
import { DashboardProvider } from "./context";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ContactPage />} />
          <Route
            path="/dashboard"
            element={
              <DashboardProvider>
                <DashboardPage />
              </DashboardProvider>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
