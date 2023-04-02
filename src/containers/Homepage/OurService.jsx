import react from "react";
import OurServiceCard from "../../components/OurServiceCard";
const OurService = ()=>{
    const Service = [{
        name:"HVAC",
        img: "HVAC.jpg",
        background:"hvac",
    },
    {
        name:"FireFighting",
        img: "Fire.jpg",
        background:"fire",
    },{
        name:"Electrical",
        img: "Electrical.jpg",
        background:"elec",
    },{
        name:"Plumbing",
        img: "Plumbing.jpg",
        background:"plum",
    }


]
    return(
        <div className="py-20">
        <h3 className=" font-anton text-5xl font-semi-bold uppercase text-center py-10">our services</h3>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 gap-x-3 mx-5">
            {
                Service.map((i)=><OurServiceCard data={i}></OurServiceCard>)
            }
        </div>
        </div>
    )
}

export default OurService;