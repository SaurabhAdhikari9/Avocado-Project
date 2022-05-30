import './App.css';
import React  from 'react'
import { UserOutlined, capacityField, LockOutlined, NumberOutlined,UploadOutlined } from '@ant-design/icons';
import { Input, Button, message, Upload, Checkbox } from 'antd';
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
    <hr/>
    <formContent>
      
      <layout>
        <layoutLabel>Layout:</layoutLabel>
        <layoutField>
        <Input size="large" placeholder="  Select Layout"  />
        </layoutField>
      </layout>
      
      <name>
        <nameLabel>
          Name:
        </nameLabel>
        <nameField>
        <Input size="large" placeholder="  Enter Name" />
        </nameField>
      </name>
      
      <capacity>
        <capacityLabel>
          Capacity:
        </capacityLabel>
        <capacityField>
        <Input size="large" placeholder="  Enter number of capacity"  />
        </capacityField>
      </capacity>

      <status>
        <statusLabel>
          Status:
        </statusLabel>
        <statusField>
        <Checkbox onChange={onChange}/>
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
  </div>
</div>
  );
}
export default App;


