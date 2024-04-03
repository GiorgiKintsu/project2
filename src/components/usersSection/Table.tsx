import { useState } from 'react';
import Checkbox from '../../assets/images/Checkbox.svg'
import User from '../../types/types';
import { DeleteHook } from '../../hooks/DeleteHook';



interface TableProps {
    filteredUsers: User[]; 
    setAccessActive: (active: boolean) => void
}


const Table: React.FC<TableProps> = ({filteredUsers, setAccessActive}) => {
    const [dropDownActive, setDropDownActive] = useState<number | null>();

    
    const deleteUser = (id: string) => {
        DeleteHook(id)
        setTimeout(() => {
            setAccessActive(true)
            setDropDownActive(-1)
        },1000)
    }  



    
    
  return (
    <div className='w-full flex flex-col rounded-b-lg relative' >
        <div className="w-full h-[39px] flex items-center justify-between border-b border-solid border-gray-200 bg-white pl-[12px] pr-[47px]">
            <div style={{ width: '44px'}} />      
            <div className="w-[191px]">
                <h3 className="text-black text-sm font-normal leading-normal overflow-hidden truncate whitespace-no-wrap p-2">სახელი</h3>
            </div>        
            <div className="w-[191px]">
                <h3 className="text-black text-sm font-normal leading-normal overflow-hidden truncate whitespace-no-wrap p-2">გვარი</h3>
            </div>
            <div className="w-[191px]">
                <h3 className="text-black text-sm font-normal leading-normal overflow-hidden truncate whitespace-no-wrap p-2">უწყება</h3>
            </div>
            <div className="w-[191px]">
                <h3 className="text-black text-sm font-normal leading-normal overflow-hidden truncate whitespace-no-wrap p-2">თანამდებობა</h3>
            </div>
            <div className="w-[191px]">
                <h3 className="text-black text-sm font-normal leading-normal overflow-hidden truncate whitespace-no-wrap p-2">ელ. ფოსტა</h3>
            </div>
            <div className="w-[191px]">
                <h3 className="text-black text-sm font-normal leading-normal overflow-hidden truncate whitespace-no-wrap p-2">მობილური</h3>
            </div>
            <div style={{ width: '20px'}} /> 
        </div>
        <div className='h-[590px] overflow-y-scroll overflow-x-hidden rounded-b-[10px]'>
                {filteredUsers.map((item) => (
                <div key={item.id} className={`relative w-full flex items-center justify-between h-[60px] pl-[12px] pr-[30px] border-b border-solid border-gray-200 bg-white`}>
                    <div className='w-11 h-11 flex items-center justify-center'>
                        <img className='w-6 h-6 rounded-full' src={item.image} alt='user-image'/>
                    </div>
                    <div className='w-[191px]'>
                        <h3 className='w-24 text-black text-sm font-normal leading-normal overflow-hidden truncate whitespace-no-wrap p-2'>{item.firstName}</h3>
                    </div>
                    <div className='w-[191px]'>
                        <h3 className='w-24 text-black text-sm font-normal leading-normal overflow-hidden truncate whitespace-no-wrap p-2'>{item.lastName} </h3>
                    </div>
                    <div className='w-[191px]'>
                        <h3 className='w-24 text-black text-sm font-normal leading-normal overflow-hidden truncate whitespace-no-wrap p-2'>{item.company?.name}</h3>
                    </div>
                    <div className='w-[191px]'>
                        <h3 className='w-24 text-black text-sm font-normal leading-normal overflow-hidden truncate whitespace-no-wrap p-2'>{item.company?.title}</h3>
                    </div>
                    <div className='w-[191px]'>
                        <h3 className='w-24 text-black text-sm font-normal leading-normal overflow-hidden truncate whitespace-no-wrap p-2'>{item.email}</h3>
                    </div>
                    <div className='w-[191px]'>
                        <h3 className='w-24 text-black text-sm font-normal leading-normal overflow-hidden truncate whitespace-no-wrap p-2'>{item.phone}</h3>
                    </div>
                    
                    <div 
                        onClick={() => 
                            item.id !== dropDownActive ?  setDropDownActive(item.id) :   setDropDownActive(-1)
                        } 
                        className='w-[20px] cursor-pointer flex justify-center items-center'>
                        <img src={Checkbox} alt="checkboxIcon" />
                    </div>
                    <div className={`${item.id === dropDownActive ? '' : 'hidden'} w-[170px]  flex flex-col items-center justify-center absolute z-[10] top-10 right-10 bg-white border border-solid border-gray-300 rounded-lg shadow-md`}>
                        <button
                            className='w-[100%] text-[14px] font-normal h-[39px] text-start pl-[20px]'>
                            პროფილის ნახვა
                        </button>
                        <button
                            onClick={() => deleteUser(String(item.id))}
                            className='w-[100%] text-[14px] font-normal h-[39px] text-start pl-[20px]'>
                            იუზერის წაშლა
                        </button>
                    </div>
               

 
                </div>
                ))}
        </div>
    </div>
  )
}

export default Table



