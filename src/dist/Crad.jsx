import React from 'react'
import "./style.css"
const Crad = () => {
    const url = "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80"
  return (
    <>
        <section>
			<div className="row">
				<div className="col-md-4 col-sm-6 col-xs-12">
					<div className="card" >
						<div className="cover item-a" style={{backgroundImage:`url(${url})`}}>
							<h1>Little<br/>Bonsai</h1>
							<span className="price">$79</span>
							<div className="card-back">
								<a href="#">Add to cart</a>
								<a href="#">View detail</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>		
    </>
  )
}

export default Crad