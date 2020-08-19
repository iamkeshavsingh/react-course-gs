import React, { Component } from 'react';


function TodoFormHOC(MyComponent) {
    return class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                title: '',
                description: ''
            };

            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

        componentDidMount() {
            var { isEdit, todo } = this.props;
            if (isEdit) {
                this.setState({
                    title: todo.title,
                    description: todo.description
                });
            }
        }

        resetState() {
            this.setState({
                title: '',
                description: ''
            });
        }

        handleSubmit(e) {
            e.preventDefault();
            this.props.submit(this.state);
            this.resetState();
        }

        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        render() {
            var { title, description } = this.state;
            return (
                <MyComponent {...this.props} title={title} description={description} change={this.handleChange} submit={this.handleSubmit} />
            );
        }
    }
}


export default TodoFormHOC;

