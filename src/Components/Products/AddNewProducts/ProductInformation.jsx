import React from 'react';
import { Row } from 'reactstrap';

const ProductInformation = ({ register, errors }) => {
  return (
    <Row>
      <div className='mb-4 row align-items-center'>
        <label className='form-label-title col-sm-2 mb-0'>Product Name*</label>
        <div className='col-sm-10'>
          <input className='form-control' type='text' name='name' placeholder='Product Name' {...register('name')} />
        </div>
        <span>{errors.name ? 'Product name is required' : ''}</span>
      </div>

      <div className='mb-4 row align-items-center'>
        <label className='col-sm-2 col-form-label form-label-title'>Product Type</label>
        <div className='col-sm-10'>
          <select className='js-example-basic-single w-100' name='state'>
            <option disabled>Static Menu</option>
            <option>Simple</option>
            <option>Classified</option>
          </select>
        </div>
      </div>

      <div className='mb-4 row align-items-center'>
        <label className='col-sm-2 col-form-label form-label-title'>Category*</label>
        <div className='col-sm-10'>
          <select className='js-example-basic-single w-100' name='category' {...register('category')}>
            <option disabled>Category Menu</option>
            <option>Fashion</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Flower</option>
            <option>Vegetables</option>
            <option>Shoes</option>
            <option>Another</option>
          </select>
        </div>
      </div>

      <div className='mb-4 row align-items-center'>
        <label className='col-sm-2 col-form-label form-label-title'>Subcategory</label>
        <div className='col-sm-10'>
          <select className='js-example-basic-single w-100' name='state'>
            <option disabled value={''}>
              Subcategory Menu
            </option>
            <option>Ethnic Wear</option>
            <option>Ethnic Bottoms</option>
            <option>Women Western Wear</option>
            <option>Sandels</option>
            <option>Shoes</option>
            <option>Beauty & Grooming</option>
          </select>
        </div>
      </div>

      <div className='mb-4 row align-items-center'>
        <label className='col-sm-2 col-form-label form-label-title'>Brand*</label>
        <div className='col-sm-10'>
          <select className='js-example-basic-single w-100' name='brand' {...register('brand')}>
            <option disabled value={''}>
              Brand Menu
            </option>
            <option value='puma'>Puma</option>
            <option value='hrx'>HRX</option>
            <option value='roadster'>Roadster</option>
            <option value='zara'>Zara</option>
          </select>
        </div>
      </div>

      <div className='row align-items-center'>
        <label className='col-sm-2 col-form-label form-label-title'>Until</label>
        <div className='col-sm-10'>
          <select className='js-example-basic-single w-100'>
            <option disabled>Until Menu</option>
            <option>Kilogram</option>
            <option>Pieces</option>
          </select>
        </div>
      </div>
    </Row>
  );
};

export default ProductInformation;
