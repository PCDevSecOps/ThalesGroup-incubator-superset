import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './AgGridComponent.css';

import PropTypes from 'prop-types';

const propTypes = {
    payload: PropTypes.object,
    formData: PropTypes.object,
    height: PropTypes.number,
    onAddFilter: PropTypes.func,
  };

function NOOP() {} 

/**
 * AgGrid Visualization
 * @param {*} element
 * @param {*} props
 */
function Ag_gridViz(element, props) {
 
    const {height, payload, formData ,onAddFilter = NOOP } = props;
    const containerId  = 'slice-aggrid-1';
    const container = element
    container.id = containerId
    container.classList.add("ag-theme-balham");
    
    const data = payload.data.records;
    const cols = []
    // container[0].classList.add("ag-theme-balham");
    
    payload.data.columns.forEach(element => {
      cols.push({
      headerName:element,
      field: element,
      //sortable:"true",
      //editable: true,
      //rowDrag: true,
      //rowSelection: "multiple"
      //pinned: "left",
      //lockPinned: true,
      //cellClass: "lock-pinned",
    })
          
    })
    
    // const fd = slice.formData;
    // console.log(data);
    // console.log(fd);
    
      ReactDOM.render(
      <AgGridReact
        columnDefs={cols}
        rowData={data}
        defaultColDef={{
          resizable: true,
          sortable: true,
          filter: true,
          
      }}
        //onGridReady={this.onGridReady}
      >
      </AgGridReact>,
      document.getElementById(containerId),
    );
  
  }


  Ag_gridViz.displayName = 'Aggrid view';
  Ag_gridViz.propTypes = propTypes;
  export default Ag_gridViz;
  
  
  



