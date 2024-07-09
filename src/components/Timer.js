import { FieldTimeOutlined, CheckOutlined, ArrowRightOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Card, Row, Col, Button } from 'antd';
import './timer.css';
import { useEffect, useState } from 'react';


function TimerComponent() {
    const initialSeconds = 86400; // 24 hours in seconds
    const [timeLeft, setTimeLeft] = useState(initialSeconds);

    useEffect(() => {
        // Function to update the timer every second
        const interval = setInterval(() => {
            setTimeLeft(timeLeft => timeLeft - 1);
        }, 1000);

        // Clean up function to clear interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures effect runs only on mount

    // Calculate days, hours, minutes, and seconds from timeLeft
    const days = Math.floor(timeLeft / (60 * 60 * 24));
    const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;

    return (
        <Row style={{ marginTop: 35, display: 'inline-flex' }} justify='space-evenly'>
            <Col>
                <Card
                    style={{ width: '320px', background: 'rgba(255, 255, 255, .05)', border: 'none', marginLeft: '35px', color: 'white' }}
                >
                    <Row>
                        <Col span={24} style={{ display: 'flex' }}>
                            <FieldTimeOutlined style={{ margin: '10px', color: '#fa8922' }} />
                            <p>Reward unlocks in</p>
                        </Col>
                        <Col span={24}>
                            <hr className='card-content-line' />
                        </Col>
                        <Col span={24} className='timer-container'>
                            <img className='timer-container-dot-background' src='https://www.intract.io/assets/dotBg-149528a0.png' alt='dot background' />
                            <Col span={4} className='time'>
                                <h2>
                                    {days} <br /> Days
                                </h2>
                            </Col>
                            <Col span={4} className='time'>
                                <h2>
                                    {hours} <br /> Hrs
                                </h2>
                            </Col>
                            <Col span={4} className='time'>
                                <h2>
                                    {minutes} <br /> Mins
                                </h2>
                            </Col>
                            <Col span={4} className='time'>
                                <h2>
                                    {seconds} <br /> Sec
                                </h2>
                            </Col>
                        </Col>
                        <Col span={24} className='reward-container'>
                            <img src="https://www.intract.io/assets/kol-reward-12e6ae06.gif" alt='_final_reward_image' className='final-reward-image' />
                            <Button type="primary" className='lucky-draw-btn'>Lucky Draw</Button>
                            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ color: 'rgba(255, 255, 255, .4)' }}>Exclusive Community</p>
                                <button className='buttonCardContent' style={{ marginTop: '10px' }}>
                                    <img src='https://www.intract.io/assets/discord-50baa5cf.svg' alt='discord-icon' width={18} height={16} />
                                    Earndrop
                                </button>
                            </Col>
                            <hr className='card-content-line' />
                            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ color: 'rgba(255, 255, 255, .4)' }}>Complete all Essential quests</p>
                                <CheckOutlined className='reward-check-icon' />
                            </Col>
                            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ color: 'rgba(255, 255, 255, .4)' }}>Complete at least 1 Alpha Hub quest today</p>
                                <CheckOutlined className='reward-check-icon' />
                            </Col>
                            <Col span={24}>
                                <Button className='reward-claim-btn' type="primary" icon={<ArrowRightOutlined />} iconPosition={'end'}>
                                    Claim Now
                                </Button>
                            </Col>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Col>
                <Card
                    style={{
                        width: 300,
                        color: 'white',
                        textAlign:'start'
                    }}
                    className='reward-details-container'
                >
                    <Row>
                        <Col span={24} style={{ display: 'flex' }}>
                            <p className='p-text-style'>Reward info</p>
                            <ExclamationCircleOutlined style={{ margin: '10px', color: 'grey' }} />
                        </Col>
                        <Col span={24}>
                            <hr className='card-content-line' />
                        </Col>
                    </Row>
                    <p>
                        Free access to paid KOL (crypto earning) communities!
                    </p>

                    <p className='p-text-style'>Win access to exclusive earning communities of some of the the greatest earners in crypto for a month, every 24 hours. Get access to unmatched insights, a close-knit community of the best airdrop earners, and more.</p>
                    <p className='p-text-style'>To win: make sure you've connected your Twitter and Discord accounts - and follow our criteria!</p>
                </Card>
            </Col>
        </Row>
    )
}

export default TimerComponent;
