import './video.css';
import { Row, Col, Card, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ReactPlayer from 'react-player'


function VideoComponent({ videoData: data }) {
    return (
        <>
            <div style={{ position: 'center' }}>
                <span className='cardSpanText'>Top Crypto Creators and Projects to Follow</span>
                <p className='cardText'>Answers to your crypto doubts, straight from the experts</p>
            </div>
        <Row justify='space-evenly' style={{gap: 12}}>
                {data.map((item) => (
            <Col className='video-container' key={item.id} >
                    <MediaPlayer item={item} />
            </Col>
                ))}
        </Row>
        </>
    )
}

function MediaPlayer({ item }) {

    const [isVideo, setIsVideo] = useState(false);
    const toggleMedia = () => {
        setIsVideo(!isVideo);
    };
    return <div>
        <Card
            hoverable
            style={{
                width: 240,
            }}
            className='video-card-container'
            onClick={toggleMedia}
        >
            {isVideo ?
                <>
                    <ReactPlayer width={240} url={item.videoUrl} />
                    <CloseCircleOutlined className='video-action-btn' />

                </>
                :
                <>
                    <img alt="example" src={item.img} />
                    <Button type="primary" className='video-action-btn'><img src='https://www.intract.io/assets/reel-video-ee824737.svg' alt='reel-icon' /></Button>
                    <span className='video-card-title'>{item.title}</span>
                </>
            }
        </Card>
    </div>
}

export default VideoComponent;