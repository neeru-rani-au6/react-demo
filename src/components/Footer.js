import { Layout, List, Row, Col, Divider } from 'antd';
import { LinkedinFilled } from '@ant-design/icons';

const { Footer} = Layout;


const footerStyle = {
  textAlign: 'start',
  backgroundColor: 'black',
  color: 'white',
  marginTop: '35px',
};

const data = [
  {
    title: 'INTRACT',
    des1: 'Explore Quests',
    des2: 'Comunities',
    des3: 'Alpha Hub'
  },
  {
    title: 'EARN',
    des1: 'Refer & Earn',
    des2: 'Leaderboard',
    des3: 'Achievements'
  },
  {
    title: 'ABOUT',
    des1: 'Product Roadmap',
    des2: 'Affiliate Program',
    des3: 'Sign up Program',
    des4: 'Growth Community',
    des5: 'Blogs'
  },
  {
    title: 'SUPPORT',
    des1: 'Help Center',
    des2: 'Create your quest',
    des3: 'Terms of Service',
    des4: 'Privacy Policy',
    des5: 'Community Guidelines',
  },
];


function FooterComponent() {
  return (
    <Footer style={footerStyle}>
      <List
        grid={{
          gutter: 16,
          column: 5,
        }}
        dataSource={data}
      >
        <Row justify='space-evenly'>
          <Col>
            <span className='cardSpanText'>intract.</span>
            <p className='cardText'>We are your personal guide for exploring <br /> web3 projects & earning 100x rewards</p>
          </Col>
          {data.map((item) => (
            <Col key={item.title}>
              <span className='cardSpanText'>{item.title}</span>
              <p className='cardText'>{item.des1}</p>
              <p className='cardText'>{item.des2}</p>
              <p className='cardText'>{item.des3}</p>
              <p className='cardText'>{item.des4}</p>
              <p className='cardText'>{item.des5}</p>
            </Col>
          ))}
        </Row>
      </List>
      <Divider style={{ backgroundColor: '#555151' }} />
      <div>
        <p className='cardText'>
          <span style={{ color: '#a6a2a2', fontWeight: 'bold' }}>
            Disclaimer:
          </span>
          {' '}Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
        </p>
      </div>
      <Divider style={{ backgroundColor: '#555151' }} />
      <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ textTransform: 'uppercase', fontSize: '15px', fontWeight: 'bold' }}>CREATED BY <span onClick={() => window.open('https://www.linkedin.com/in/neerurani/', '__blank')} style={{ textDecoration: 'underline', cursor:'pointer' }}>NEERU</span></span>
        <LinkedinFilled style={{ fontSize: '25px',cursor:'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/neerurani/', '__blank')}/>
      </Col>
    </Footer>
  )
}

export default FooterComponent;
