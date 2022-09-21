import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { MenuInfo } from 'rc-menu/lib/interface'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
    .layout-box {
        min-height: 100vh;
    }

    .trigger {
        padding: 0 24px;
        font-size: 18px;
        line-height: 64px;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
            color: #1890ff;
        }
    }

    .logo {
        height: 32px;
        margin: 16px;
        background: rgba(255, 255, 255, 0.3);
    }

    .site-layout .site-layout-background {
        background: #fff;
    }
`

const { Header, Sider, Content } = Layout

const LayoutCom: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate()

    const menuClick = (e: MenuInfo) => {
        const { key } = e
        navigate(`/${key}`)
    }

    const items = [
        {
            key: 'todo',
            icon: <UserOutlined />,
            label: 'todo',
        },
        {
            key: 'jokelist',
            icon: <VideoCameraOutlined />,
            label: 'joke',
        },
        {
            key: 'basketball',
            icon: <UploadOutlined />,
            label: 'basketball',
        },
    ]

    return (
        <LayoutWrapper>
            <Layout className="layout-box">
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        onClick={menuClick}
                        defaultSelectedKeys={['jokelist']}
                        items={items}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    >
                        {React.createElement(
                            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            }
                        )}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </LayoutWrapper>
    )
}

export default LayoutCom
