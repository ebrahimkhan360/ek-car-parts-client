import React from "react";
import Service from "./Services.css";
import icon1 from '../../../images/icon/icon (2).svg'
import icon2 from '../../../images/icon/icon (3).svg'
import icon3 from '../../../images/icon/icon (1).svg'





const Services = () => {
    return (
        <div className="">
            <div class=" w-full border-opacity-50">
                <div class="divider">Our Services</div>
            </div>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div class="">
                    <div class="card">
                    <img src={icon1} class="img-style"/>
                        <div class="card">
                            <h5 class="card-title">Guaranteed Fit</h5>
                            <p class="p-5">Take the guesswork out of shopping for auto parts with CarParts.com. We make purchasing car parts online easier by providing accurate and detailed fitment information, which makes for a straightforward and hassle-free shopping experience. </p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="card">
                    <img src={icon2} class="img-style"/>
                        <div class="card">
                            <h5 class="card-title">Fast Shipping</h5>
                            <p class="p-5">Get back on the road faster with CarParts.com. We deliver the parts you need, when you need them. Our three strategically-located auto parts warehouses are equipped with the latest technologies for efficient order processing and faster shipping.</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="card">
                    <img src={icon3} class="img-style"/>
                        <div class="card">
                            <h5 class="card-title">90-Day Returns</h5>
                            <p class="p-5">At CarParts.com, we're confident that you'll be able to find the right part or accessory for your car, truck or SUV. But if for some reason you aren't completely satisfied with your order, we accept returns within 90 days of purchase—and we'll give you your money back!</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Services;