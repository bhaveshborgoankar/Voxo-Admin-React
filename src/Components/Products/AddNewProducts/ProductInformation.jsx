import React from 'react';
import { Row } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Submit } from '../../../Constant';

const ProductInformation = ({ register, errors }) => {
  return (
    <Row>
      <Row className='mb-4 align-items-center'>
        <label className='form-label-title col-sm-2 mb-0'>Product Name*</label>
        <div className='col-sm-10'>
          <input className='form-control' type='text' name='productname' placeholder='Product Name' {...register('productname', { register: true })} />
          {errors.productname && <span>Product name is required</span>}
        </div>
      </Row>

      <Row className='mb-4 align-items-center'>
        <label className='col-sm-2 col-form-label form-label-title'>Product Type</label>
        <div className='col-sm-10'>
          <select className='js-example-basic-single w-100' name='state'>
            <option disabled>Static Menu</option>
            <option>Simple</option>
            <option>Classified</option>
          </select>
        </div>
      </Row>

      <Row className='mb-4 align-items-center'>
        <label className='col-sm-2 col-form-label form-label-title'>Category*</label>
        <div className='col-sm-10'>
          <select className='js-example-basic-single w-100' name='category' {...register('category', { register: true })}>
            <option value=''>Category Menu</option>
            <option value='Fashion'>Fashion</option>
            <option value='Electronics'>Electronics</option>
            <option value='Furniture'>Furniture</option>
            <option value='Flower'>Flower</option>
            <option value='Vegetables'>Vegetables</option>
            <option value='Shoes'>Shoes</option>
            <option value='Another'>Another</option>
          </select>
        </div>
      </Row>

      <Row className='mb-4 align-items-center'>
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
      </Row>

      <Row className='mb-4 align-items-center'>
        <label className='col-sm-2 col-form-label form-label-title'>Brand*</label>
        <div className='col-sm-10'>
          <select className='js-example-basic-single w-100' name='brand' {...register('brand', { register: true })}>
            <option value={''}>Brand</option>
            <option value='puma'>Puma</option>
            <option value='hrx'>HRX</option>
            <option value='roadster'>Roadster</option>
            <option value='zara'>Zara</option>
          </select>
        </div>
      </Row>

      <Row className='align-items-center'>
        <label className='col-sm-2 col-form-label form-label-title'>Price</label>
        <div className='col-sm-10'>
          <input type='number' name='price' placeholder='$' {...register('price', { register: true })} />
        </div>
      </Row>
      <Btn attrBtn={{ type: 'submit', className: 'btn-theme theme-bg-color mt-3 d-inline-block w-auto' }}>{Submit}</Btn>
    </Row>
  );
};

export default ProductInformation;
