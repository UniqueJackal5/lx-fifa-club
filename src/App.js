import './App.css';
import logo from './lx fifa club.png';

function App() {
  return (
    <div className="body">
      <div className="topSection">
        <div>
          <img src={logo} alt="lx fifa club" className="logo"></img>
        </div>
        <div className="wlcm">
          <h1 className="">Welcome to the <span>LAXMIMARGA FIFA CLUB</span></h1>
        </div>

      </div>
      <div>
        <h2 className="marginMid">Laxmimarga FIFA CLUB</h2>
        <div className="orientFlex">
          <div>
          <h4 className="marginMid">Members</h4>
            <ol>
              <li>Santosh Adhikari</li>
              <li>Ajaya Shrestha</li>
              <li>Ajay B.K.</li>
              <li>Sanjay Rai</li>
              <li>Sanjay Subba</li>
              <li>Ashok Tamang</li>
              <li>Saroj Rai</li>
              <li>Indra Baskota</li>
              <li>Milan Subedi</li>
              <li>Tikaram Limbu</li>
              <li>Bibisan Khatri</li>
            </ol>
          </div>
          <div>
          <h4 className="marginMid">Management</h4>
            <ol>
              <li>Manager/Head(CEO)</li>
              <li>Accountant(CFO)</li>
              <li>Officers</li>
              <li>Members</li>
            </ol>
            <h4 className="marginMid">Team</h4>
            <ol>
              <li>Event Hoster</li>
              <li>Live Creation/Video Creation</li>
            </ol>
          </div>
          
        </div>
        <div>
        <h4 className="marginMid">Our Sponsors</h4>
        </div>
        <div>
          <div className="orientFlex">
            <div>
              <ol>
                <li>Charicha Institute</li>
                <li>Charicha Gaming</li>
                <li>Mount Everest English Boarding School</li>
                <li>Belbari Municipality</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;