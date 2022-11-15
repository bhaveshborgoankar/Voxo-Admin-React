import React from 'react';

const DescriptionEditor = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-header-2'>
          <h5>Description</h5>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className='row'>
              <label className='form-label-title col-sm-2 mb-0'>Product Description</label>
              <div className='col-sm-10'>{/* <div id='editor'></div> */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionEditor;
