import {addHeader, addParagraph} from './helpers'; 

addHeader('This function is from the helper file!'); 

import add, {multiply} from './add'; 

addHeader(`54 + 67 = ${add (54, 67)}`); 
addParagraph("This is a new paragraph!!!!!!!! I WANT SOME COFFEE!!!!!!"); 
multiply(4,5); 