import React, { Component } from 'react'
import Typical from 'react-typical'

class Home extends Component {
    render () {
        return (
            <div id="home">
                <div id="home" style={{height: 500}}>
                    <Typical
                        steps={['Anna Liang']}
                        wrapper='h1'
                    />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.</p>
                </div>
            </div>
        )
    }
}

export default Home;