import React, {Component} from "react";

class Wellcome extends Component {
    render(props) {
        return <h1>Wellcome {this.props.name} A.K.A {this.props.heroName}</h1>
    }
}

export default Wellcome