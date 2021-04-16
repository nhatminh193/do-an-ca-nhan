import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

import { Row, Col } from 'antd';
import './heder.css'

const { Header, Content, Footer } = Layout;
const onSearch = value => console.log(value);


function HeaderPage() {
    // const [seachKey,setSeachkey]= useState('')


    return (
        <>
            <Row>
                <Header className="headers">
                    <div className="container-fulid">
                        <div className="header-con">
                            <Col span={4}>

                                <UserOutlined style={{ fontSize: '50px', color: '#08c' }} />

                            </Col>
                            <Col span={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '200px' }}>

                                <Input.Search placeholder="Nhập vào đây" onSearch={onSearch} enterButton />

                            </Col>
                            <Col span={12}>
                                <div className="menu">
                                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                                        <Menu.Item key="1">Home</Menu.Item>
                                        <Menu.Item key="2">About</Menu.Item>
                                        <Menu.Item key="3">Contact</Menu.Item>
                                        <Menu.Item key="4">Sale</Menu.Item>
                                        <Menu.Item key="5">Fashion</Menu.Item>
                                        <Menu.Item key="6">Shopping</Menu.Item>
                                    </Menu>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Header>
            </Row>

        </>
    );


}

export default  HeaderPage;