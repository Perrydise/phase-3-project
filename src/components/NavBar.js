import React from "react"

function Navbar () {
    return (
//         <div className="navbar">
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   {/* <a className="navbar-brand" href="/">Navbar</a> */}
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
        
//         <a className="nav-link" href="/">Home</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/Forsale">Sell your car</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/showCars">See cars for sale</a>
//       </li>
//     </ul>
//   </div>
// </nav>
//         </div>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/Forsale">Sell your car</a>
      <a class="nav-item nav-link" href="/showCars">Cars for sale</a>
    </div>
  </div>
</nav>

    )
}

export default Navbar