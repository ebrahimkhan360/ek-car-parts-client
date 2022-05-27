import React from "react";
// import Service from "./Services.css";
import icon1 from '../../../assets/images/icon/icon (2).svg'
import icon2 from '../../../assets/images/icon/icon (3).svg'
import icon3 from '../../../assets/images/icon/icon (1).svg'


const Services = () => {
    return (
        <div className="">
            <div class=" w-full border-opacity-50">
                <div class="divider">Our Services</div>
            </div>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-6">


                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={icon1} alt="Shoes" class="rounded-xl w-16" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Guaranteed Fit</h2>
                        <p>Take the guesswork out of shopping for auto parts with EK CarParts.com. </p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={icon2} alt="Shoes" class="rounded-xl w-16" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Fast Shipping</h2>
                        <p>Get back on the road faster with CarParts.com. We deliver the parts you need, when you need them.</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={icon3} alt="Shoes" class="rounded-xl w-16" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">90-Day Returns</h2>
                        <p>At CarParts.com, we're confident that you'll be able to find the right part or accessory for your car, truck or SUV.</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;