import FilterableTable from './FilterableTable';
import React from "react";
import Data from '../Datas/Data';
function MoviesFilter(){
    return(
        <FilterableTable
            items={Data.MOVIES}
        >
            {'movies'}

        </FilterableTable>
    )
}
export default MoviesFilter;
