import RecipeItem from './recipe-item/RecipleItem';

function App() {
  return (
    <div>
      <RecipeItem recipe={{ id: 1, name: 'lazania' }} />
      <RecipeItem recipe={{ id: 2, name: 'test2' }} />
      <RecipeItem recipe={{ id: 3, name: 'test3' }} />
    </div>
  );
}

export default App;
