import { Card } from "antd";
import UserIcon from '../../assets/images/UserIcon.svg'
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AuthHook } from "../../hooks/AuthHook";



const AuthorizationCard: React.FC = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [e.target.name]: e.target.value}) 
    }

    const navigate = useNavigate()
    const BASE_URL ="https://dummyjson.com/auth/login"

    const submitHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()  
        await AuthHook(BASE_URL, data)
        navigate('/homepage')
    }
 
    const [showParssword, setShowPassword] = useState(false)

    const toggleShowParssword = () => {
        setShowPassword(!showParssword)
    }

    const onFinish = (values: unknown) => {
        console.log('Received values of form: ', values);
    }

    return (
        <div className='absolute top-[88px] left-[0px] w-[100%] flex flex-col items-center max-sm:top-[60px]'>
            <h1 className='text-[16px] font-medium leading-[21.76px] text-[black] text-center'>ავტორიზაცია</h1>
            <Card className='mt-6 w-451 h-478 rounded-lg border border-blue-200 p-0 max-sm:w-[344px] max-sm:h-[478px]'>
                <div className='flex flex-col items-center'>
                    <img src={UserIcon} alt="user-icon" className=" w-[48px] h-[48px]" />
                    <h2 className='text-black text-base font-medium leading-5 mt-3'>სახელით და პაროლით</h2>
                    <p className='text-gray-600 text-sm font-normal leading-5 w-[390px] text-center mt-2 max-sm:w-[350px]' >ავტორიზაციისთვის გთხოვთ გამოიყენოთ თქვენი MY.GOV.GE_ის ანგარიში</p>
                </div>
                <Form
                    name="normal_login"
                    className="mt-[24px] flex flex-col"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <label>მომხმარებელი</label>
                        <Input className="h-[54px]" placeholder="ელ.ფოსტა ან მობილური" name="username" onChange={inputHandler} />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <label>პაროლი</label>
                        <Input className="h-[54px]" type={showParssword ? 'text' : 'password'} placeholder="პაროლი" name="password" onChange={inputHandler} />
                        <Form.Item name="remember" noStyle>
                            <Checkbox className='mt-[8px]' onChange={toggleShowParssword}>მაჩვენე პაროლი</Checkbox>
                        </Form.Item>
                    </Form.Item>            
                    <Button type="primary" htmlType="submit" className="w-[109px] h-[48px] self-end" onClick={submitHandler}>
                        შესვლა
                    </Button>              
                </Form>
            </Card>
        </div>
    )
}

export default AuthorizationCard