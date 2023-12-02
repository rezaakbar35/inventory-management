import React from "react";
import Navbar from "../components/Navbar";
import Mom from "../assets/Mom.jpg"
import IconLocations from "../assets/loc.png"
import IconCustomers from "../assets/user.png"
import IconWarehouses from "../assets/warehouse.png"
import Shopping from "../assets/Shopping.jpg"
import Check from "../assets/success.png"
import Testimonials from "../components/Testimonial";
import RegisterBar from "../components/RegisterBar";
import logo from "../assets/deliverit.svg"
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import Email from "../assets/mail.png"


const LandingPage = () => {
    const section3 = [
        {
            icon: IconLocations,
            label: "locations",
            total: "150+",
        },
        {
            icon: IconCustomers,
            label: "customers",
            total: "3000+",
        },
        {
            icon: IconWarehouses,
            label: "warehouses",
            total: "50+",
        },
    ];

    const features = ["Customized choices for moms and kids.", 
                      "Carefully chosen items for parenting.",
                      "Toys and essentials for little ones.",
                      "Products for mom's relaxation and rejuvenation.",
                      "Bundle discounts for moms and kids."];
    return (
    <>
    <div>
        <Navbar />
    </div>
    <div>
    <main className="container max-w-6xl mx-40 mt-20">
        {/* Hero */}
        <div className="grid grid-cols-2 py-20 item items-center text-left">
            <div>
                <h1 className="font-bold text-4xl pb-5 text-displayText">
                Discover limitless joy for moms <br /> and kids in one destination
                </h1>
                <div className="font-normal pb-10 text-displayText ">
                Explore curated treasures and moments that spark smiles all here
                </div>
                <button className="py-4 px-6 bg-primary rounded-md hover:bg-primary transform hover:scale-110 text-white drop-shadow-xl" >Get Started</button>
            </div>
            <div>
                <img src={Mom} alt="mom-images" className="xl:w-96" />
            </div>
            </div>
            {/* USP */}
            <div className="grid grid-cols-3 shadow-xl rounded-md py-4">
                {section3.map((val, index) => {
                    return (
                    <div 
                        key={index} 
                        className={`flex flex-row py-2 space-x-6 justify-center text-displayText ${index+1 !== section3.length && 'border-r border-displayText'}`}>
                        <div>
                        <img alt={val.label} src={val.icon} className="w-12 h-11 "/>
                        </div>
                        <div className="ml-3">
                            <div>{val.total}</div>
                            <div>{val.label}</div>
                        </div>
                 </div>
                );
                })}
            </div>
            {/* Features */}
            <div className="grid grid-cols-2 py-24 items-center">
                <img src={Shopping} alt="shopping image" className="xl:w-96" />
                <div className="px-16 space-y-6 text-left">
                    <div className="text-3xl font-semibold text-displayText">Tons of features await!</div>
                    <div className="font-normal text-displayText">Discover our features—each adding fun and function to your experience</div> 
                    {features.map((val, index) => {
                    return(
                        <div className="flex text-left space-x-3" key={index}>
                            <div>
                            <img src={Check} 
                            alt="Check icons" 
                            className="w-6 h-6"
                            />
                            </div>
                            <div className="text-displayText font-normal ml-3 ">{val}</div>
                        </div>
                    )
                })}
                </div>
                
            </div>
            {/* Testimonials */}
            <div>
                <Testimonials />
            </div>
    </main>
    </div>
     {/* Register */}
    <div className="bg-background">
        <RegisterBar />
    </div>
    {/* Footer */}
    <footer className="bg-background py-20">
        <div className="container mx-auto max-w-5xl flex flex-row space-x-24">
          <div className="flex-1 space-y-5">
            <div className="grid grid-cols-2 px-40 justify-center">
            <img src={logo} alt="logo deliver it" className="w-12 h-12 justify-center" />
            <dir className="font-bold ">DeliverIT</dir>
            </div>
            <div className="text-center">
            Deliver It: Your go-to hub for modern moms and <br/> kids. Essentials and joy in every click!
            </div>
            <div className="flex flex-row space-x-3 justify-center">
              <img src={Facebook} alt="facebook icon" className="w-6 h-6" />
              <img src={Email} alt="mail icon" className="w-6 h-6" />
              <img src={Instagram} alt="IG icon" className="w-6 h-6" />
            </div>
            <div className="text-center">©2020deliverIT</div>
          </div>
          <div className="">
            <div className="text-lg font-semibold mb-6">Product</div>
            <ul className="space-y-6 text-sm text-gray-500">
              <li>Category</li>
              <li>Locations</li>
              <li>Warehouses</li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-6">Engage</div>
            <ul className="space-y-6  text-sm text-gray-500">
              <li>DeliverIT? </li>
              <li>FAQ</li>
              <li>Tutorials</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-6">Location</div>
            <ul className="space-y-6  text-sm text-gray-500">
              <li>Warehouses</li>
              <li>Warehouse Category</li>
            </ul>
          </div>
        </div>
      </footer>
    </>  
    )
}

export default LandingPage
