import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, change } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { createThread } from '../actions';

class ThreadsNew extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
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
        );
    }

    async onSubmit(values) {
        await this.props.createThread(values);
        this.props.history.push('/');
    }

    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props;
        const { id } = this.props.match.params;
        this.props.dispatch(change("threadsNewForm", "board_id", id))
        const style = { margin: 12 };

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div><Field label="スレッドタイトル" name="name" type="text" component={this.renderField} /></div>

                <RaisedButton label="新規作成" type="submit" style={style} disabled={pristine || submitting || invalid} />
                <RaisedButton label="戻る" style={style} containerElement={<Link to="/" />} />
            </form >
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.name) errors.name = "スレッドタイトルを入力してください。";

    return errors;
};

const mapDispatchToProps = ({ createThread });

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'threadsNewForm' })(ThreadsNew)
);