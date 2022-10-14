import React from 'react';

const AccountTabData = () => {
  return (
    <form className='theme-form theme-form-2 mega-form'>
      <div className='card-header-1'>
        <h5>Product Information</h5>
      </div>

      <div className='row'>
        <div className='mb-4 row align-items-center'>
          <label className='form-label-title col-lg-2 col-md-3 mb-0'>First Name</label>
          <div className='col-md-9 col-lg-10'>
            <input className='form-control' type='text' />
          </div>
        </div>

        <div className='mb-4 row align-items-center'>
          <label className='col-lg-2 col-md-3 col-form-label form-label-title'>Email Address</label>
          <div className='col-md-9 col-lg-10'>
            <input className='form-control' type='email' />
          </div>
        </div>

        <div className='mb-4 row align-items-center'>
          <label className='col-lg-2 col-md-3 col-form-label form-label-title'>Password</label>
          <div className='col-md-9 col-lg-10'>
            <input className='form-control' type='password' />
          </div>
        </div>

        <div className='row align-items-center'>
          <label className='col-lg-2 col-md-3 col-form-label form-label-title'>Confirm Password</label>
          <div className='col-md-9 col-lg-10'>
            <input className='form-control' type='password' />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AccountTabData;
