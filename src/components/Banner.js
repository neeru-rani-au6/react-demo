import './banner.css';
import { Button, Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

function BannerComponent() {
    return (
        <Row style={{ padding: '130px', justifyContent: 'center' }} className="back-img">
            <Col span={24}>
                <img
                    src='https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif'
                    alt='intract-academy-bg'
                    className="animated-logo"
                />
            </Col>
            <Col span={24}>
                <p style={{ color: 'rgba(255, 255, 255, .4)' }}>
                    <span className='spanText'>
                        Intract users
                    </span>
                    {' '} have together made more than
                    <span className='spanText'>
                        {' '} $100 million
                    </span>
                    {' '} in web3.
                    <br />
                    Join them and
                    <span className='spanText'>
                        {' '} learn how to earn crypto!
                    </span>
                </p>
                <Button className='get-start-button' type="primary" icon={<ArrowRightOutlined />} iconPosition={'end'}>
                    Get Started
                </Button>
            </Col>
        </Row>
    );
}

export default BannerComponent;
