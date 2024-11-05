
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-07-04","updated":"2024-11-03","title":"Tim Godin - Major Names List","description":"00 Chichi","tags":["timgodin"],"private":"false"}
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
<ul>
<li>
<p>00 Chichi</p>
</li>
<li>
<p>01 Jerry</p>
</li>
<li>
<p>02 Jenny</p>
</li>
<li>
<p>03 Chad</p>
</li>
<li>
<p>04 Jim</p>
</li>
<li>
<p>05 Ashley</p>
</li>
<li>
<p>06 Jess</p>
</li>
<li>
<p>07 Jack</p>
</li>
<li>
<p>08 Chef</p>
</li>
<li>
<p>09 Chap</p>
</li>
<li>
<p>10 Rash</p>
</li>
<li>
<p>11 Rere</p>
</li>
<li>
<p>12 Ron</p>
</li>
<li>
<p>13 Red</p>
</li>
<li>
<p>14 Ram/Rome</p>
</li>
<li>
<p>15 Riley</p>
</li>
<li>
<p>16 Rousseau</p>
</li>
<li>
<p>17 Erik</p>
</li>
<li>
<p><a href="18---raffi">18 - Raffi</a></p>
</li>
<li>
<p><a href="19---reap">19 - Reap</a></p>
</li>
<li>
<p>20 Nash</p>
</li>
<li>
<p>21 Nero</p>
</li>
<li>
<p>22 Nun</p>
</li>
<li>
<p>23 Ned</p>
</li>
<li>
<p>24 Nam</p>
</li>
<li>
<p>25 Neil</p>
</li>
<li>
<p>26 Ness</p>
</li>
<li>
<p>27 Nick</p>
</li>
<li>
<p>28 Neve</p>
</li>
<li>
<p>29 Nappa</p>
</li>
<li>
<p>30 Tosh</p>
</li>
<li>
<p>31 Terry</p>
</li>
<li>
<p>32 Tien</p>
</li>
<li>
<p>33 Diddy</p>
</li>
<li>
<p>34 Tim</p>
</li>
<li>
<p>35 Toll</p>
</li>
<li>
<p>36 <span class="highlight">Tess</span></p>
</li>
<li>
<p>37 Doug</p>
</li>
<li>
<p>38 Dave</p>
</li>
<li>
<p>39 Dub</p>
</li>
<li>
<p>40 Moash</p>
</li>
<li>
<p>41 Maury</p>
</li>
<li>
<p>42 <span class="highlight">Munna</span></p>
</li>
<li>
<p>43 Mat</p>
</li>
<li>
<p>44 Mom</p>
</li>
<li>
<p>45 Molly</p>
</li>
<li>
<p>46 Messy</p>
</li>
<li>
<p>47 Mac</p>
</li>
<li>
<p>48 Mav</p>
</li>
<li>
<p>49 Mab</p>
</li>
<li>
<p>50 Lash</p>
</li>
<li>
<p><a href="51---lore">51 - Lore</a></p>
</li>
<li>
<p>52 Lenny</p>
</li>
<li>
<p>53 Litt</p>
</li>
<li>
<p><a href="54---liam">54 - Liam</a></p>
</li>
<li>
<p>55 <span class="highlight">Loli</span></p>
</li>
<li>
<p>56 Lisa</p>
</li>
<li>
<p>57 Locke</p>
</li>
<li>
<p>58 Olive</p>
</li>
<li>
<p>59 <span class="highlight">Lab</span></p>
</li>
<li>
<p>60 Sasha</p>
</li>
<li>
<p>61 Sarah</p>
</li>
<li>
<p>62 Sun</p>
</li>
<li>
<p>63 Sayid</p>
</li>
<li>
<p>64 Sam</p>
</li>
<li>
<p>65 Cell</p>
</li>
<li>
<p>66 Sis</p>
</li>
<li>
<p>67 Sokka</p>
</li>
<li>
<p>68 Sophie</p>
</li>
<li>
<p>69 CB</p>
</li>
<li>
<p>70 Kesha</p>
</li>
<li>
<p>71 Kiora</p>
</li>
<li>
<p>72 Gohan</p>
</li>
<li>
<p>73 Kate</p>
</li>
<li>
<p>74 Kim</p>
</li>
<li>
<p>75 Cole</p>
</li>
<li>
<p>76 Cass</p>
</li>
<li>
<p>77 Goku</p>
</li>
<li>
<p>78 Kev</p>
</li>
<li>
<p>79 Kip</p>
</li>
<li>
<p>80 Fash</p>
</li>
<li>
<p>81 Fry</p>
</li>
<li>
<p>82 <span class="highlight">Evan</span></p>
</li>
<li>
<p>83 <span class="highlight">Fit</span></p>
</li>
<li>
<p>84 <span class="highlight">Fem</span></p>
</li>
<li>
<p>85 Phil</p>
</li>
<li>
<p>86 Fez</p>
</li>
<li>
<p>87 Vick</p>
</li>
<li>
<p>88 <span class="highlight">Viv</span></p>
</li>
<li>
<p>89 Fabio</p>
</li>
<li>
<p>90 Bush</p>
</li>
<li>
<p>91 Oprah</p>
</li>
<li>
<p>92 Bon</p>
</li>
<li>
<p>93 Bot</p>
</li>
<li>
<p>94 Pam</p>
</li>
<li>
<p>95 Baal</p>
</li>
<li>
<p>96 Buzz</p>
</li>
<li>
<p>97 Beck</p>
</li>
<li>
<p>98 <span class="highlight">Puff</span></p>
</li>
<li>
<p>99 Pippy</p>
</li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
