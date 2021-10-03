import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from "@material-ui/lab";
import AppDropdown from './AppDropdown';
import { PAGE_OPTIONS } from '../../constants/appConstants';

const AppPaging = ({
    count, page, handleChange, handleChangeRowsPerPage,
}) => (
    <div className="pagination-section">
        <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
        />
        <div className="col-md-3">
            <AppDropdown
                label="Rows per page"
                options={PAGE_OPTIONS}
                onSelection={e => handleChangeRowsPerPage(e.target.value)}
            />
        </div>
    </div>  
)

AppPaging.propTypes = {
    handleChange: PropTypes.func,
    handleChangeRowsPerPage: PropTypes.func,
    page: PropTypes.number,
    count: PropTypes.number,
};

export default AppPaging;