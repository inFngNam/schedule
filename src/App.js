import "./App.css";
import { Clock } from "./components/Clock";
import { TableBody } from "./components/TableBody";
import { TableHead } from "./components/TableHead";

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <table>
          <TableHead></TableHead>
          <TableBody></TableBody>
        </table>
        <Clock time={new Date()}></Clock>
      </body>
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