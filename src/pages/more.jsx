import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import video from "/assets/video.mp4";
function More(){
    return(
    <section>
        <Header/>
        <section className="w-full h-auto flex justify-center relative">
            <video className="w-full object-cover relative z-0" loop autoPlay muted>
                <source src={video} type="video/mp4"/>
            </video>
            <div className="w-full flex flex-col items-center absolute py-[55px] gap-[30px] z-20">
                <h1 className="text-yellow-300 text-[60px] font-lighter font-mono">Nícolas Lima Schinagel do Nascimento </h1>
                <h1 className="text-yellow-300 text-[60px] font-lighter tracking-wider font-mono">Desenvolvedor Web </h1>
                <h3 className="text-yellow-500 text-[35px] font-light tracking-wider font-mono">C#</h3>
                <h3 className="text-yellow-500 text-[35px] font-light tracking-wider font-mono">JavaScript</h3>
                <h3 className="text-yellow-500 text-[35px] font-light tracking-wider font-mono">MySql</h3>
            </div>
            <div className="h-full w-full bg-black/30 absolute z-10"></div>

        </section>
        <Footer/>
    </section>
    );
}
export default More;