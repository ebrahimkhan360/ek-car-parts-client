import React from "react";
import Service from "./Services.css";
const Services = () => {
    return (
        <div className="">
            <div class="flex flex-col w-full border-opacity-50">
                <div class="divider">Our Services</div>
            </div>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                <div class="">
                    <div class="card">
                        <img className="img-style" src="https://i.ibb.co/BnNfxpC/550-5504898-lightning-bolt-thunder-png-clipart-removebg-preview.png" alt="" />
                        <div class="card-body mt-5">
                            <h5 class="card-title">Thunder Server</h5>
                            <p class="card-text">We have the fastest server in the world! You can easily download or upload any files to the server like thunder. Is this so fist and so Energy.</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="card">
                        <img className="img-style" src="https://i.ibb.co/qd1VWB8/images-removebg-preview.png" alt="" />
                        <div class="card-body mt-5">
                            <h5 class="card-title">Rocket like Delivery</h5>
                            <p class="card-text">We promise you to take the products from you withing hours. It doesn't matter wherever you're, Earth or Mars or the Sun.</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="card">
                        <img className="img-style" src="https://i.ibb.co/BTFHzVv/2454556-removebg-preview.png" alt="" />
                        <div class="card-body mt-5">
                            <h5 class="card-title">Invincible Security</h5>
                            <p class="card-text">The most securest door in the universe. Hacker's fathers or dads don't have the power to crack it. Give your passwords to us, and go to sleep.</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="card">
                        <img className="img-style" src="https://i.ibb.co/qDQSptb/207-2071237-customer-service-icon-customer-service-flat-icon-png-removebg-preview.png" alt="" />
                        <div class="card-body mt-5">
                            <h5 class="card-title">Infinity Support</h5>
                            <p class="card-text">You can easily contact with us and get the support. We only live for giving you the best support. Its our responsibility not yours.</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="card">
                        <img className="img-style" src="https://i.ibb.co/16H2q02/5221076-removebg-preview.png" alt="" />
                        <div class="card-body mt-5">
                            <h5 class="card-title">Most Profitable Deals</h5>
                            <p class="card-text">You will find the most profitable deal for you here. Just go and watch the deals. We will take all your money at night.</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="card">
                        <img className="img-style" src="https://i.ibb.co/Mn74YZr/1024px-Archlinux-icon-crystal-64-svg-removebg-preview.png" alt="" />
                        <div class="card-body mt-5">
                            <h5 class="Planet to Planet">FREE Shipping</h5>
                            <p class="card-text">Our service is available on every planet of every Galaxy. It doesn't matter who you are, Human or Alien. You will instantly get your desired product.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;