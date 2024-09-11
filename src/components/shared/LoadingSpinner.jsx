import { BarLoader } from "react-spinners"

const LoadingSpinner = ({ smallHeight }) => {
    return (
      <div
        className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
        flex 
        flex-col 
        justify-center 
        items-center `}
      >
        <BarLoader size={100} width={100} color='black' />
      </div>
    )
  }
  export default LoadingSpinner