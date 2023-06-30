export default function Dinner(props) {
    //console.log(props.menuItems)
    const dinnerList = props.menuItems.filter((el) => el.category === "Dinner").map((item) => <div className="card" style={{width: '18rem'}}>
        
    <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.description}</p>
      <p className="card-text">{item.price}</p>
      
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>);
    
    return (
        <>
        <h1>The Rolling Scones</h1>
        
            {dinnerList}
      
      </>

    )
}