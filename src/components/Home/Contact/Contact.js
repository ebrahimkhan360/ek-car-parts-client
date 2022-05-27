import React from 'react';


const Contact = () => {
    return (
        <div>
            <h2 className='text-center text-white font-bold uppercase text-4xl mt-6'>Contact Us!</h2>
            <div className="hero min-h-screen bg-base">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Contact Us!</h1>
                        <p className="py-6">Please Contact Us!! your any products and your any problem. </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
                        <div className="card-body">
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Massage</span>
                                </label>
                                <textarea className="textarea textarea-error" placeholder="Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;