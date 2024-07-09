import { List } from 'antd';
import './cardList.css';
import { CheckOutlined } from '@ant-design/icons';

function ListComponent({ item }) {

  const description = (des) => {
    return <>
      <hr className='card-content-line' />
      <div className='card-list-content'>
        <p className='card-list-text'>{des}</p>
        <div className='card-list-line'>
          <hr />
        </div>
        <div>
          <CheckOutlined className='card-list-icon' />
        </div>
      </div>
    </>

  };
  return (
        <List.Item className='list-items'>
          <List.Item.Meta
            avatar={<img alt={item.title} style={{ flex: '0, 0, 120px', height: '80px', borderRadius:'12px' }} src={item?.img} />}
            title={<span className='item-title'>{item?.title.length > 25 ? item?.title.substr(0,25) + '...' : item?.title}</span>}
            description={description(item?.des)}
          />
        </List.Item>
  );
}

export default ListComponent;
