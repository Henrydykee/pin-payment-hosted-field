import './pinpayment.css';
import React, { useState } from 'react';

function PinPayment() {

  const [formData, setFormData] = useState({
    addressline1: '',
    addressline2: '',
    city: '',
    postcode: '',
    state: '',
    country: '',
    zip: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Address Submitted:
    //   Street: ${formData.street}
    //   City: ${formData.city}
    //   State: ${formData.state}
    //   ZIP: ${formData.zip}`);
  };

  return (
    <div className="full-screen-div">
      <div className="column">
        <div className="container">
          <form>
            <div className="column">
              <div>
                <label htmlFor="address-line1">Address 1:</label>
                <input
                  type="text"
                  id="address-line1"
                  name="addressline1"
                  value={formData.addressline1}
                  onChange={handleChange}
                  placeholder="Address line 1"
                  required
                  style={{ width: '100%', padding: '8px', margin: '8px 8px' }}
                />
              </div>
              <div>
                <label htmlFor="address-line2">Address 2:</label>
                <input
                  type="text"
                  id="address-line2"
                  name="address-line2"
                  value={formData.addressline2}
                  onChange={handleChange}
                  placeholder="Address line 2"
                  required
                  style={{ width: '100%', padding: '8px', margin: '8px 8px' }}
                />
              </div>

              <div>
                <label htmlFor="address-city">City</label>
                <input
                  type="text"
                  id="address-city"
                  name="address-city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  style={{ width: '100%', padding: '8px', margin: '8px 8px' }}
                />
              </div>

              <div>
                <label htmlFor="address-state">State</label>
                <input
                  type="text"
                  id="address-state"
                  name="address-state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  required
                  style={{ width: '100%', padding: '8px', margin: '8px 8px' }}
                />
              </div>

              <div>
                <label htmlFor="address-postcode">Postcode</label>
                <input
                  type="number"
                  id="address-postcode"
                  name="address-postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="State"
                  required
                  style={{ width: '100%', padding: '8px', margin: '8px 8px' }}
                />
              </div>

              <div>
                <label htmlFor="address-country">Country</label>
                <input
                  type="text"
                  id="address-country"
                  name="address-country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  required
                  style={{ width: '100%', padding: '8px', margin: '8px 8px' }}
                />
              </div>



            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PinPayment;

