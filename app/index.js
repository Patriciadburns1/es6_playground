import {addParagraph} from './helpers'; 
import SuperPerson from './person'; 

const Patricia = new SuperPerson("Patricia", "see through walls"); 

addParagraph(Patricia.talk("I like to go to the ballet")); 

addParagraph(Patricia.saySuperPower("fly")); 