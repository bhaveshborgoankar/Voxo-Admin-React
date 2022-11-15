import React from 'react';
import { Card, CardBody, Col, Container, Form, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { AddNewProduct } from '../../../Constant';
import TitleHeading from '../../CommonComponents/TitleHeading';
import CommonHeader from './CommonHeader';
import DescriptionEditor from './DescriptionEditor';
import LinkProduct from './LinkProduct';
import ProductImage from './ProductImage';
import ProductInformation from './ProductInformation';
import ProductVideo from './ProductVideo';
import ShippingData from './ShippingData';
const AddnewProductsContain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('Data', data);
  };
  return (
    <>
      <TitleHeading title={AddNewProduct} />
      <Container fluid={true}>
        <Row>
          <Col xs='12'>
            <Row>
              <Col sm='12'>
                <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit(onSubmit)}>
                  <Card>
                    <CardBody>
                      <CommonHeader title={'Product Information'} />
                      <ProductInformation register={register} errors={errors} />
                    </CardBody>
                  </Card>

                  <DescriptionEditor />

                  <ProductImage />

                  <ProductVideo />

                  <ShippingData />

                  <LinkProduct />
                  <button type='submit'>Submit</button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddnewProductsContain;
