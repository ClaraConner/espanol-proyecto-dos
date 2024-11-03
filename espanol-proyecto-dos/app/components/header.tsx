
export default function Header()
{

    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-row mt-5 mb-2 h-15 justify-around align-middle'>
                <div className="font-serif hover:text-pink-900">Suscríbete</div>
                <div className='text-4xl font-serif font-extrabold'>Sonido Pop</div>
                <div className="font-serif hover:text-pink-900">
                    Iniciar sesión</div>
            </div>

            <div className='flex flex-row bg-pink-900 h-8 w-10/12 rounded-3xl justify-around self-center items-center'>
                <button className='h-6 text-white font-serif  rounded-2xl px-10 hover:bg-black '>Charts</button>
                <button className='h-6 text-white font-serif  rounded-2xl px-10 hover:bg-black '>
                    Música</button>
                <button className='h-6 text-white font-serif  rounded-2xl px-10 hover:bg-black '>Noticias</button>
                <button className='h-6 text-white font-serif  rounded-2xl px-10 hover:bg-black '>Cultura</button>
                <button className='h-6 text-white font-serif  rounded-2xl px-10 hover:bg-black '>Entrenenimiento</button>

            </div>

            <div className='h-0.5 my-3 bg-black w-10/12 opacity-50 shadow-2xl self-center'></div>

        </div>
    );
}
