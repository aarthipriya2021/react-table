import './App.css';


// import BasicTable from './component/BasicTable';
// import SortingTable from './component/SortingTable';
// import { FilteringTable} from './component/FilteringTable';
// import { PaginationTable} from './component/PaginationTable';
// import { RowSelection} from './component/RowSelection'; 
// import { ColumnOrder } from './component/ColumnOrder';
// import { ColumnHiding } from './component/ColumnHiding';
import { StickyTable} from './component/StickyTable';


function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
        {/* <SortingTable /> */}
          {/* <FilteringTable /> */}
            {/* <PaginationTable /> */}
              {/* <RowSelection /> */}
                {/* <ColumnOrder /> */}
                  {/* <ColumnHiding /> */}
                    <StickyTable />
    </div>
  );
}

export default App;
