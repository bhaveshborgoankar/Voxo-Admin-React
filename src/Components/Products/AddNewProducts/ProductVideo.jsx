import React from 'react';

const ProductVideo = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-header-2'>
          <h5>Product Videos</h5>
        </div>

        <div className='row'>
          <div className='mb-4 row align-items-center'>
            <label className='col-sm-2 col-form-label form-label-title'>Video Provider</label>
            <div className='col-sm-10'>
              <select className='js-example-basic-single w-100' name='state'>
                <option>Vimeo</option>
                <option>Youtube</option>
                <option>Dailymotion</option>
                <option>Vimeo</option>
              </select>
            </div>
          </div>

          <div className='row align-items-center'>
            <label className='form-label-title col-sm-2 mb-0'>Video Link</label>
            <div className='col-sm-10'>
              <input className='form-control' type='text' placeholder='Video Link' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVideo;
