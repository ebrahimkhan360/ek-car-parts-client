import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProducts = () => {

    const [service, setService] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://sleepy-castle-97088.herokuapp.com/buying?buyer=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {

                setService(data);
            });
    }, [user]);

    return (
        <div>
            <h2>My Products: {service.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>user</th>
                            <th>Product name</th>
                            <th>number</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            service.map((s, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{s.userName}</td>
                                <td>{s.buyer}</td>
                                <td>{s.productName}</td>
                                <td>{s.phone}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;