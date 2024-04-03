import Success from '../../assets/images/Success.svg'


interface SuccessCardProps {
  setAccessActive: (active: boolean) => void;
}

const SuccessCard: React.FC<SuccessCardProps> = ({setAccessActive}) => {
  return (
    <div className="w-[768px] h-[274px] flex flex-col items-center bg-[white] absolute z-[11] top-[120px] inset-x-1/4 rounded-[10px] shadow-lg">
        <img src={Success} alt="success" className='mt-[48px]' />
        <h2 className='text-[16px] text-[#027948] font-bold mt-[24px]' >ოპერაცია წარმატები განხორციელდა</h2>
        <button onClick={() => setAccessActive(false)} className='mt-[54px] w-[143px] h-[44px] bg-[#1F5EDD] text-[white] text-[16px] font-semibold rounded-[10px]' >დასრულება</button>
    </div>
  )
}

export default SuccessCard