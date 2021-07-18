import React from 'react';
import lollipop from './graphd3'

class Charts extends React.Component {
    constructor() {
        super()
        this.state = {
           numbers: [10829, 14350, 2027]
        }
    }
    componentDidMount() {
        lollipop.render("#lollipop", 250, 500)
    }

    componentDidUpdate() {
        lollipop.render("#lollipop", 250, 500)
    }

    render() {
        return (
            <div className="d-block mt-5 text-center mx-auto">
                <svg id="lollipop" height="250" width="500"></svg>
            </div>
        )
    }
}

export default Charts