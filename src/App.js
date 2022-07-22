// react-dom은 다른 파일에서 작업하는 것을 권장하나 여의치 않을 경우 App에서 작업한다.
import Filter from './components/Organisms/Filter/Filter';

function App() {
  const [food, setFood] = useState(["Burger", "Pizza", "Sandwich"]);
  
  return (
    <div className="App">
      <Multiselect
        isObject={false}
        onRemove={(event) => {
          console.log(event);
        }}
        onSelect={(event) => {
          console.log(event);
        }}
        options={food}
        selectedValues={["Burger"]}
        showCheckbox
      />
    </div>
  )
}

export default App;
