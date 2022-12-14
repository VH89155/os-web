import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  message,
} from "antd";
import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../components/Context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/apiRequest";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const AddProduct = () => {
  const onFormLayoutChange = ({ disabled }) => {};
  const dispatch = useDispatch();

  const [img, setImg] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: "phòng bếp",
      price: 0,
      originalPrice: 0,
      sold: 0,
      images: [],
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      description: Yup.string().required("Required"),
      category: Yup.string().required("Required").min(1, "error category"),
      price: Yup.string()
        .required("Required")
        .matches(/^-?\d*(\.\d*)?$/, "Must be a valid number"),
      originalPrice: Yup.string()
        .required("Required")
        .matches(/^-?\d*(\.\d*)?$/, "Must be a valid number"),
      sold: Yup.string()
        .required("Required")
        .matches(/^-?\d*(\.\d*)?$/, "Must be a valid number"),
    }),
    onSubmit: (values) => {
      console.log(values);
      
      addProduct(dispatch, values);
        
        message.success("Thêm thành công!");
    },
  });

  const [fileList, setFileList] = useState([]);
  const onChangeImg = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    // console.log(formik.values.images)
  };
  const onRemove = (file) => {
    console.log(file);
    const file1 = fileList.filter((item) => item !== file);
    setFileList(file1);
    // formik.values.images =[]
    // file1.map((item,index)=>{
    //   formik.values.images.push(item.name)
    // })
    // console.log(formik.values.images)

    return true;
  };

  const handleChange = (value) => {
    formik.values.category = value.value;
    // console.log(formik.values.category);
  };
  const onChangeNumber1 = (value) => {
    formik.values.originalPrice = value;
  };
  const onChangeNumber2 = (value) => {
    formik.values.sold = value;
  };
  const onChangeNumber = (value) => {
    formik.values.price = value;
  };
  // formik.values.images =fileList
  formik.values.images = [];
  fileList.map((item, index) => {
    formik.values.images.push(item.name);
  });

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
        <Form.Item label="Name">
          <Input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Enter your name"
            style={{marginTop:-15}}
          />
          {formik.errors.name && (
            <p className="errorMsg">{formik.errors.name}</p>
          )}
        </Form.Item>
        <Form.Item label="Description">
          <TextArea
            rows={3}
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            placeholder="Enter your description"
            style={{marginTop:0}}
          />
        </Form.Item>

        <Form.Item label="Category">
          <Select
            labelInValue
            // style={{marginTop:15}}

            defaultValue={{
              value: "Phòng bếp",
            }}
            onChange={handleChange}
            // onValuesChange={formik.values.category}
            // value={formik.values.category}
          >
            <Select.Option value="Phòng bếp">Phòng bếp</Select.Option>
            <Select.Option value="Phòng khách">Phòng khách</Select.Option>
            <Select.Option value="Phòng ngủ">Phòng ngủ</Select.Option>
            <Select.Option value="Phòng tắm">Phòng tắm</Select.Option>
            {/* <Select.Option  value="Phòng bếp">Phòng bếp</Select.Option>
            <Select.Option  value="Phòng bếp">Phòng bếp</Select.Option>
            <Select.Option  value="Phòng bếp">Phòng bếp</Select.Option> */}
          </Select>
          {formik.errors.category && (
            <p className="errorMsg">{formik.errors.category}</p>
          )}
        </Form.Item>

        <Form.Item label="Price">
          <InputNumber id="price" name="price"  style={{marginTop:15}} onChange={onChangeNumber} />
          {formik.errors.price && (
            <p className="errorMsg">{formik.errors.price}</p>
          )}
        </Form.Item>
        <Form.Item label="originalPrice">
          <InputNumber 
          //  style={{marginTop:15}}
            id="originalPrice"
            name="originalPrice"
            //  value={formik.values.originalPrice}
            onChange={onChangeNumber1}
          />
          {formik.errors.originalPrice && (
            <p className="errorMsg">{formik.errors.originalPrice}</p>
          )}
        </Form.Item>
        <Form.Item label="sold">
          <InputNumber
          //  style={{marginTop:15}}
            id="sold"
            name="sold"
            //  value={formik.values.sold}
            onChange={onChangeNumber2}
          />
          {formik.errors.sold && (
            <p className="errorMsg">{formik.errors.sold}</p>
          )}
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          className="img"
          // onChange={(e)=>formik.values.images.push(e.target.files[0].name) }
        >
          <Upload
            action="/upload.do"
            listType="picture-card"
            defaultFileList={fileList}
            onChange={onChangeImg}
            onRemove={onRemove}
          >
            <div>
              <PlusOutlined />
              <div
                // style={{
                //   marginTop: 8,
                // }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button   htmlType="submit">Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddProduct;
