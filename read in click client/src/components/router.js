import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
//import NewUser from './newUser';
import HomePage from './login/homePage';
import Mishkal from './mishkal/mishkal';
import OneSyllable from './mishkal/onesyllable/oneSyllable';
import TwoSyllable from './mishkal/twoSyllable/twoSyllable';
import Consonant from './mishkal/consonant/consonant';
import SameVowel from './mishkal/twoSyllable/sameVowel';
import DifferentVowel from './mishkal/twoSyllable/differentVowel';
import Choose from './choose'
import SignUp from './login/signUp';
import SignIn from './login/signIn';
import Family from './completeWords/family'
import Holiday from './Holiday/holiday'
import CheckboxLabels from './Holiday/specificHoliday'
import Shabbat from './Shabbat/shabbat'
import Downloads from './Downloads/downloads'
import Game from './memoryGame/game';
import ChooseGame from './memoryGame/chooseGame';
import Emotions from './Emotions/emotions';
import ShoWord from './mishkal/twoSyllable/ShoWord';


const A = [
      {
    type: "1",
    image: require(`./memoryGame/images/1.jpg`)
  },
  {
    type: "2",
    image: require(`./memoryGame/images/2.jpg`)
  },
  {
    type: "3",
    image: require(`./memoryGame/images/3.jpg`)
  },
  {
    type: "4",
    image: require(`./memoryGame/images/4.jpg`)
  },
  {
    type: "5",
    image: require(`./memoryGame/images/5.jpg`)
  },
  {
    type: "6",
    image: require(`./memoryGame/images/6.jpg`)
  }
]
function Routing() {
    return (
        <div>
            <Router>
                <Switch>
                <Route path="/emotions">
                        <Emotions />
                    </Route>
                <Route path="/chooseGame">
                        <ChooseGame />
                    </Route>
                    <Route path="/GameA">
                        <Game arr={A}/>
                    </Route>
                    <Route path="/GameB">
                        <Game arr={A}/>
                    </Route>
                    <Route path="/GameC">
                        <Game arr={A}/>
                    </Route>
                    <Route path="/SameVowel">
                        <SameVowel />
                    </Route>
                    <Route path="/DifferentVowel">
                        <DifferentVowel />
                    </Route>
                    <Route path="/SameVowel">
                        <SameVowel />
                    </Route>
                    <Route path="/Consonant">
                        <Consonant />
                    </Route>
                    <Route path="/TwoSyllable">
                        <TwoSyllable />
                    </Route>
                    <Route path="/ShoWord">
                        <ShoWord />
                    </Route>
                    <Route path="/OneSyllable">
                        <OneSyllable />
                    </Route>
                    <Route path="/CheckboxLabels">
                        <CheckboxLabels />
                    </Route>
                    <Route path="/Downloads">
                        <Downloads />
                    </Route>
                    <Route path="/Shabbat">
                        <Shabbat />
                    </Route>
                    <Route path="/Holiday">
                        <Holiday />
                    </Route>
                    <Route path="/Family">
                        <Family />
                    </Route>
                    <Route path="/Mishkal">
                        <Mishkal />
                    </Route>
                    <Route path="/choose">
                        <Choose />
                    </Route>
                    <Route path="/signIn">
                        <SignIn />
                    </Route>
                    <Route path="/signUp">
                        <SignUp />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}
export default Routing;