import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import CardPessoa from "../components/cardpessoa.jsx";
import jisooimg from "/assets/jisoo.jpg";
import jennieimg from "/assets/jennie.jpg";
import roseimg from "/assets/rose.jpg";
import lisaimg from "/assets/lisa.jpg";
import Slideshow from "../components/slideshow.jsx";
import img1 from "/assets/bg1.png";
import img2 from "/assets/bg2.png";
import img3 from "/assets/bg3.png";

function Index(){
    return(
        <section>
            <Header/>
            <section className="bg-white w-full h-auto gap-[30px] flex flex-col">
                <div className ="w-full h-[250px] flex flex-col justify-center gap-[50px] items-center">
                    <h1 className ="text-[45px] font-bold">Bem vindo ao grupo de K-pop BlackPink</h1>
                    <h2 className ="text-[20px] text-gray-600">Veja todas as idols do grupo!</h2>
                </div>
                <div className ="w-full flex justify-center gap-[50px]">
                    <a href="https://pt.wikipedia.org/wiki/Jisoo"><CardPessoa nome="Jisoo" desc="Lorem ipsum dolor sit amet.. Lorem ipsum dolor sit amet.. Lorem ipsum dolor sit amet.." img={jisooimg}/></a>
                    <a href="https://pt.wikipedia.org/wiki/Jennie"><CardPessoa nome="Jennie" desc="Lorem ipsum dolor sit amet.. Lorem ipsum dolor sit amet.. Lorem ipsum dolor sit amet.." img={jennieimg}/></a>
                    <a href="https://pt.wikipedia.org/wiki/Ros%C3%A9_(cantora)"><CardPessoa nome="Rosé" desc="Lorem ipsum dolor sit amet.. Lorem ipsum dolor sit amet.. Lorem ipsum dolor sit amet.." img={roseimg}/></a>
                    <a href="https://pt.wikipedia.org/wiki/Lisa_(rapper)"><CardPessoa nome="Lisa" desc="Lorem ipsum dolor sit amet.. Lorem ipsum dolor sit amet.. Lorem ipsum dolor sit amet.." img={lisaimg}/></a>
                </div>
                <div className ="w-full text-justify text-gray-800">
                    <p className="p-[60px] text-[20px]" >
                        Blackpink (hangul: 블랙핑크; rr: Beullaegpingkeu; estilizado como BLACKPINK ou BLΛƆKPIИK) é um grupo feminino sul-coreano formado pela YG Entertainment, composto por Jisoo, Jennie, Rosé e Lisa. O quarteto estreou em agosto de 2016 com o single álbum Square One, que conta com os singles "Boombayah" e "Whistle".Blackpink é o girl group coreano de maior sucesso internacionalmente e muitas vezes foi apelidado de "o maior girl group do mundo".
                    </p>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-[30px] p-[50px]">
                    <div className="w-full flex justify-space-between justify-center items-center p-[20px] gap-[20px]">
                        <div className="w-[38%] h-[2px] bg-gray-400 "></div>
                        <h2>imagens</h2>
                        <div className="w-[38%] h-[2px] bg-gray-400"></div>
                    </div>
                    <Slideshow image1={img1} image2={img2} image3={img3} />
                </div>
            </section>
           <Footer/>
        </section>
    );
}
export default Index;