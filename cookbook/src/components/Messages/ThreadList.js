import React from 'react';
import PropTypes from 'prop-types';
class ThreadList extends React.Component {
    static contextTypes = {
        users: PropTypes.array,
    };

    render() {
        return (
            <div className={styles.threadList}>
                <ul className={styles.list}>
                    {this.context.users.map((u, idx) => {
                        return (
                            <UserListing
                                onClick={this.props.onClick}
                                key={idx}
                                index={idx}
                                user={u}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    };
}


export default ThreadList

