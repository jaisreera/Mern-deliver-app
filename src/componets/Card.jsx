import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        
        <div className="card " style={{ width: "18rem", maxHeight: "360" }}>
          <img src="https://media.istockphoto.com/id/1341905666/photo/chinese-food-veg-pizza.jpg?s=612x612&w=0&k=20&c=ZMNxcRhL9uGV8zebXg5wGCh-5GzVBRHsu-lz7Sc06V4=" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some importaint text for card.</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="'d-inline h-100 fs-5">
                Total price
                </div>
              
            </div>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
