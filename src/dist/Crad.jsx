import React from 'react'
import "./style.css"
import { useDispatch } from 'react-redux'


const Crad = (props) => {
	// console.log(props.products);
	const dispatch = useDispatch()
	const AddToCard = ()=>{
		dispatch(
			AddCrad
		)
	}

  return (
    <>
        <section>
			<div className="row">
				{props.products && props.products.map((product)=>{
					return (
						<div className="col-md-4 col-sm-6 col-xs-12">npm ss
							<div className="card" >
								<div className="cover item-a" style={{backgroundImage:`url(${product.image})`}}>
									<h1>{product.title.slice(0,17)}</h1>
									<span className="price">${product.price}</span>
									<div className="card-back">
										<a href="#"><button onClick={AddToCard(product)}>Add to cart</button></a>
										<a href="#">View detail</a>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</section>		
    </>
  )
}

export default Crad