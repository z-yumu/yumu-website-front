import { Button, Checkbox, Form, Input, Modal } from 'antd'
import React, { FC, ReactElement, useState } from 'react'
import { LoginWrapper } from './css/LoginWrapper'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../../apis/user'

export interface IUser {
    account: string
    pwd: string
}

const Login: FC = (): ReactElement => {
    const navigate = useNavigate()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const onFinish = async (value: IUser) => {
        const res = await loginApi(value)
        console.log(res,'--------------->')
        // navigate('/')
    }
    return (
        <LoginWrapper>
            <div className="login">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="account"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your account!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="pwd"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <span
                            className="login-form-forgot"
                            onClick={() => setIsModalVisible(true)}
                        >
                            Forgot password
                        </span>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                <Modal
                    visible={isModalVisible}
                    onOk={() => setIsModalVisible(false)}
                    onCancel={() => setIsModalVisible(false)}
                >
                    <p>请女士添加管理员微信</p>
                    <p>男士勿扰!!!</p>
                </Modal>
            </div>
        </LoginWrapper>
    )
}

export default Login
