/* main.js*/
//import * as md from "./module.js"; //참조변수
import { module, area } from "./module.js";
import sq, { circle } from "./moduleone.js";

//md.module("test");
//md.area(10, 20);

module("test");
area(10, 20);
sq();
circle();
