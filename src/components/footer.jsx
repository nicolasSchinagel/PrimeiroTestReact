
const Footer = ()=>{
  return <>
     <footer className="w-full flex flex-col items-center bg-black pt-[40px] gap-[10px]">
             <h3 className="text-pink-300 text-[28px] tracking-widest font-light">blackpink in your area</h3>
             <section className="w-full flex flex-row justify-around text-[20px] bg-pink-300 py-[50px]">
                      <div className="text-black font-light flex flex-col items-center gap-5">
                        <h1 className="font-bold text-[25px]">ME SIGA!</h1>
                        <h2 className="hover:text-yellow-300 cursor-pointer">COLABORADORES</h2>
                        <h2 className="hover:text-yellow-300 cursor-pointer">LINKDIN</h2>
                        <h2 className="hover:text-yellow-300 cursor-pointer">GITHUB</h2>
                      </div>
                      <div className="text-black font-light flex flex-col items-center gap-5">
                        <h1 className="font-bold text-[25px]">SERVIÇOS</h1>
                        <h2 className="hover:text-yellow-300 cursor-pointer">LOJA</h2>
                        <h2 className="hover:text-yellow-300 cursor-pointer">DESENVOLVIMENTO</h2>
                        <h2 className="hover:text-yellow-300 cursor-pointer">EMAIL</h2>
                      </div>
             </section>
             <section className="w-full" >
                      <div className="w-full flex flex-row text-pink-300 justify-around py-[10px]">
                           <h3>BLACKPINK</h3>
                           <h3>@Direitos_reservados-2025</h3>
                           <h3>Site para treino</h3>
                      </div>
             </section>
     </footer>
  </>
};
export default Footer;