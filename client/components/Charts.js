import { tsvFormatValue } from 'd3';
import React from 'react';
import lollipop from './graphd3'

class Charts extends React.Component {
    constructor() {
        super()
        this.state = {
           numbers: [10829, 14350, 2027]
        }
        this.rendLol = this.rendLol.bind(this)
        this.value = {
            is: false,
            called() {
                this.is = true
             }

        }
    }
    componentDidMount() {
    }

    rendLol() {
        lollipop.render("#lollipop", 250, 500)
        this.value.called()
    }

    componentDidUpdate() {

    }
    render() {
        return (
            <div id="lolli" onClick = {this.rendLol} className="d-block mt-5 text-center mx-auto">
                <svg id="lollipop" height="250" width="500"></svg>
            </div>
        )
    }
}

export default Charts