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

//  import Awords from './memoryGame/array.js';
//  import Apictures from './memoryGame/array.js';
//  import Bwords from './memoryGame/array.js';
//  import Bpictures from './memoryGame/array.js';
//  import Cwords from './memoryGame/array.js';
//  import Cpictures from './memoryGame/array.js';


const Awords = [
    {
  type: "1",
  image: require(`./memoryGame/imagesA/1.JPG`)
},
{
  type: "2",
  image: require(`./memoryGame/imagesA/2.JPG`)
},
{
  type: "3",
  image: require(`./memoryGame/imagesA/3.JPG`)
},
{
  type: "4",
  image: require(`./memoryGame/imagesA/4.JPG`)
},
{
  type: "5",
  image: require(`./memoryGame/imagesA/5.JPG`)
},
{
  type: "6",
  image: require(`./memoryGame/imagesA/6.JPG`)
}
]

const Apictures = [
    {
  type: "1",
  image: require(`./memoryGame/imagesA/11.jpg`)
},
{
  type: "2",
  image: require(`./memoryGame/imagesA/22.jpg`)
},
{
  type: "3",
  image: require(`./memoryGame/imagesA/33.jpg`)
},
{
  type: "4",
  image: require(`./memoryGame/imagesA/44.jpg`)
},
{
  type: "5",
  image: require(`./memoryGame/imagesA/55.jpg`)
},
{
  type: "6",
  image: require(`./memoryGame/imagesA/66.jpg`)
}
]

const Bwords = [
    {
  type: "1",
  image: require(`./memoryGame/imagesB/1.JPG`)
},
{
  type: "2",
  image: require(`./memoryGame/imagesB/2.JPG`)
},
{
  type: "3",
  image: require(`./memoryGame/imagesB/3.JPG`)
},
{
  type: "4",
  image: require(`./memoryGame/imagesB/4.JPG`)
},
{
  type: "5",
  image: require(`./memoryGame/imagesB/5.JPG`)
},
{
  type: "6",
  image: require(`./memoryGame/imagesB/6.JPG`)
}
]

const Bpictures = [
    {
  type: "1",
  image: require(`./memoryGame/imagesB/11.jpg`)
},
{
  type: "2",
  image: require(`./memoryGame/imagesB/22.jpg`)
},
{
  type: "3",
  image: require(`./memoryGame/imagesB/33.jpg`)
},
{
  type: "4",
  image: require(`./memoryGame/imagesB/44.jpg`)
},
{
  type: "5",
  image: require(`./memoryGame/imagesB/55.jpg`)
},
{
  type: "6",
  image: require(`./memoryGame/imagesB/66.jpg`)
}
]


const Cwords = [
    {
  type: "1",
  image: require(`./memoryGame/imagesC/1.JPG`)
},
{
  type: "2",
  image: require(`./memoryGame/imagesC/2.JPG`)
},
{
  type: "3",
  image: require(`./memoryGame/imagesC/3.JPG`)
},
{
  type: "4",
  image: require(`./memoryGame/imagesC/4.JPG`)
},
{
  type: "5",
  image: require(`./memoryGame/imagesC/5.JPG`)
},
{
  type: "6",
  image: require(`./memoryGame/imagesC/6.JPG`)
}
]

const Cpictures = [
    {
  type: "1",
  image: require(`./memoryGame/imagesC/11.jpg`)
},
{
  type: "2",
  image: require(`./memoryGame/imagesC/22.jpg`)
},
{
  type: "3",
  image: require(`./memoryGame/imagesC/33.jpg`)
},
{
  type: "4",
  image: require(`./memoryGame/imagesC/44.jpg`)
},
{
  type: "5",
  image: require(`./memoryGame/imagesC/55.jpg`)
},
{
  type: "6",
  image: require(`./memoryGame/imagesC/66.jpg`)
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
                        <Game words={Awords} pictures={Apictures}/>
                    </Route>
                    <Route path="/GameB">
                        <Game words={Bwords} pictures={Bpictures}/>
                    </Route>
                    <Route path="/GameC">
                        <Game words={Cwords} pictures={Cpictures}/>
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