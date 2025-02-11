import React from 'react';

const SelectTicket = () => {
    return (
        < >
        <div className='ticket-container'>
            {/* Ticket Header */}
            <div className='ticket-header'>
                <h3>Text Selection</h3>
                <h5 className="ticket-paging">Step 1/3</h5>
            </div>

            <hr />

            <div className='ticket-case'>

                {/* main header for ticket */}
            <div className='ticket-main'>
            <h2 className='text-header'>Techember Fest ”25</h2>
            <p className='text-sub'>Join us for an unforgettable experience  <br/>at [Event Name]! Secure your spot now.</p>
            <p className='text-sub'>📍 [Event Location] | | March 15, 2025 | 7:00 PM</p>
            </div>

            <hr className='hr-styling'/>

            {   /* ticket type */}
            <h5 className='text-select'>Select Ticket Type:</h5>
            <div className='ticket-main'>
            <section className='vip'> REGULAR ACCESS  <span style={{border:"1px solid #2BA4B9",  background:"#0E464F"}}>Free</span> <br /> <span></span> </section>
            <section> </section>
            <section> </section>
            </div>


            </div>
        </div>
        </>
    );
};

export default SelectTicket;