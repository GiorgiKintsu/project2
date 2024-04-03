
export default function AuthorizationHeader() {
  return (
    <div className="flex justify-between items-center h-[72px] px-[24px] relative max-sm:flex-col max-sm:pt-[24px] max-sm:pb-[32px] max-sm:h-[100vh]">
        <h2 className="text-[18px] font-bold leading-[24.48px] text-[#000000]">MY.GOV.GE</h2>
        <aside className='flex gap-[24px] items-center'>
            <select name="languageSelect" className='w-[97px] text-[14px] font-normal leading-[19px] text-[#000] bg-[#fff] focus:outline-none border-0'>
                <option value="geo">ქართული</option>
                <option value="eng">English</option>
            </select>
            <h3 className='text-[14px] font-normal leading-[19px] text-[#000]'>დახმარება</h3>
        </aside>
    </div>
  )
}
