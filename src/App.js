import './App.css';

// import BasicTable from './component/BasicTable';
// import SortingTable from './component/SortingTable';
// import { FilteringTable} from './component/FilteringTable';
import { PaginationTable} from './component/PaginationTable';
function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
        {/* <SortingTable /> */}
          {/* <FilteringTable /> */}
            <PaginationTable />
    </div>
  );
}

export default App;
