
    let deals:[] = [];
    let fetchedOn = "";
    
    fetch('https://dmback.deno.dev/deals')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deals = (data.links)
            console.log(deals);
            fetchedOn = (data.timestamp)
        })
        .catch(err => console.log(err))


export default async function Home() {
  return (
   <div class="px-4 py-8 mx-auto">
    <h1>deals</h1>
    <br />
    <p>{await fetchedOn}</p>
    <br />
    <ul>
        <li><a href={deals[0].url}>{deals[0].title}</a> +{deals[0].upvotes}</li>
        <li><a href={deals[1].url}>{deals[1].title}</a> +{deals[1].upvotes}</li>
        <li><a href={deals[2].url}>{deals[2].title}</a> +{deals[2].upvotes}</li>
        <li><a href={deals[3].url}>{deals[3].title}</a> +{deals[3].upvotes}</li>
    </ul>
   </div>
  );
}