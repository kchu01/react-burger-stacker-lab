import './App.css';
import IngredientList from './component/IngredientList.jsx';
import BurgerStack from './component/BurgerStack.jsx'

function App() {
  return (
    <div className="App burger-stacker">
      <IngredientList />
      <BurgerStack />
    </div>
  );
}

export default App;
