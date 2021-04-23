import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input, Layout, Menu } from 'antd';

import 'antd/dist/antd.css';
import { Link}   from 'react-router-dom';


import { Row, Col } from 'antd';
import './Header.css'

import { ROUTERS } from '../../constants/router';


const { Header } = Layout;
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
                                      <ul className= "menu-cha">
                                          <li className="menu1">
                                              <Link to ={ROUTERS.Home}>Home</Link>
                                          </li>
                                          <li className="menu1">
                                              <Link >About</Link>
                                          </li>
                                          <li className="menu1">
                                              <Link >Contact</Link>
                                          </li>
                                      </ul>
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