import SquareForm from '../SquareForm/SquareForm';
import SquareList from '../SquareList/SquareList';

const App = () => {
  return (
    <div className="App">
      <div class="main-header-container">
        <h1 id="main-header">
          Square Generator
        </h1>
      </div>
      <SquareForm />
      <SquareList />
    </div>
  );
}

export default App;
