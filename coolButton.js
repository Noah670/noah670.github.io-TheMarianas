'use strict';

const e = React.createElement;
// coolButton 
class coolButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button', { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#coolButton_container');
ReactDOM.render(e(coolButton), domContainer);