import { CgClose } from "react-icons/cg";


import { useContext} from "react";
import { ToggleModalContext } from "../../contexts/ToggleModalContext";
import { SelectedTableContext } from "../../contexts/SelectedTableContext";
import { BeneficiaryForm } from "../../components/Forms/BeneficiaryForm";
import { VoluntaryForm } from "../../components/Forms/VoluntaryForm";
import { CompanyForm } from "../../components/Forms/CompanyForm";

export function Modal() {
  const { isOpen, toggleModal, id } = useContext(ToggleModalContext)
  const { selectedTable } = useContext(SelectedTableContext)
  
  

  
  return (
    <>
      <div className={`bg-dark-green flex items-center justify-center fixed bg-opacity-5 backdrop-filter backdrop-blur-[6px] z-50 h-screen w-full transition-opacity duration-300 ${isOpen == false ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="bg-[#2d4c47] h-[90%] relative overflow-y-scroll p-8 w-[60%] lg:w-[80%] rounded-2xl"> 
            <CgClose color="rgb(255 239 211)" className="absolute bg right-6 top-4 cursor-pointer" onClick={toggleModal} size="32px" />
          <div className="">
            {selectedTable == "voluntaries" && <VoluntaryForm method="put" id={id}/>}
            {selectedTable == "beneficiaries" && <BeneficiaryForm method="put" id={id}/> }
            {selectedTable == "companies" && <CompanyForm method="put" id={id}/> }            
          </div>
        </div>
      </div>
    </>
  )
}