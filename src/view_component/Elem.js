export default function Elem(props) {
    function kattintas(){

        // ez történik ha kattintunk az elemre
        console.log("haho", props.index)
        //meghívjuk a szülő megfelelő metódusát
        props.kattintas(props.index)
    }
  
    return (
    <div className="elem" onClick={kattintas}>
      <p>{props.ertek}</p>
    </div>
  );
}
