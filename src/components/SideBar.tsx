import Logo from '../assets/images/Logo.svg'
import BookMark from '../assets/images/BookMark.svg'
import Users from '../assets/images/Users.svg'
import Work from '../assets/images/Work.svg'
import { useState } from 'react'


interface MyComponentProps {
    activeItem: number;
    setActiveItem: (item: number) => void;
}
const SideBar:React.FC<MyComponentProps> = ({activeItem, setActiveItem}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const sidebarItems = [
        { icon: BookMark, text: 'ჩანართები' },
        { icon: Users, text: 'მომხმარებლები' },
        { icon: Work, text: 'როლები' }
    ];

    const handleItemClick = (index: number) => {
        setActiveItem(index);
    };
    
  return (
    <div 
        className="h-[748px] w-[60px] bg-[#fff] rounded-[10px] absolute top-[10px] left-[10px] flex flex-col gap-[68px] hover:w-[280px] duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <aside className="w-[280px] h-[28.72px] flex items-center gap-[8px] mt-[10px] ">
            <img 
                className='pl-[8px]'
                src={Logo} alt="logo-icon" />
            <p 
                className={`w-[202px] font-medium text-[8px] leading-[10.88px] text-[#000000]
                ${isHovered ? " " : 'invisible'}`}
            >პოლიტიკის დაგეგმვისა და კორდინაციის მართვის ელექტრონული სისტემა</p>
        </aside>
        <aside className='flex flex-col'>
            {sidebarItems.map((item, index) => (
                <div  
                    key={index} 
                    className={`h-[48px]  flex items-center gap-[10px] cursor-pointer ${activeItem === index ? 'border-l-2 border-solid border-[#2970FF] bg-[#F5F8FF]' : ''}`}
                    onClick={() => handleItemClick(index)}
                >
                    <img className='pl-[18px]' src={item.icon} alt={`${item.text}-icon`} />
                    <h3 
                        className={`text-[14px] font-normal leading-[19px] text-[#000000]
                        ${isHovered ? " " : 'invisible'}
                        ${activeItem === index ? 'text-blue-500' : ''}
                        `}              
                    >{item.text}</h3>
                </div>
            ))}
        </aside>
    </div>            
  )
}

export default SideBar