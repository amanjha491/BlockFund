import {Image} from "@nextui-org/react";
import { tagType, thirdweb } from '../assets';

const daysLeft = (deadline) => {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);

  return remainingDays.toFixed(0);
};

const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
  const remainingDays = daysLeft(deadline);
  
  return (
    <div className="sm:w-[380px] h-[500px] bg-[#40e0d0] cursor-pointer ms-[15px] mb-[10px]" onClick={handleClick}>
      <Image src={image} alt="fund" className="object-scale-down h-48 w-96 bg-[#ffffff] rounded-full mt-[20px]" />

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
          <Image src={tagType} alt="o" className="object-scale-down h-8 w-10 bg-[#ffffff]" />
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[15px] text-[#ffffff]">Education</p>
        </div>

        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">{title}</h3>
          <p className="mt-[5px] font-epilogue font-normal text-[#ffffff] text-left leading-[18px] truncate">{description}</p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#ffffff] leading-[22px]">{amountCollected}</h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#ffffff] sm:max-w-[120px] truncate">Raised of {target}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#ffffff] leading-[22px]">{remainingDays}</h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#ffffff] sm:max-w-[120px] truncate">Days Left</p>
          </div>
        </div>

        <div className="flex items-center mt-[70px] gap-[10px]">
          <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#ffffff]">
            <Image src={thirdweb} alt="user" className="w-1/2 h-1/2 object-center" />
          </div>
          <p className="flex-1 font-epilogue font-normal text-[11px] text-[#ffffff] truncate">by <span className="text-[#ffffff]">{owner}</span></p>
        </div>
      </div>
    </div>
  )
}

export default FundCard;