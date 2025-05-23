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
            // Liked State: Disabled Materialize button with "check" icon and "Liked!" text
            return e(
                'button', { className: 'btn disabled', disabled: true }, [
                    e('i', { className: 'material-icons left' }, 'check'),
                    'Liked!'
                ]
            );
        }

        // Active State (not liked yet): Materialize button with "thumb_up" icon and "Like" text
        return e(
            'button', {
                className: 'btn waves-effect waves-light',
                onClick: () => this.setState({ liked: true })
            }, [
                e('i', { className: 'material-icons left' }, 'thumb_up'),
                'Like'
            ]
        );
    }
}

const domContainer = document.querySelector('#coolButton_container');
ReactDOM.render(e(coolButton), domContainer);
