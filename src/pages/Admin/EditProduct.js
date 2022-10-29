

import { PlusOutlined } from '@ant-design/icons';
import {Form,Input,Button, Radio,Select,Cascader, DatePicker, InputNumber, TreeSelect, Switch, Checkbox, Upload,message} from 'antd';
import { useContext } from 'react';
import { useState } from 'react';
import { Context } from '../../components/Context/Context';
import { useFormik} from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { updatedProduct } from '../../redux/apiRequest';


const { RangePicker } = DatePicker;
const { TextArea } = Input;




const EditProduct= () => {
  const productEdit = useContext(Context)
  // console.log(productEdit)
  const onFormLayoutChange = ({ disabled }) => {
    // setComponentDisabled(disabled);

  };
  const dispatch = useDispatch();
  
  const [img,setImg] = useState([])

  

  const formik = useFormik({
    initialValues:{
       
        name: productEdit.name,
        description :productEdit.description,
        category : productEdit.category,
        price: productEdit.price,
        originalPrice: productEdit.originalPrice,
        sold: productEdit.sold,
        images: productEdit.images,


    },
    validationSchema: Yup.object({
        name: Yup.string().required("Required").min(4,"Must be 4 characters or more"),
        description: Yup.string().required("Required"),
        category: Yup.string().required("Required").min(1,"error category"),
        price:Yup.string().required("Required").matches(/^-?\d*(\.\d*)?$/,"Must be a valid number"),
        originalPrice:Yup.string().required("Required").matches(/^-?\d*(\.\d*)?$/,"Must be a valid number"),
        sold:Yup.string().required("Required").matches(/^-?\d*(\.\d*)?$/,"Must be a valid number"),
        
    })
    ,
    onSubmit: (values) =>{
        console.log(values);
        updatedProduct(dispatch,values,productEdit._id)
        message.success("Edit thành công!");
    }
     
  });
  
  const fileListStart = []
  formik.values.images.map((value,index) =>{
    fileListStart.push({
      uid: index,
      name: value,
      status: 'done',
      url: require(`../../assets/imgs/${value}`)
    })
  })
  const [fileList,setFileList] =useState(fileListStart)
  const onChangeImg =({ fileList: newFileList })=>{   
    setFileList(newFileList)
   
    // console.log(formik.values.images)
  }
  const onRemove= (file)=>{
    console.log(file)
    const file1= fileList.filter(item=>item !== file)
    setFileList(file1)
    // formik.values.images =[]
    // file1.map((item,index)=>{
    //   formik.values.images.push(item.name)
    // })
    // console.log(formik.values.images)

    return true
    
  }


  const handleChange =(value)=>{
    formik.values.category = value.value;
    // console.log(formik.values.category);
  }
  const onChangeNumber1 =(value)=>{
    
    formik.values.originalPrice =value
  }
  const onChangeNumber2 =(value)=>{
    
    formik.values.sold =value
  }
  const onChangeNumber =(value)=>{
    
    formik.values.price =value
  }
  // formik.values.images =fileList
  formik.values.images =[]
  fileList.map((item,index)=>{
    formik.values.images.push(item.name)
  })

  return (
    <>
      
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"       
        onFinish={formik.handleSubmit}
        
      >
        <Form.Item label="Name" >
          <Input  type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Enter your name"  />
            {formik.errors.name && (
                <p className="errorMsg">
                    {formik.errors.name}
                </p>
            )}
        </Form.Item>
        <Form.Item label="Description">
          <TextArea rows={3}  
          id="description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          placeholder="Enter your description" 
          />
        </Form.Item>

        <Form.Item label="Category">
          <Select 
           labelInValue
          //  defaultValue={{
          //    value: 'Gỗ',
             
          //  }}
          onChange={handleChange}
          // onValuesChange={formik.values.category}
          // value={formik.values.category}
          placeholder={formik.values.category}
          >
            <Select.Option  value="Gỗ">Gỗ</Select.Option>
            <Select.Option  value="Nhựa">Nhựa</Select.Option>
          </Select>
          {formik.errors.category && (
                <p className="errorMsg">
                    {formik.errors.category}
                </p>
            )} 
         </Form.Item>
       
        <Form.Item label="Price">
          <InputNumber 
           id="price"
           name="price"
          //  value={formik.values.price}
          onChange={onChangeNumber}
          />
          {formik.errors.price && (
                <p className="errorMsg">
                    {formik.errors.price}
                </p>
            )} 
        </Form.Item>
        <Form.Item label="originalPrice">
          <InputNumber id="originalPrice"
           name="originalPrice"
          //  value={formik.values.originalPrice}
           onChange={onChangeNumber1}
          />
          {formik.errors.originalPrice && (
                <p className="errorMsg">
                    {formik.errors.originalPrice}
                </p>
            )} 
        </Form.Item>
        <Form.Item label="sold">
          <InputNumber 
           id="sold"
           name="sold"
          //  value={formik.values.sold}
          onChange={onChangeNumber2}
          />
          {formik.errors.sold && (
                <p className="errorMsg">
                    {formik.errors.sold}
                </p>
            )} 
       
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" className='img' 
        // onChange={(e)=>formik.values.images.push(e.target.files[0].name) }
        >
          <Upload action="/upload.do" listType="picture-card"
            defaultFileList={fileListStart}
            onChange={onChangeImg}
            onRemove={onRemove}
          >
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button htmlType="submit" >Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default EditProduct;