// import axios from 'axios'
import SecondXMark from '../../assets/images/SecondXMark.svg'
import { useState } from 'react';
import { addUser } from '../../hooks/AddUserHook'


interface AddUserCardProps {
    addUserButton: boolean;
    setAddUserButton: (value: boolean) => void;
    setAccessActive: (value: boolean) => void;
}
export default function AddUserCard({addUserButton, setAddUserButton, setAccessActive}:AddUserCardProps) {

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: ""
    })

    const addNewUser = async () => {
        try {
            await addUser(userInfo);
            setAccessActive(true);
            setAddUserButton(false);
            setUserInfo({
                firstName: "",
                lastName: ""
            })
        } catch (error) {
            console.error('Error adding user:', error);
        }
    }
    
    


  return (
    <div className={`
        bg-[white] inset-x-1/4 shadow-lg
        w-[799px] h-[704px] rounded-[8px] flex flex-col items-center absolute top-[20px] ${addUserButton ? 'flex' : 'hidden'}`}>
        <h2 className="h-[51px] flex items-center justify-center text-[rgb(51,72,112)] text-[14px] font-bold">მომხმარებლის დამატება</h2>
        <img src={SecondXMark} alt="xmark" className='absolute top-[9px] right-[10px]' onClick={() => setAddUserButton(false)}/>
        <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[24px]">
                <div className="flex flex-col">
                    <label className='text-[14px] font-normal mt-[16px]' htmlFor="name">სახელი</label>
                    <input
                        value={userInfo.firstName}
                        onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})} 
                        className='w-[363px] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' type="text"  placeholder="ჩაწერეთ სახელი"/>
                    <label className='text-[14px] font-normal mt-[16px]' htmlFor="lastName">გვარი</label>
                    <input
                        value={userInfo.lastName}
                        onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}  
                        className='w-[363px] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' type="text"  placeholder="ჩაწერეთ გვარი"/>
                    <label className='text-[14px] font-normal mt-[16px]' htmlFor="name">პირადი ნომერი</label>
                    <input className='w-[363px] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' type="text"  placeholder="ჩაწერეთ პირადი ნომერი"/>
                    <label className='text-[14px] font-normal mt-[16px]' htmlFor="name">უწყება</label>
                    <input className='w-[363px] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' type="select" placeholder="ჩაწერეთ უწყება"/>
                    <label className='text-[14px] font-normal mt-[16px]' htmlFor="name">თანამდებობა</label>
                    <input className='w-[363px] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' type="text"  placeholder="ჩაწერეთ თანამდებობა"/>
                </div>
                <div className="flex flex-col">
                    <label className='text-[14px] font-normal mt-[16px]' htmlFor="name">სახელი(ENG)</label>
                    <input
                        onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})} 
                        className='w-[363px] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' type="text"  placeholder="ჩაწერეთ სახელი"/>
                    <label className='text-[14px] font-normal mt-[16px]' htmlFor="lastName">გვარი(ENG)</label>
                    <input 
                        onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
                        className='w-[363px] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' type="text"  placeholder="ჩაწერეთ გვარი"/>
                    <label className='text-[14px] font-normal mt-[16px]' htmlFor="name">სქესო</label>
                    <input className='w-[363px] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' type="select" placeholder="აირჩიე სქესი"/>
                    <label className='text-[14px] font-normal mt-[16px]' htmlFor="name">როლი</label>
                    <input className='w-[363px] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' type="select" placeholder="ჩაწერეთ როლი"/>
                    <label className='text-[14px] font-normal mt-[16px]' htmlFor="name">თანამდებობა(ENG)</label>
                    <input className='w-[363px] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center text-[16px]' type="text"  placeholder="ჩაწერეთ თანამდებობა"/>
                </div>
            </div>

            <input className='text-[14px] w-[751px] h-[54px] mt-[6px] border-[0.5px] border-[#0000005C] border-solid focus:outline-none rounded-[8px] pl-[14px] flex items-center' type="eamil" name="email" id="email" placeholder="ჩაწერეთ ელფოსტა"/>

            <div className='w-[100%] h-[41px] flex justify-end mt-[16px] gap-[12px]'>
                <div className='flex w-[184px] gap-[8px]'>
                    <input type="checkbox" />
                    <button className='h-[100%] text-[14px] font-normal text-[#000]'>მომდევნოს დამატება</button>
                </div>
                <button
                    onClick={addNewUser} 
                    className='w-[110px] h-[48px] text-[14px] font-semibold text-[#fff] bg-[#1F5EDD] rounded-[8px]'>შენახვა</button>
            </div>

        </div>
    </div>
  )
}


        // axios.post("https://dummyjson.com/users/add", JSON.stringify(userInfo))
        // .then(res => {
        //     console.log(res)
        //     setUserInfo({
        //         firstName: "",
        //         lastName: ""
        //     });
        // })
        // .catch((error) => {console.error("Error:", error)})