function CardPessoa({ nome, desc, img}){
return(
<section className=" w-[275px] h-[440px] rounded-[6px] flex flex-col items-center overflow-hidden relative group cursor-pointer">
   <img src = {img} className= "w-full h-full object-cover group-hover:scale-[1.1] transition-transform duration-300 "/>
   <div className ="absolute flex flex-col bg-gray-200/70 w-full h-[190px] items-center translate-y-[500px] group-hover:translate-y-[260px] transition-transform duration-300" >
        <h2 className ="text-[25px] font-semibold">{nome}</h2>
        <p className ="text-[14px] text-justify text-gray-800 p-[15px]">{desc}</p>
   </div>
</section>
);
}
export default CardPessoa