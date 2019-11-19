import React from 'react';

class SearchBar  extends React.Component {
    filterTextChgHandler=(e)=>{
        this.props.onFilterTextChg(e.target.value);
    };
    markedChgHandler=(e)=>{
        this.props.onMarkedChg(e.target.checked);
    };
    render(){
        return(
            <form>
                <input type="text"
                       placeholder = "Search..."
                       value={this.props.filterText}
                       onChange={this.filterTextChgHandler}
                />
                <p>
                    <input
                        type= "checkbox"
                        checked={this.props.isMarkedOnly}
                        onChange={this.markedChgHandler}
                    />
                    {' '}Only show items marked
                </p>
            </form>
        );
    }

}

class ItemTable extends React.Component{
    render(){
        const filterText=this.props.filterText;
        const isMarkedOnly=this.props.isMarkedOnly;
        const rows=[];
        let lastCategory=null;
        this.props.items.forEach((item)=>{
            if(item.name.indexOf(filterText)===-1) return;
            if(isMarkedOnly&&!item.stocked) return;
            if(item.category!==lastCategory){
                rows.push(
                    <ItemCategoryRow
                        category={item.category}
                        key={item.category}
                    />
                );
            }
            rows.push(
                <ItemRow
                    item={item}
                    key={item.name}
                />
            );
            lastCategory=item.category;
        });
        return(
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>

                </thead>
                <tbody>{rows}</tbody>
            </table>

        );
    }


}

class ItemCategoryRow extends React.Component{
    render(){
        const category=this.props.category;
        return(
            <div>
                <tr>
                    <th colSpan= "2">
                        {category}
                    </th>
                </tr>
            </div>);
    }
}

class ItemRow extends React.Component{
    render(){
        const item=this.props.item;
        const name=item.stocked? <span style={{color:'green'}}> {item.name} </span> : item.name;
        return(
            <div>
                <tr>
                    <td>{name}</td>
                    <td>{item.price}</td>
                </tr>
            </div>
        );
    }
}

class FilterableTable extends React.Component{
    state={
        filterText:'',
        isMarkedOnly:false,
    };
    filterTextChgHandler=(filterText)=>{
        this.setState({filterText:filterText});
    };
    markedChgHandler=(isMarkedOnly)=>{
        this.setState({ isMarkedOnly:isMarkedOnly})
    };
    render(){
        return(
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    isMarkedOnly={this.state.isMarkedOnly}
                    onFilterTextChg={this.filterTextChgHandler}
                    onMarkedChg={this.markedChgHandler}
                />
                <ItemTable
                    items={this.props.items}
                    filterText={this.state.filterText}
                    isMarkedOnly={this.state.isMarkedOnly}

                />
            </div>
        );
    }

}

export default FilterableTable;

