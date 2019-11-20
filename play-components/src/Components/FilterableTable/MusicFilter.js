import FilterableTable from './FilterableTable';
import React from "react";
import Data from '../Datas/Data';
function MusicFilter(){
    return(
        <FilterableTable
            items={Data.MUSIC}
        >
            {'music'}

        </FilterableTable>
    )
}
export default MusicFilter;
