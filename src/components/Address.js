import React, { useState } from 'react';

const Address = (props) => {

    const [ address, setAddress ] = useState({
        houseNo: '',
        landmark: '',
        city: '',
        state: '',
        pincode: 0
    })
    const isEmpty = Object.values(address).some(x => !x);

    const [ submitted, setSubmitted ] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        !isEmpty && props.setIsAddressAdded(true);
    }
    
    return (
        <div className="container card">
            <h5 className="card-title my-3">Provide the Billing Address</h5>
            { ((submitted || props.isBuyClicked) && isEmpty) && <span className="alert alert-danger">Plaese Fill All Fields</span> }
            <div>
                <input type="text" className="form-control mb-3" placeholder="Enter House No" onChange={(event) => setAddress({ ...address, houseNo: event.target.value })} />
                <input type="text" className="form-control mb-3" placeholder="Enter Landmark" onChange={(event) => setAddress({ ...address, landmark: event.target.value })} />
                <input type="text" className="form-control mb-3" placeholder="Enter City" onChange={(event) => setAddress({ ...address, city: event.target.value })} />
                <input type="text" className="form-control mb-3" placeholder="Enter State" onChange={(event) => setAddress({ ...address, state: event.target.value })} />
                <input type="number" className="form-control mb-3" placeholder="Enter Pincode" onChange={(event) => setAddress({ ...address, pincode: event.target.value })} />
                <button className="btn btn-primary mb-3" onClick={() => handleSubmit()}>Deliver Here</button>
            </div> 
        </div>
    );
}

export default Address;