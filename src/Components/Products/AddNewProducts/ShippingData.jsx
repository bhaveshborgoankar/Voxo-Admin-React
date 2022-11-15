import React from 'react';

const ShippingData = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-header-2'>
          <h5>Shipping</h5>
        </div>

        <div className='row'>
          <div className='mb-4 row align-items-center'>
            <label className='form-label-title col-sm-2 mb-0'>Weight (kg)</label>
            <div className='col-sm-10'>
              <input className='form-control' type='number' placeholder='Weight' />
            </div>
          </div>

          <div className='row align-items-center'>
            <label className='col-sm-2 col-form-label form-label-title'>Dimensions (cm)</label>
            <div className='col-sm-10'>
              <select className='js-example-basic-single w-100' name='state'>
                <option>Length</option>
                <option>Width</option>
                <option>Height</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingData;
