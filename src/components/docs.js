import { Row, Col } from "antd";
import './docs.css';
import { BookOutlined } from '@ant-design/icons';


function DocsComponent() {
    return (
        <Row onClick={()=> window.open('https://docs.intract.io/v/intract-academy', '__blank')}>
            <Col span={24} style={{ position: 'center' }}>
                <span className='cardSpanText'>Crypto Dictionary</span>
                <p className='cardText'>Your one-stop to catch up on all crypto terms</p>
            </Col>
            <Col span={24} className="docs-conatiner">
                <img className="docs-image" alt='' src='https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg' />
                <div className="docs-title-container">
                    <div className="docs-title">
                <span className='docs-title'>Web3 + Degen Glossary</span>
                <p className='docs-des'>Your own crypto dictionary</p>
                </div>
                    <BookOutlined className="docs-book-icon"/>
                </div>
            </Col>
        </Row>
    )
}

export default DocsComponent;