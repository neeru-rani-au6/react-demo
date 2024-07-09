import './App.css';
import HeaderComponent from './components/Header';
import BannerComponent from './components/Banner';
import CardComponent from './components/card';
import TimerComponent from './components/Timer';
import VideoComponent from './components/video';
import DocsComponent from './components/docs';
import FooterComponent from './components/Footer';
import { Divider, Flex, Layout } from 'antd';


const sectionCardData = [
  {
    img: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png',
    title: ' Basics of Crypto',
    Description: ' The safest and easiest place to start your crypto journey!',
    Quests: 6,
    Xps: 1490,
  },
  {
    img: 'https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png',
    title: 'Intract Certified: Learner NFT',
    Description1: 'Your crypto black-belt',
    Description2: 'certificate',
  }
]

const sectionListData = [
  {
    title: '#1: But what is crypto and web3?',
    img: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png',
    des: '11 Tasks',
  },
  {
    title: '#2: Setting up your own web3 wallet!',
    img: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg',
    des: '8 Tasks',
  },
  {
    title: '#3: What the heck is a blockchain?',
    img: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg',
    des: '8 Tasks',
  },
  {
    title: '#4: Swapping and bridging? What’s that?',
    img: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg',
    des: '10 Tasks',
  },
  {
    title: '#5: NFTs and why they’re cool ;)',
    img: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg',
    des: '6 Tasks',
  },
  {
    title: '#6: Doing quests and winning rewards!',
    img: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg',
    des: '8 Tasks',
  },
];

const section2CardData = [
  {
    img: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png',
    title: 'Introduction to Airdrops',
    Description: 'Your best bet to make it big in crypto!',
    Quests: 4,
    Xps: 1040,
  },
  {
    img: 'https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png',
    title: 'Intract Certified: Earner NFT',
    Description1: 'Your proof of',
    Description2: 'airdrop expertise',
  }
];

const section2ListData = [
  {
    img: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/6bb30883bc5042809b9d20926341f8ac.jpg',
    title: '#1: What are airdrops, and how can they change your life?',
    des: '7 Tasks'
  },
  {
    img: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/c8d2455592d04b4f897b30da15836d5d.jpg',
    title: '#2: Types of airdrops',
    des: '10 Tasks'
  },
  {
    img: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d59b0ff5b37141b2baf3e5e39157f408.png',
    title: '#3: How to earn huge $$$ from airdrops?',
    des: '11 Tasks'
  },
  {
    img: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/27d77aa021174529a9eae082de8196c9.jpg',
    title: '#4: Things to keep in mind!',
    des: '7 Tasks'
  },
]

const videoData = [
  {
    id: 1,
    img: 'https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png',
    title: 'How to plan your retirement with crypto?',
    videoUrl: 'https://www.youtube.com/shorts/NkDtaXvzt-I?feature=share'
  },
  {
    id: 2,
    img: 'https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png',
    title: 'Why are there limited Bitcoin?',
    videoUrl: 'https://www.youtube.com/shorts/-kmxV_JO7eY?feature=share'
  },
  {
    id: 3,
    img: 'https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png',
    title: 'How to spot crypto projects to invest in?',
    videoUrl: 'https://www.youtube.com/shorts/9fyVLvY3P14?feature=share'
  },
  {
    id: 4,
    img: 'https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png',
    title: 'How does Uniswap actually work?',
    videoUrl: 'https://www.youtube.com/shorts/kYeFSwvt1sQ?feature=share'
  }
]

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  backgroundColor: 'black',
};


function App() {
  return (
    <Flex gap="middle" wrap className='App image'>
      <Layout style={layoutStyle}>
        <HeaderComponent />
        <BannerComponent />
        <CardComponent cardData={sectionCardData} listData={sectionListData} direction={'row'} />
        <Divider style={{ backgroundColor: '#555151' }} />
        <CardComponent cardData={section2CardData} listData={section2ListData} direction={'row-reverse'} />
        <Divider style={{ backgroundColor: '#555151' }} />
        <TimerComponent />
        <Divider style={{ backgroundColor: '#555151' }} />
        <VideoComponent videoData={videoData} />
        <Divider style={{ backgroundColor: '#555151' }} />
        <DocsComponent />
        <FooterComponent />
      </Layout>
    </Flex>
  );
}

export default App;
