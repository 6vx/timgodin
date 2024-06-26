
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"Payments and Subscriptions","description":"Send me some love using any of the methods listed here.","tags":["crypto","money","cash","payments","buymeacoffee","donate","support"],"created":"2024-05-13","updated":"2024-06-17","private":"false"}
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

<h1>Send Crypto</h1>
<h3>TON</h3>
<p>UQAu8pQHB5b9v_isn7lU6ZWjUAKs2Pr7ilZf-J2p4_AcuSD8</p>
<h3>BTC</h3>
<p>12QoR6H3bXCAVmaEo9Q5jWjksXqpQjLLh9</p>
<h3>USDT TRC20</h3>
<p>TWFtKwsNGjHVMMnKJdcg6obeKWr8iyENyT</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
