import "./App.css";
import { TableBody } from "./components/TableBody";
import { TableHead } from "./components/TableHead";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <TableHead></TableHead>
          <TableBody></TableBody>
        </table>
      </header>
    </div>
  );

  // function row(index, insideIndex) {
  //   if (insideIndex === 0) {
  //     return <Cell content={index.toString()} column={insideIndex}></Cell>;
  //   }
  //   return <Cell content={insideIndex.toString()} column={insideIndex}></Cell>;
  // }
}

export default App;