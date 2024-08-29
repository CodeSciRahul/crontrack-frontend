import socialAccounts from "../DummyData/socialAccountData";
import Plus from "../assets/plus.svg";
import Minus from "../assets/minus.svg";
import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate,useOutletContext } from "react-router-dom";
import toast from "react-hot-toast";


interface handleWorkSpaceContex{
  handledata: Function;
}

const AddSocialMediaAccounts: React.FC = () => {
  const navigate = useNavigate();
  const [checkStates, setCheckStates] = useState<boolean[]>(
    socialAccounts.map(() => false)
  );

  useEffect(() => {
    handledata(1);
  }, [])
  

  const {handledata} = useOutletContext<handleWorkSpaceContex>()

  const handleaddAccount = (index: number) => {
    setCheckStates((prevState) => {
      const newStates = [...prevState];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handlePrevious = () => {
    navigate("/create-workspace-name");
  };
  const handleContinue = () => {
    toast.success("account added");
  };

  return (
    <div className="w-full">
      <ul className="w-full flex flex-wrap items-center justify-center mb-4  gap-10">
        {socialAccounts.map((account, index) => (
          <li
            key={account.id}
            className="flex flex-col items-center justify-center mx-2 relative bg-gray-500 rounded-full"
          >
            <img src={account.icon} alt="" className="w-[50px] rounded-full" />
            <img
              src={checkStates[index] ? Minus : Plus}
              className={`absolute bottom-0 right-0 cursor-pointer hover:scale-105 transition-all duration-300 rounded-full text-white p-1 font-semibold ${
                checkStates[index] ? "bg-red-500" : "bg-green-500"
              }`}
              onClick={() => handleaddAccount(index)}
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-8 sm:mt-10">
        <Button onClick={handlePrevious} className={`bg-secondary`}>
          Previous
        </Button>

        <Button className={`bg-secondary`} onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default AddSocialMediaAccounts;
