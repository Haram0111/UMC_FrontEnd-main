// react-dom은 다른 파일에서 작업하는 것을 권장하나 여의치 않을 경우 App에서 작업한다.
import Filter from './components/Organisms/Filter/Filter';

function App() {
  return (
    <div className="App">
      <h1>app</h1>
      <Filter></Filter>
    </div>
  );
}

export default App;
