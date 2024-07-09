import { Card, Button, Row, Col, List } from 'antd';
import { CaretUpOutlined, CheckOutlined, LockFilled, CaretDownOutlined } from '@ant-design/icons';
import './card.css';
import ListComponent from './cardList';
import { useState } from 'react';


function CardComponent({ cardData, listData: data, direction = 'row' }) {
    const [isListVisible, setIsListVisible] = useState(true);

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    return (
        <Row style={{ flexDirection: direction, marginBottom: '24px' }} justify="space-around">
            <Col >
                <div style={{ transform: ' translate3d(0px, 0px, 0px)', marginLeft: '35px', }}>
                    <Card
                        hoverable
                        className='card'
                    >
                        <Row>
                            <Col span={24} style={{ display: 'flex' }} onClick={toggleListVisibility}>
                                {isListVisible ?
                                    <CaretUpOutlined className='cardArrowButton' />
                                    :
                                    <CaretDownOutlined className='cardArrowButton' />
                                }
                                <div className='card-style'>
                                    <img alt="example" className='img' src={cardData[0].img} />
                                    <Button type="primary" className='btn'>{cardData[0].Quests} Quests</Button>
                                </div>
                                <div className='cardContent'>
                                    <span className='cardSpanText'>
                                        {cardData[0].title}
                                    </span>
                                    <p className='cardText'>
                                        {cardData[0].Description}
                                    </p>
                                    <hr className='card-content-line' />
                                    <button className='buttonCardContent'>
                                        <img src='https://www.intract.io/assets/xp-icon-aacd204a.svg' alt='' width={18} height={16} />
                                        {cardData[0].Xps} XPs
                                    </button>
                                </div>
                            </Col>
                            {isListVisible &&
                                <Col span={24}>
                                    <hr style={{ color: 'grey' }} />
                                </Col>
                            }
                            <Col span={24} className='list-container'>
                                {isListVisible && (
                                    <List
                                        size="large"
                                        dataSource={data}
                                        renderItem={(item) => <ListComponent item={item} />}
                                    />
                                )}
                            </Col>
                        </Row>
                    </Card>

                </div>
            </Col>
            <Col className='nft-container'>
                <div style={{ display: 'inline-grid', justifyContent: 'end' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
                        <CheckOutlined className='card-list-icon' style={{ width: '48px', height: '48px', fontSize: '28px' }} />
                    </div>
                    <div className='card-style'>
                        <img alt="example" className='img' src={cardData[1].img} />
                        <LockFilled className='lock-button' />
                    </div>
                    <p style={{ color: 'rgba(255, 255, 255, .4)' }}>{cardData[1].title}</p>
                    <p className='p-text-style'>
                        {cardData[1].Description1}
                        <br />
                        {cardData[1].Description2}
                    </p>
                    <Button disabled className='claim-button' type="primary" iconPosition={'end'}>
                        Claim
                    </Button>
                </div>
            </Col>
        </Row>
    );
}

export default CardComponent;
