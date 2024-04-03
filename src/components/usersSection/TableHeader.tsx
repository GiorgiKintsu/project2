import SearchIcon from '../../assets/images/SearchIcon.svg'
import XMark from '../../assets/images/XMark.svg'
import FilterIcon from '../../assets/images/FilterIcon.svg'

import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import User from '../../types/types';


const items: MenuProps['items'] = [
    {
      label: "აქტიური",
      key: '0',
    },
    {
      label: "მომლოდინე",
      key: '1',
    },
    {
      label: 'გაუქმებული',
      key: '3',
    },
  ];

interface TableHeaderProps{
  setFilterButton: (value: boolean) => void; 
  filterButton: boolean; 
  addUserButton: boolean; 
  setAddUserButton: (value: boolean) => void;  
  setFilteredUsers: (users: User[]) => void; 
  users: User[];
}

export default function TableHeader({setFilterButton, filterButton, addUserButton, setAddUserButton, setFilteredUsers, users}:TableHeaderProps) {
  return (
        <div className='h-[54px] flex items-center justify-between w-[100%] rounded-t-lg px-4 py-0'>
            <aside className='w-420px flex justify-center items-center gap-[16px]'>
                <button
                    className='w-[104px] h-[35px] rounded-lg border border-solid border-blue-100 bg-blue-100 shadow-outline focus:outline-none text-blue-600 text-xs font-semibold leading-normal uppercase'
                    onClick={() => setAddUserButton(!addUserButton)}
                >
                    დამატება
                </button>
                <div className="w-300 flex items-center p-2 gap-3 rounded-md border border-solid border-blue-600 bg-white shadow-outline-blue">
                    <img src={SearchIcon} alt="serch-icon" />
                    <input type="text" className='w-52 h-5 text-black text-sm font-normal leading-normal outline-none border-0'
                      onChange={(e) =>
                        setFilteredUsers(
                          users.filter((item) =>
                          item.firstName && item.firstName.toLowerCase().includes(e.target.value.toLowerCase())
                          )
                        )
                      }
                    />
                    <img src={XMark} alt="x-mark" />
                    <img src={FilterIcon} alt="filter-icon" onClick={() => setFilterButton(!filterButton)}/>                                         
                </div>
            </aside>
            <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                <Space className='flex justify-between w-36 h-7 rounded-lg bg-gray-200 border-0 cursor-pointer text-sm font-normal leading-5 text-gray-600 px-2 focus:outline-none '>
                    ყველა
                    <DownOutlined/>
                </Space>
                </a>
            </Dropdown>
        </div>
    )
}
