import Header from './header/Header';
import RecipeItem from './recipe-item/RecipleItem';
import User from './user/user';

function App() {
  return (
    <section>
      <Header />
      <User />
      <div>
        <RecipeItem recipe={{ id: 1, name: 'lazania' }} />
        <RecipeItem recipe={{ id: 2, name: 'test2' }} />
        <RecipeItem recipe={{ id: 3, name: 'test3' }} />
        <RecipeItem recipe={{ id: 4, name: 'test4' }} />
      </div></section>

  );
}

export default App;
