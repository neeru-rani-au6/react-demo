import React, { useState } from 'react';
import { Layout, Menu, Input, Button, Drawer } from 'antd';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
import './header.css'

const { Header } = Layout;

const items = [
    {
        label: 'Compass',
        key: 1
    },
    {
        label: 'Explore',
        key: 2
    },
    {
        label: 'Academy',
        key: 3
    },
    {
        label: 'NFTs',
        key: 4
    },
    {
        label: 'For Projects',
        key: 5
    }
]

const HeaderComponent = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Header theme="dark" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <MenuOutlined className="mobile-menu-icon" onClick={showDrawer} />
      <div className="logo">intract.</div>
      <div className="menu-container">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']} className="desktop-menu" items={items} />
      </div>
      <Input
        placeholder="Search for ecosystems, trending quests etc,."
        style={{ backgroundColor: 'rgb(27 26 26 / 88%)', margin: '13px' }}
        prefix={
          <SearchOutlined
            style={{
              color: 'grey',
              fontSize: '16px',
              flexShrink: 0,
            }}
          />
        }
        className="searchBar"
      />
      <Button type="primary" style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold' }}>Sign In</Button>

      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={closeDrawer}
        open={drawerVisible}
        className="mobile-drawer"
      >
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={['3']} items={items} />
      </Drawer>
    </Header>
  );
};

export default HeaderComponent;
