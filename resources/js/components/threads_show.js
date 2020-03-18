import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { Field, reduxForm, change } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { getThread, createMessage } from '../actions';

class ThreadsShow extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.dispatch(change("threadsShowForm", "thread_id", id))
        if (id) this.props.getThread(id)
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
        await this.props.createMessage(values);
        location.reload();
    }

    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props;

        return _.map(this.props.threads, thread => (
            <React.Fragment key={thread.id}>
                <Table style={{ maxWidth: '900px', margin: 'auto' }}>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>{thread.name}</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false}>
                        {_.map(thread.messages, (message, index) => (
                            <React.Fragment key={message.id}>
                                <TableRow>
                                    <TableRowColumn style={{ padding: "10px" }}>
                                        {index + 1} ： {message.user.name} ： {message.updated_at}
                                        <br />
                                        {message.content}
                                        <br />
                                    </TableRowColumn>
                                </TableRow>
                            </React.Fragment>
                        ))};
                        <TableRow>
                            <TableRowColumn style={{ padding: "10px" }}>
                                <form onSubmit={handleSubmit(this.onSubmit)}>
                                    <div><Field label="メッセージ内容" name="content" type="text" component={this.renderField} /></div>

                                    <RaisedButton label="新規作成" type="submit" disabled={pristine || submitting || invalid} />
                                </form >
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </React.Fragment>
        ));
    }
}

const mapStateToProps = state => {
    return { threads: state.threads_show };
};

const mapDispatchToProps = ({ getThread, createMessage });

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ form: 'threadsShowForm' })(ThreadsShow)
);;