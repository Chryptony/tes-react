
import './App.css';
import images from './images/logo512.png'
// kalau gambarnya ada 10 biji berarti import imagenya ada 10 kali copy paste
// kata image di kata setelah import adalah variabel . tanda " . " titik di "./images/logo512.png" mewakili src bukan basic react
function App() {
  return (
    <div className="App">
      <h1>belajar react</h1>
      <p>bla bla bla</p>
      <img src={images}/>
    </div>
  );
}

export default App;
// biasanya pakai buat view homepage