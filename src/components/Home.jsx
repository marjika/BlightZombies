import React from 'react'
import './Home.css'
// TODO - add proptypes

// const Home = props => {
// 	if (props.user) {
// 		return (
// 			<div className="Home">
// 			<h1>Blight or Zombie-itis</h1>
// 				<p>Current User:</p>
// 				<code>
// 					{JSON.stringify(props)}
// 				</code>
// 			</div>
// 		)
// 	} else {
// 		return (
// 			<div className="Home">
// 			<h1>Blight or Zombie-itis</h1>
// 				<p>Current User:</p>
// 				<code>
// 					{JSON.stringify(props)}
// 				</code>
// 			</div>
// 		)
// 	}
// }

const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
			</div>
		)
	} else {
		return (
			<div className="Home">
			</div>
		)
	}
}

export default Home
