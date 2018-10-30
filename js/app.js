import { BinaryCalculator } from "./BinaryCalculator";
import { DecCalculator } from "./DecCalculator";

import "./style.scss";



$(document).ready(function() { //DomContentLoaded w jquerry - js czeka az zaladuje sie caly DOM
    const bitCalc = new BinaryCalculator(".binary-calculator");
    const decCalc = new DecCalculator(".dec-calculator");

})

