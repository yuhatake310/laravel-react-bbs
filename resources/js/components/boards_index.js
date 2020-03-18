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
import RaisedButton from 'material-ui/RaisedButton';

import { readBoards } from '../actions';

class BoardsIndex extends Component {
    componentDidMount() {
        this.props.readBoards();
    }

    render() {
        const style = {
            position: "fixed",
            right: 12,
            top: 60
        }

        return _.map(this.props.boards, board => (
            <React.Fragment key={board.id}>
                <RaisedButton label="ユーザー情報" style={style} containerElement={<Link to="/users/show" />} />
                <Table style={{ maxWidth: '900px', margin: 'auto' }}>
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
                                <TableRowColumn>
                                    <Link to={`/threads/${thread.id}`}>
                                        {thread.name}
                                    </Link>
                                </TableRowColumn>
                                <TableRowColumn> {thread.updated_at} </TableRowColumn>
                            </TableRow>
                        ))};
                        <TableRow>
                            <TableRowColumn colSpan={2}>
                                <RaisedButton label="スレッド新規作成" containerElement={<Link to={`/threads/new/${board.id}`} />} />
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table >
                <br />
            </React.Fragment >
        ));
    }
}

const mapStateToProps = state => {
    return { boards: state.boards_index.boards };
};

const mapDispatchToProps = ({ readBoards });

export default connect(mapStateToProps, mapDispatchToProps)(BoardsIndex);