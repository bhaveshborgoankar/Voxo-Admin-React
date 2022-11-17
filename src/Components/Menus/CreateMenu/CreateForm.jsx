import React, { useEffect, useState } from 'react';
import { Form, Input, Label, Row } from 'reactstrap';
import CKEditorContain from './CKEditor';
const CreateForm = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, [show]);
  return (
    <Form className='theme-form theme-form-2 mega-form'>
      <Row>
        <div className='mb-3 row align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>Menu Name</Label>
          <div className='col-md-9 col-lg-10'>
            <Input className='form-control' type='text' />
          </div>
        </div>

        <div className='mb-3 row'>
          <Label className='form-label-title col-sm-2 mb-0'>Description</Label>
          <div className='col-sm-10'></div>
          <CKEditorContain />
        </div>

        <div className='mb-3 row align-items-center'>
          <Label className='col-sm-2 col-form-label form-label-title'>
            Dimensions
            <span className='theme-color'>(cm)</span>
          </Label>
          <div className='col-sm-10'>
            <select className='js-example-basic-single' name='state'>
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
        </div>

        <div className='mb-3 row align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>Permanlink</Label>
          <div className='col-md-9 col-lg-10'>
            <Input className='form-control' type='url' />
          </div>
        </div>

        <div className='mb-4 row align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>Status</Label>
          <div className='col-md-9'>
            <div className='form-check user-checkbox ps-0'>
              <Input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault' />
              <Label className='form-label-title col-md-2 mb-0'>Enable the Menu</Label>
            </div>
          </div>
        </div>
      </Row>
    </Form>
  );
};
export default CreateForm;
