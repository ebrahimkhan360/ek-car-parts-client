import React from 'react';
// import stats from '../../assets/images/stats.gif';

const Stats = () => {
    return (
        <div
            // style={{

            //     background: `url(${stats})`,
            //     backgroundSize: 'cover',
            //     // backgroundRepeat: 'no-repeat'
            // }}
            className="stats stats-vertical bg-primary grid sx:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 shadow">

            <div className="stat">
                <div className="">Visitors</div>
                <div className="stat-value">31K</div>
            </div>

            <div className="stat">
                <div className="">New Users</div>
                <div className="stat-value">4,200</div>
                <div className="">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
                <div className="">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="">↗︎ 90 (14%)</div>
            </div>

        </div>
    );
};

export default Stats;