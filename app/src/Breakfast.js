export default function Breakfast(props) {
    //console.log(props.menuItems)
    const breakfastList = props.menuItems
      .filter((el) => el.category === "Breakfast")
      .map((item) => (
         
        <div className="col-s-1 col-md-6 col-l-4 col-xl-4 mb-3">
        <div className="card" style={{ width: "18rem", height: "20rem" }}>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">${item.price}</p>
            <p className="card-text">{item.cuisine_type}</p>
          </div>
        </div>
        </div>
      
      ));
  
    return (
      <div className="container">
          <div className="row">
      {breakfastList}
      </div>
      </div>
    )
  }
  