/* Untuk bisa mewarnai page tertentu , pakainya import nama css nya */
// biasanya pakai buat view homepage
// boleh npm run start atau npm start
// 1 app.js hanya bisa pakai 1 div
// column , button , dan sebagainya ditaruh di file terpisah dan ditaruh di komponen , jadi hitungan satu website banyak komponen
// method post , edit , dan remove caranya sama cuma beda file
//
import React, {useState} from 'react';
import './components/Column';
import './App.css';
import images from './images/logo512.png'
import Profile from './components/Profile'
// ingat buat import profile dan lainnya deengan tulisan ^^^
// Lalu tulis <Profile></Profile> untuk menghubungkan profile ke app.js
// yang profile , bisa diisi dengan <Profile name={"tony"} hobby={"makan"} ></Profile>
// kalau gambarnya ada 10 biji berarti import imagenya ada 10 kali copy paste
// kata image di kata setelah import adalah variabel . tanda " . " titik di "./images/logo512.png" mewakili src bukan basic react
// <hr/> untuk membagi div
// penempatan tambahan harus menaruh div di dalam div
function App() {
  const [users, setUsers] = useState([
    {
      name: "koko",
      hobby: "makan",
    },
    {
      name: "jeni",
      hobby: "minum",
    },
    { 
      name:"tedi",
      hobby:"main game",
    }
  ]) 
  // jika ingin membuat component, pastikan ada return

  const NowLoading = () => {
    return (
      <div>
        <h3>Loading data ....</h3>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>belajar react</h1>
      <p>bla bla bla</p>
      <img src={images}/>
      <hr/>
      <div>
        <h3> hello koko</h3>
      </div>
      <div>
        <h3> hello koko</h3>
      </div>
      <div>
        <h3> hello koko</h3>
      </div>
      <div class="col">
        <a href="https://api.whatsapp.com/send?phone=6281287871362&text=halo kak , saya mau membuat Website. Saya tau info ini dari Tony's Web Design">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50a" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16" >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
      </div>
      {/* <Profile name={"tony"} hobby={"makan"} ></Profile>
      <Profile name={"jeni"} hobby={"minum"} ></Profile>
      <Profile name={"tedi"} hobby={"main game"} ></Profile>  */}
      {
        users.map(user => {
          const {name, hobby} = user
          return(
            <Profile name={name} hobby={hobby} />
          )
         })
      }
      <NowLoading/>
    </div>
  );
}

export default App;
