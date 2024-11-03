export default function LeftPanel(){

    return(
        <div className="bg-slate-100 p-6 w-1/5 h-5/6 flex flex-col">
            <p className="font-serif font-bold">Ver más</p>
            <div className="h-0.5 w-full bg-pink-800"></div>

            <div className="flex flex-row my-1 w-full items-center">
                <div className=" flex flex-col w-2/5">
                    <img src={"/man-in-hat.jpg"} alt="ver mas" className="mt-3 h-auto rounded-md"></img>
                </div>
                <div className=" flex flex-col w-3/5 ">
                    <p className="text-xs font-serif ml-0.5 font-bold mt-3 hover:text-pink-900">Carin León rompe récord
                        en Madrid y más momentos inspiradores</p>
                </div>
            </div>
            <div className="flex flex-row my-1 w-full items-center">
                <div className=" flex flex-col w-2/5">
                    <img src={"/sam-smith.jpg"} alt="Beyonce" className="mt-3 h-auto rounded-md"></img>
                </div>
                <div className=" flex flex-col w-3/5 ">
                    <p className="text-xs font-serif ml-0.5 font-bold mt-3 hover:text-pink-900">Cyndi Lauper canta ‘Time
                        After Time’ con Sam Smith</p>
                </div>
            </div>
            <div className="flex flex-row my-1 w-full items-center">
                <div className=" flex flex-col w-2/5">
                    <img src={"/baseball.jpg"} alt="Beyonce" className="mt-3 h-auto rounded-md"></img>
                </div>
                <div className=" flex flex-col w-3/5 ">
                    <p className="text-xs font-serif ml-0.5 font-bold mt-3 hover:text-pink-900 ">Cómo la leyenda de los
                        Dodgers Fernando Valenzuela inspiró una ola de canciones de artistas mexicanos</p>
                </div>
            </div>
            <div className="flex flex-row my-1 w-full items-center">
                <div className=" flex flex-col w-2/5">
                    <img src={"/lady.jpg"} alt="Beyonce" className="mt-3 h-auto rounded-md"></img>
                </div>
                <div className=" flex flex-col w-3/5 ">
                    <p className="text-xs font-serif ml-0.5 font-bold mt-3 hover:text-pink-900 ">El playlist definitivo
                        del Día de los Muertos: Julieta Venegas, Ángela Aguilar, Humbe y más</p>
                </div>
            </div>






            <p className="font-serif font-bold mt-60">Cultura</p>
            <div className="h-0.5 w-full bg-pink-800"></div>

            <div className="flex flex-row my-1 w-full items-center">
                <div className=" flex flex-col w-2/5">
                    <img src={"/camera-man.jpg"} alt="ver mas" className="mt-3 h-auto rounded-md"></img>
                </div>
                <div className=" flex flex-col w-3/5 ">
                    <p className="text-xs font-serif ml-0.5 font-bold mt-3 hover:text-pink-900">Fotógrafo de celebridades latinas José ‘Chepe’ DeVillegas comparte una mirada al interior de su viaje</p>
                </div>
            </div>
            <div className="flex flex-row my-1 w-full items-center">
                <div className=" flex flex-col w-2/5">
                    <img src={"/couple.jpg"} alt="Beyonce" className="mt-3 h-auto rounded-md"></img>
                </div>
                <div className=" flex flex-col w-3/5 ">
                    <p className="text-xs font-serif ml-0.5 font-bold mt-3 hover:text-pink-900">Christian Nodal y Cazzu: Cronología de su relación</p>
                </div>
            </div>
            <div className="flex flex-row my-1 w-full items-center">
                <div className=" flex flex-col w-2/5">
                    <img src={"/taylor-swift.jpg"} alt="Beyonce" className="mt-3 h-auto rounded-md"></img>
                </div>
                <div className=" flex flex-col w-3/5 ">
                    <p className="text-xs font-serif ml-0.5 font-bold mt-3 hover:text-pink-900 ">7 disfraces fáciles de estrellas de la música latina que puedes hacer tú mismo para Halloween 2024</p>
                </div>
            </div>
            <div className="flex flex-row my-1 w-full items-center">
                <div className=" flex flex-col w-2/5">
                    <img src={"/messi-bad-bunny.jpg"} alt="Beyonce" className="mt-3 h-auto rounded-md"></img>
                </div>
                <div className=" flex flex-col w-3/5 ">
                    <p className="text-xs font-serif ml-0.5 font-bold mt-3 hover:text-pink-900 ">Bad Bunny y Lionel Messi revelan innovadora colaboración con Adidas: ‘Esperamos crear un legado’</p>
                </div>
            </div>


        </div>

    )
}
