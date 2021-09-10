import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h5 className="text-primary"> olá mundo</h5>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
