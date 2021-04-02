import './App.css';
import { TableBody } from './components/TableBody';
import { TableFoot } from './components/TableFoot';
import { TableHead } from './components/TableHead';

function App() {
  return (
    <div className='App'>
      <body className='App-body'>
        <table style={{ borderCollapse: 'collapse', tableLayout: 'fixed', display: 'table' }}>
          <TableHead></TableHead>
          <TableBody></TableBody>
          <TableFoot></TableFoot>
          </table>
      </body>
    </div>
  );
}

export default App;