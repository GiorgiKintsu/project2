import SecondXMark from '../../assets/images/SecondXMark.svg'
import User from '../../types/types';

interface SearchCardProps {
  filterButton: boolean,
  setFilterButton: (value: boolean) => void
  setFilteredUsers: (users: User[]) => void; 
  users: User[];
}

export default function SearchCard({filterButton, setFilterButton, setFilteredUsers, users}: SearchCardProps) {
  return (
    <div className={`bg-[white] shadow-lg w-[411px] h-[556px] items-center justify-center rounded-[10px] absolute left-[550px] top-[100px] ${filterButton ? 'flex' : 'hidden'}`}>
        <div className="flex flex-col items-start w-[363.5px] h-[508px]">
            <img src={SecondXMark} alt="x-mark" className='absolute top-[8px] right-[8.5px]' onClick={() => setFilterButton(false)}/>
            <label htmlFor="name" className='text-[14px] font-medium leading-[19px] text-[black]'>სახელი</label>
            <input 
              onChange={(e) =>
                setFilteredUsers(
                  users.filter((item) =>
                  item.firstName && item.firstName.toLowerCase().includes(e.target.value.toLowerCase())
                  )
                )
              }
              type="text" placeholder='ჩაწერეთ სახელი' className='w-[100%] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]'/>

            <label htmlFor="lustName" className='text-[14px] font-medium leading-[19px] text-[black] mt-[12px]'>გვარი</label>
            <input type="text" placeholder='ჩაწერეთ გვარი' className='w-[100%] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' />

            <label htmlFor="name" className='text-[14px] font-medium leading-[19px] text-[black] mt-[12px]'>უწყება</label>
            <input type="text" placeholder='ჩაწერეთ უწყება' className='w-[100%] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' />

            <label htmlFor="name" className='text-[14px] font-medium leading-[19px] text-[black] mt-[12px]'>თანამდებობა</label>
            <input type="text" placeholder='ჩაწერეთ თანამდებობა' className='w-[100%] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' />

            <label htmlFor="name" className='text-[14px] font-medium leading-[19px] text-[black] mt-[12px]'>როლი</label>
            <input type="text" placeholder='აირჩიეთ სისტემური როლ' className='w-[100%] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' />

            <div className='w-[100%] h-[41px] flex justify-end mt-[24px] gap-[12px]'>
                <button className='w-[109px] h-[100%] text-[14px] font-semibold text-[#000]'>გასუფთავება</button>
                <button className='w-[109px] h-[100%] text-[14px] font-semibold text-[#fff] bg-[#1F5EDD] rounded-[8px]'>ძებნა</button>
            </div>
        </div>
    </div>
  )
}
