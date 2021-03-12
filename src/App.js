import './App.css';
import IngredientList from './component/IngredientList.jsx';
import BurgerStack from './component/BurgerStack.jsx'

function App() {


  // click handler
  const handleIngredientClick = event => {
    console.log(event)
    console.log(event.target.innertext)
  }

  return (
    <div className="App burger-stacker">
      <IngredientList handleIngredientClick={handleIngredientClick} />
      <BurgerStack />
    </div>
  );
}

export default App;
