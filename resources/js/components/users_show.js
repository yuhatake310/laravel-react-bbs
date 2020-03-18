import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { getUser, deleteUser, putUser } from '../actions';

class UsersShow extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    componentDidMount() {
        this.props.getUser();
    }

    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field;

        return (
            <TextField
                hintText={label}
                floatingLabelText={label}
                type={type}
                errorText={touched && error}
                {...input}
                fullWidth={true}
            />
        )
    }

    async onDeleteClick() {
        await this.props.deleteUser();
        this.props.history.push('/');
    }

    async onSubmit(values) {
        await this.props.putUser(values);
    }


    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props;
        const style = { margin: 12 };

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div><Field label="Email" name="email" type="text" component={this.renderField} /></div>
                <div><Field label="Name" name="name" type="text" component={this.renderField} /></div>

                <div>
                    <RaisedButton label="編集" type="submit" style={style} disabled={pristine || submitting || invalid} />
                    <RaisedButton label="戻る" style={style} containerElement={<Link to="/" />} />
                    <RaisedButton label="退会" style={style} onClick={this.onDeleteClick} />
                </div>
            </form >
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.email) errors.email = "Enter a email, please.";
    if (!values.name) errors.name = "Enter a name, please.";

    return errors
}

const mapStateToProps = state => {
    if (state.users_show.users) {
        const user = state.users_show.users
        return { initialValues: user, user }
    } else {
        return { users: state.users_show };
    }
};

const mapDispatchToProps = ({ getUser, deleteUser, putUser });

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ validate, form: 'userShowForm' })(UsersShow)
);