import './App.css';
import FilteringTable from './component/BasicTable';
// import BasicTable from './component/BasicTable';
// import SortingTable from './component/SortingTable';
function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
        {/* <SortingTable /> */}
          <FilteringTable />
    </div>
  );
}

export default App;
