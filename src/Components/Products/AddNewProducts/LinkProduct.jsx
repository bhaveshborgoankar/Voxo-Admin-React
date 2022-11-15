import React from 'react';

const LinkProduct = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-header-2'>
          <h5>Link Products</h5>
        </div>

        <div className='row'>
          <div className='mb-4 row align-items-center'>
            <label className='form-label-title col-sm-2 mb-0'>Upsells</label>
            <div className='col-sm-10'>
              <input className='form-control' type='search' />
            </div>
          </div>

          <div className='row align-items-center'>
            <label className='form-label-title col-sm-2 mb-0'>Cross-Sells</label>
            <div className='col-sm-10'>
              <input className='form-control' type='search' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkProduct;
