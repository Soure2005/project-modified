import './App.css';
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">

      <Sidebar />
      <main className="Main">
         <MainDash />
      </main>
     
      <section className="Right"></section>

    </div>
  );
}

export default App;
