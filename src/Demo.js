import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/Demo.css';
import './css/Responsive.css';
import pic1 from "./img/pic1.png";
import pic2 from "./img/pic2.png";
import pic3 from "./img/pic3.png";
import logo from "./img/logo.png";
import call from "./img/call.png";
import facebook from "./img/facebook.png";
import crigroups from "./img/crigroups.png";

class Demo extends Component{
	render(){
		return <div>

			<section className="color">

		        <section className="section1">

		            <div className="firsthalf">
		                <img src={pic1} alt="Image" />
		            </div>

		            <div className="secondhalf">

		                <div className="logo">
		                    <img src={logo} alt="logo" />
		                </div>

		                <div className="div1">
		                    <p><h6>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h6></p>
		                </div>

		                <div className="div2">
		                    <ul>
		                        <li><h6>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</h6></li>
		                        <li><h6>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</h6></li>
		                    </ul>
		                </div>
		                
		                <div className="image">
		                    <img src={pic2} alt="Image" />
		                </div>

		                <div className="div3">
		                    <p><h6>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h6></p>
		                </div>

		            </div>

		        </section>

		        <section className="section2">

		            <div class="div4">
		                <p><h5>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h5></p>
		            </div>

		            <div className="pic">
		                <img src={pic3} alt="Image" />
		            </div> 

		            <p><h6>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h6></p>
		        
		        </section>

		            <hr>
		            </hr>

		        <section className="bottom">

		            <p><h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5></p>
		            <p><h6>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</h6></p>
		        
		        </section>
	    
            </section>

			    <div className="footer1">
			            <ul className="foot">
			                <li><img src={call} alt="logo" />Toll free 1800 200 1234</li>
			                <li><img src={facebook} alt="logo" />www.facebook.com/cripumps</li>
			                <li><img src={crigroups} alt="logo" />www.crigroups.com</li>
			            </ul>
			    </div>
		    </div>
	    }
}

export default Demo;