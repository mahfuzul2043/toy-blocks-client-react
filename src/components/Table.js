import React from 'react';
import {connect} from 'react-redux';

class Table extends React.Component {
    render() {
        const { node } = this.props;

        return (
            <div>
                <table>
                    <tbody>
                        { node.blocks.map((block, index) => (<tr key={index}><td>{block.id}</td><td>{block.attributes.data}</td></tr>)) }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;