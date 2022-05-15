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
            pageRangeDisplayed={5}
            itemClass="page-item"
            linkClass="page-link"
            prevPageText={<i className="lni lni-chevron-right"></i>}
            nextPageText={<i className="lni lni-chevron-left"></i>}
            firstPageText={<i className="lni lni-angle-double-right"></i>}
            lastPageText={<i className="lni lni-angle-double-left"></i>}
        />
    );
}

export default Paginator ;