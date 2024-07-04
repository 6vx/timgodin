
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-07-04","updated":"2024-07-04","title":"Tim Godin - Major Names List","description":"Chichi\nJerry\nJenny\nChad\nJim\nAshley\nJess\nJack\nChef\nChap\nRash\nRere\nErin\nRed\nRam\nRahl\nRousseau\nErik\nRaffi\nRIP\nNash\nNero\nNun\nNed\nNam\nAnal\nNess\nNick\nNeve\nNappa\nTosh\nTerry\nTien\nDiddy\nTim\nToll\nTess\nDoug\nDaif\nDub\nMoash\nMaury\nMunna\nMat\nMom\nMolly\nMessy\nMac\nMav\nMab\nLash\nLore\nLenny\nLitt\nLamb\nLoli\nLisa\nLocke\nOlive\nLab\nSasha\nSarah\nSun\nSayid\nSam\nCell\nSis\nSokka\nSophie\nCB\nKesha\nKiora\nGohan\nKate\nKim\nCole\nCass\nGoku\nKev\nKip\nFash\nFry\nEvan\nFit\nFem\nPhil\nFez\nVick\nVivec\nFabio\nBush\nOprah\nBon\nBot\nPam\nBaal\nBuzz\nBeck\nPuff\nPippy","tags":["timgodin"],"private":"false"}
export default function Home({ data }: PageProps) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        {/* Add other SEO-related tags here */}
        {data.tags.map(tag => (
          <meta name="keywords" content={tag} />
        ))}
      </Head>
      <div class="main text-left w-max-md mx-auto">

<h1>Names</h1>
<p>Chichi
Jerry
Jenny
Chad
Jim
Ashley
Jess
Jack
Chef
Chap
Rash
Rere
Erin
Red
Ram
Rahl
Rousseau
Erik
Raffi
RIP
Nash
Nero
Nun
Ned
Nam
Anal
Ness
Nick
Neve
Nappa
Tosh
Terry
Tien
Diddy
Tim
Toll
Tess
Doug
Daif
Dub
Moash
Maury
Munna
Mat
Mom
Molly
Messy
Mac
Mav
Mab
Lash
Lore
Lenny
Litt
Lamb
Loli
Lisa
Locke
Olive
Lab
Sasha
Sarah
Sun
Sayid
Sam
Cell
Sis
Sokka
Sophie
CB
Kesha
Kiora
Gohan
Kate
Kim
Cole
Cass
Goku
Kev
Kip
Fash
Fry
Evan
Fit
Fem
Phil
Fez
Vick
Vivec
Fabio
Bush
Oprah
Bon
Bot
Pam
Baal
Buzz
Beck
Puff
Pippy</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
