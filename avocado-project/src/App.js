import './App.css';
import React from 'react'
import 'antd/dist/antd.css';

import { Select } from 'antd';




import { UserOutlined, capacityField, LockOutlined, NumberOutlined, UploadOutlined } from '@ant-design/icons';
import { Input, Button, message, Upload, Checkbox } from 'antd';


const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};


const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

function App() {
  return (
    <div className='main'>
      <div className='form'>
        <formTitle>
          <titleLabel>
            Create Table:
          </titleLabel>
        </formTitle>
        <hr />
        <formContent>

          <layout>
            <layoutLabel>Layout:</layoutLabel>
            <layoutField>

              <abc>
                <Select
                  defaultValue="lucy"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>

              </abc>
            </layoutField>
          </layout>

          <name>
            <nameLabel>
              Name:
            </nameLabel>
            <nameField>
              <field>
                <Input size="large" placeholder="  Enter number of capacity" />
              </field>

            </nameField>
          </name>

          <capacity>
            <capacityLabel>
              Capacity:
            </capacityLabel>

            <capacityField>
              <field>
                <Input size="large" placeholder="  Enter number of capacity" />
              </field>

            </capacityField>
          </capacity>

          <status>
            <statusLabel>
              Status:
            </statusLabel>

            <statusField>
              <Checkbox onChange={onChange} />
            </statusField>

          </status>

          <image>
            <imageLabel>
              Image:
            </imageLabel>
            <imageField>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </imageField>
          </image>
        </formContent>
        <btns>
        <Button type="primary"
        className='buttonCreateTable' id = "btn2"
        >
          Create Table</Button>
        <Button type="primary" danger id="btn3">Cancel</Button>
        </btns>
      </div>
    </div>
  );
}
export default App;


