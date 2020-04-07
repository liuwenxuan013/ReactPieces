import React from "react";


class Function extends React.Component {

    handleSubmit = (event) => {
        alert('Your favorite flavor is: ');

    };
    render() {
        return <div className>
            <form onSubmit={this.handleSubmit}>

                <input type="text" />
                <input type="submit" />

            </form>



        </div>
    }
};

export default Function;





