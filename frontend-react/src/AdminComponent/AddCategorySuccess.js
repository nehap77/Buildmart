import { useNavigate } from "react-router-dom"

export default function AddCategorySuccess(){
    
    const navigate = useNavigate();
    return(
        <div className="fs-4">
            <h1>Added Successfully!!!</h1>
            <button type="button" onClick={()=>{navigate("/admin")}} >Back</button>
        </div>
    )
}