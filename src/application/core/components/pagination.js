import useTrans from "../hooks/trans";
import React from "react";
import Pagination from "react-js-pagination";

const Paginator =  (props) => {
    const {items , clousre } = props ;
    return (
        <Pagination
            activePage={items?.meta?.current_page ? items?.meta?.current_page : 0}
            itemsCountPerPage={items?.meta?.per_page ? items?.meta?.per_page : 0 }
            totalItemsCount={items?.meta?.total ? items?.meta?.total : 0}
            onChange={(pageNumber) => clousre(pageNumber) }
            pageRangeDisplayed={8}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText={ useTrans("dashboard.pagination.firstPage") }
            lastPageText={ useTrans("dashboard.pagination.lastPage") }
        />
    );
}

export default Paginator ;