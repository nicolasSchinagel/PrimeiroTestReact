import {Link } from "react-router-dom";
function Header(){
    return(
        <header className ="font-bold bg-pink-200 w-full h-[100px] p-4 flex justify-between items-center text-[18px]">
            <h1>BlackPink</h1>
            <section className="flex gap-4 hover:cursor-pointer">
                <h2 className="hover:text-yellow-400 hover:-translate-y-[3px] transition-transform duration-200"><Link to ="/">home</Link></h2>
                <h2 className="hover:text-yellow-400 hover:-translate-y-[3px] transition-transform duration-200"><Link to ="/musics">musics</Link></h2>
                <h2 className="hover:text-yellow-400 hover:-translate-y-[3px] transition-transform duration-200"><Link to ="/dances">dances</Link></h2>
                <h2 className="hover:text-yellow-400 hover:-translate-y-[3px] transition-transform duration-200"><Link to ="/more">more...</Link></h2>
            </section>
        </header>
    );
}
export default Header;