import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css'
import effect from '../../images/effect/car.png'
const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (



        <div>
            
            <div class="hero min-h-screen bg-base-200">
            
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                    <img src={effect} />
                        <h1 class="text-5xl  font-bold">Buy Now best Car Parts!</h1>
                        <p class="py-6">If you’re looking for a simple fixes like replacing wipers or light bulbs, we have what you need. Looking for tune-up items like belts and spark plugs? We have those too. We also have car parts for more serious issues like a bad battery, a malfunctioning starter, or even body work. If something is wrong with your vehicle, take a quick trip to AutoZone for any car, SUV, or truck auto parts you need.</p>
                    </div>
                    <div class="">
                        <div>
                            <div className='p-4'>

                                <div className='text-center'>
                                    <h2 className='m-4'>Product Id:{serviceId}</h2>

                                    <label>
                                        <span>Name:</span>
                                    </label>
                                    <input type="text" placeholder="Name" class="input w-full" />


                                    <label>Quantity</label>
                                <input type="number" id="quantity" name="quantity" min="1" max="0>1" className='input w-full' />
                                </div>
                                

                            </div>

                            <div class="form-control">
                                <button class="btn btn-primary m-4">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










        </div>
    );
};

export default ServiceDetail;