import React from 'react';

function SearchBar(){
return(
    <form>
        <input type="text" placeholderl = "Search..." />
        <p>
            <input type= "checkbox" />
            {' '}Only show items marked
        </p>
    </form>
);
}

class ItemTable extends React.Component{
    render(){
        const rows=[];
        let lastCategory=null;
        this.props.items.forEach((item)=>{
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
                <tr>Name</tr>
                <tr>Price</tr>
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
    render(){
        return(
            <div>
                <SearchBar />
                <ItemTable items={this.props.items}/>
            </div>
        );
    }

}

export default FilterableTable;

