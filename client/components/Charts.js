import React from 'react';
import lollipop from './graphd3'

class Charts extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        lollipop.render("#lollipop", 250, 500)
    }

    componentDidUpdate() {
        lollipop.render()
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