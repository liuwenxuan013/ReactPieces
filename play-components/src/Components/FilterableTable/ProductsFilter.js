
import FilterableTable from './FilterableTable';
import React from "react";
import Data from '../Datas/Data';
function ProductsFilter(){
    return(
        <div>
            <FilterableTable
                items={Data.ITEMS}
            >
               {'products'}


            </FilterableTable>
        </div>

    )
}
export default ProductsFilter;
