import * as React from 'react';
import { loadModules } from 'react-arcgis';

export default class FlyToControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            view: props.view
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        loadModules(['esri/Graphic']).then(([ Graphic ]) => {
            var options = {
                speedFactor: 0.1, // animation is 10 times slower than default
                easing: "out-quint" // easing function to slow down when reaching the target
            };
              
            this.props.view.goTo([-122, 45], options);
        }).catch((err) => console.error(err));
    }

    render() {
        return (
            <div style={{position: 'absolute', right: '5%', top: '5%'}}>
                <button onClick={this.onClick}>Fly To Oregon</button>
            </div>
        )
    }

    componentWillMount() {
        loadModules(['esri/Graphic']).then(([ Graphic ]) => {
            console.log('success');
        }).catch((err) => console.error(err));
    }

    componentWillUnmount() {
    }
}