import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { readBoards } from '../actions';

class BoardsIndex extends Component {
    componentDidMount() {
        this.props.readBoards();
    }

    render() {
        return _.map(this.props.boards, board => (
            <Table key={board.id}>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    colSpan={2}
                >
                    <TableRow>
                        <TableHeaderColumn>{board.name}</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={false}>
                    {_.map(board.threads, thread => (
                        <TableRow key={thread.id}>
                            <TableRowColumn> {thread.name} </TableRowColumn>
                            <TableRowColumn> {thread.updated_at} </TableRowColumn>
                        </TableRow>
                    ))};
                </TableBody>
            </Table >
        ));
    }
}

const mapStateToProps = state => {
    return { boards: state.boards_index.boards };
};

const mapDispatchToProps = ({ readBoards });

export default connect(mapStateToProps, mapDispatchToProps)(BoardsIndex);