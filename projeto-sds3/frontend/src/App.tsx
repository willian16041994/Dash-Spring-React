import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarCharts from "components/BarCharts";
import DonutChart from "components/DonutChart"
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="text-primary py-3 text-center"> DashBoard de vendas</h2>
        <div className="row px-3">
          
          <div className="col-sm-6">
            <h5 className="text-secondary text-center">taxa de sucesso(%)</h5>
            <BarCharts />
          </div>

          <div className="col-sm-6">
            <h5 className="text-secondary text-center">taxa de sucesso(%)</h5>
            <DonutChart />
          </div>

        </div>
        <h2 className="text-primary py-3 text-center"> Vendas</h2>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
