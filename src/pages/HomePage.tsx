import { useEffect, useState } from "react";
import AddUserCard from "../components/additionalCards/AddUserCard";
import HomePageHeader from "../components/HomePageHeader";
import SearchCard from "../components/additionalCards/SearchCard";
import SideBar from "../components/SideBar";
import Table from "../components/usersSection/Table";
import TableHeader from "../components/usersSection/TableHeader";
import { useGetUsers } from "../hooks/GetUsersHook";
import User from '../types/types';
import Chanartebi from "../components/chanartebi/Chanartebi";
import Rolebi from "../components/rolebi/Rolebi";
import SuccessCard from "../components/additionalCards/SuccessCard";



export default function HomePage() {
  const { users, loading, error } = useGetUsers('https://dummyjson.com/users');
  
  const [filterButton, setFilterButton] = useState<boolean>(false);
  const [addUserButton, setAddUserButton] = useState<boolean>(false);
 
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [acitiveComponent, setActiveComponent] = useState<number>(1)

  const [successActive , setAccessActive] = useState<boolean>(false)
  
  useEffect(() => {
    setFilteredUsers(users)
  }, [users]);



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;  



// console.log(users);

  
  return (
    <div className="bg-[#D9D9D9] w-full h-[110vh] pt-[10px] pl-[80px]">
        <SideBar activeItem={acitiveComponent} setActiveItem={setActiveComponent}/>
        <HomePageHeader />
        
        {acitiveComponent === 0 && (
          <div>
            <Chanartebi />
          </div>
        )}
        {acitiveComponent === 1 && (
          <div className="flex flex-col bg-[#fff] mt-[8px] ml-[8px] mr-[16px] rounded-lg">
            <TableHeader 
              setFilteredUsers={setFilteredUsers}
              users={users}
              setFilterButton={setFilterButton} 
              filterButton={filterButton} 
              addUserButton={addUserButton} 
              setAddUserButton={setAddUserButton}/>
            <Table 
              setAccessActive={setAccessActive}
              filteredUsers={filteredUsers} />
            {successActive && <SuccessCard setAccessActive={setAccessActive}/> }
            <SearchCard 
              setFilteredUsers={setFilteredUsers}
              users={users}
              filterButton={filterButton} 
              setFilterButton={setFilterButton} />
            <AddUserCard 
              setAccessActive={setAccessActive}
              addUserButton={addUserButton} 
              setAddUserButton={setAddUserButton} />
          </div>
        )}
        {acitiveComponent === 2 && (
          <div>
            <Rolebi />
          </div>
        )}

    </div>
  )
}
