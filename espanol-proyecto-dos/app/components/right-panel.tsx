export default function RightPanel(){

    return(
        <div className=" w-1/5 h-5/6">
            <div className=" flex flex-col w-full">
                <img src={"/spanish-ad.jpg"} alt="Beyonce" className="mt-20 h-auto rounded-md"></img>
            </div>
            <div className="flex flex-col w-full">
                <img src={"/car-spanish-ad.jpg"} alt="Beyonce" className="mt-96 h-auto rounded-md"></img>
            </div>
            <div className="flex flex-col w-3/4 justify-center">
                <img src={"/prueba-ad.jpg"} alt="Beyonce" className="mt-96 h-auto justify-center"></img>
            </div>
        </div>

    )
}