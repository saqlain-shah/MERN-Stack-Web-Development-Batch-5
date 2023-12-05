// App.jsx
import Child from "./components/child"
import Color from "./components/color"
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";
import FirstComp from "./components/FirstComp";
import Form from "./components/Form";
import MyFirstComp from "./components/MyFirstComp";
import MySecondComponent from "./components/MySecondComponent";
import Mysignupform from "./components/Mysignupform"
import NewComponent from "./components/NewComponent"
import Parent from "./components/parent"
import SecondComp from "./components/SecondComp";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";




const App = () => {
  return (
    <div>
      <Child/> 
      <Color/> 
      <Counter/>
      <Counter2/>
      <Counter3/>
      <FirstComp/>
      <Form/>
      <MyFirstComp/>
      <MySecondComponent/>
      <Mysignupform/>
      <NewComponent/>
      <Parent/>
      <SecondComp/>
      <SignIn/>
      <SignUp/>
    </div>
  );
};

export default App;
