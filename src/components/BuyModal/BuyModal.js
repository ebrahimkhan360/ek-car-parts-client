import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const BuyModal = ({ buy, setBuy }) => {
    const { _id, name } = buy;
    const [user, loading, error] = useAuthState(auth);

    const handleBuying = e => {
        e.preventDefault();
        const price = e.target.name.value;

        const buying = {
            buyId: _id,
            productName: name,
            productQuantity: user.quantity,
            buyer: user.email,
            userName: user.displayName,
            phone: e.target.phone.value
        }

        fetch('http://localhost:5000/buying', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buying)
        })
            .then(res => res.json())
            .then(data => {
                setBuy(null);
            })

    }

    return (
        <div>
            <input type="checkbox" id="buy-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="buy-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Buy for:{name}</h3>

                    <form onSubmit={handleBuying} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <input type="text" disabled value={name} className="input w-full max-w-xs" />

                        <label>Quantity</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="0>1" className='input w-full max-w-xs' />

                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input w-full max-w-xs" />
                        <input type="email" name="name" disabled value={user?.email || ''} className="input w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyModal;