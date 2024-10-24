interface PokemonCardprops {
name: string;
imgSrc?: string;
}

function PokemonCard({ name, imgSrc } : PokemonCardprops) {
    return (
   <figure>
    {(imgSrc) ? 
    (<img src={imgSrc}  alt={name} />) : (<p>???</p>)}
    <figcaption>{name}</figcaption>
   </figure>
  );
}
export default PokemonCard; 
