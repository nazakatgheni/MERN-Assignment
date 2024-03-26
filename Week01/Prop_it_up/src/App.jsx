import './App.css'
// import Assignment from './components/Assignment'
import PropItUp from './components/PropItUp';

function App() {

  return (
    <>
      {/* <Assignment /> */}
      <PropItUp firstName={"Doe"} lastName={"Jane"} age={45} hairColor={"Black"} />
      <PropItUp firstName={"Smith"} lastName={"John"} age={88} hairColor={"Brown"} />
      <PropItUp firstName={"Fillmore"} lastName={"Millard"} age={50} hairColor={"Brown"} />
      <PropItUp firstName={"Smith"} lastName={"Maria"} age={62} hairColor={"Brown"} />
    </>
  );
}

export default App;