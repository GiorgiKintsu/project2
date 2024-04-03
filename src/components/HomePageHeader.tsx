import Notification from '../assets/images/Notification.svg'
import UserImage from '../assets/images/UserImage.svg'
import ArrowDown from '../assets/images/ArrowDown.svg'
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { DeleteOutlined, UserOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    icon: <DeleteOutlined />,
    label: <a href="#">პროფილის ნახვა</a>,
    key: '0',
  },
  {
    icon: <UserOutlined />,
    label: <a href="#">მომხმარებლის გაუქმება</a>,
    key: '1',
  },
];

export default function HomePageHeader() {
  return (

    <div className="flex justify-between items-center w-[100%] px-[24px] h-[56px]">
      <h2 className="text-black text-base font-normal leading-6 tracking-normal">მომხმარებელი</h2>
      <aside className="flex items-center justify-center gap-[20px]">
        <img src={Notification} alt="notification" className='w-[36px] h-[36px]' />
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space >
              <div className='flex items-center justify-center gap-[8px]' >
                <img src={UserImage} alt="userIcon" />
                <img src={ArrowDown} alt="arrow-down" />
              </div>
            </Space>
          </a>
        </Dropdown>
      </aside>
    </div>
  )
}
