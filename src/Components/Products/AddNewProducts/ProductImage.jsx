import React from 'react';

const ProductImage = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-header-2'>
          <h5>Product Images</h5>
        </div>

        <div className='row'>
          <div className='mb-4 row align-items-center'>
            <label className='col-sm-2 col-form-label form-label-title'>Images</label>
            <div className='col-sm-10'>
              <input className='form-control form-choose' type='file' id='formFileMultiple' />
            </div>
          </div>

          <div className='row align-items-center'>
            <label className='col-sm-2 col-form-label form-label-title'>Thumbnail Image</label>
            <div className='col-sm-10'>
              <input className='form-control form-choose' type='file' id='formFileMultiple1' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
