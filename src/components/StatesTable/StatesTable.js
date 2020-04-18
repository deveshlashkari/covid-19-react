import React, { Component } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { fetchStateData } from "../../api";

class StatesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modal: false,
    };
  }

  async componentDidMount() {
    const fetchedStateData = await fetchStateData();
    if (fetchedStateData.length !== 0) {
      this.setState({ data: fetchedStateData });
    }
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  options = {
    sortIndicator: true,
    clearSearch: true,
    alwaysShowAllBtns: false,
    withFirstAndLast: false,
    paginationSize: 4,
    hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    showTotal: true,
    sizePerPageList: 50,
  };

  columns = [
    {
      dataField: "stateName",
      text: "Name of the State",
      sort: true,
      headerStyle: () => {
        return {
          width: "50%",
          textAlign: "left",
          fontWeight: "600",
          fontSize: "13px",
          color: "#595d6e",
          verticalAlign: "middle",
        };
      },
      style: {
        textAlign: "left",
        fontWeight: "300",
        fontSize: "13px",
        color: "#595d6e",
        verticalAlign: "middle",
      },
    },
    {
      dataField: "lastUpdate",
      text: "Last updated on",
      sort: true,
      headerStyle: () => {
        return {
          width: "50%",
          textAlign: "left",
          fontWeight: "600",
          fontSize: "13px",
          color: "#595d6e",
          verticalAlign: "middle",
        };
      },
      style: {
        textAlign: "left",
        fontWeight: "300",
        fontSize: "13px",
        color: "#595d6e",
        verticalAlign: "middle",
      },
      formatter: (cell, row) => {
        let dateArray = cell.split(" ");

        return dateArray[0];
      },
    },
    {
      dataField: "confirmedCases",
      text: "Confirmed",
      sort: true,
      headerStyle: () => {
        return {
          width: "50%",
          textAlign: "left",
          fontWeight: "600",
          fontSize: "13px",
          color: "#595d6e",
          verticalAlign: "middle",
        };
      },
      style: {
        textAlign: "left",
        fontWeight: "300",
        fontSize: "13px",
        color: "#595d6e",
        verticalAlign: "middle",
      },
    },
    {
      dataField: "activeCases",
      text: "Active",
      sort: true,
      headerStyle: () => {
        return {
          width: "50%",
          textAlign: "left",
          fontWeight: "600",
          fontSize: "13px",
          color: "#595d6e",
          verticalAlign: "middle",
        };
      },
      style: {
        textAlign: "left",
        fontWeight: "300",
        fontSize: "13px",
        color: "#595d6e",
        verticalAlign: "middle",
      },
    },
    {
      dataField: "recoveredCases",
      text: "Recovered",
      sort: true,
      headerStyle: () => {
        return {
          width: "50%",
          textAlign: "left",
          fontWeight: "600",
          fontSize: "13px",
          color: "#595d6e",
          verticalAlign: "middle",
        };
      },
      style: {
        textAlign: "left",
        fontWeight: "300",
        fontSize: "13px",
        color: "#595d6e",
        verticalAlign: "middle",
      },
    },
    {
      dataField: "deaths",
      text: "Deaths",
      sort: true,
      headerStyle: () => {
        return {
          width: "50%",
          textAlign: "left",
          fontWeight: "600",
          fontSize: "13px",
          color: "#595d6e",
          verticalAlign: "middle",
        };
      },
      style: {
        textAlign: "left",
        fontWeight: "300",
        fontSize: "13px",
        color: "#595d6e",
        verticalAlign: "middle",
      },
    },
  ];

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>
          State wise Data
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
          <ModalHeader
            toggle={this.toggle}
          >{`State wise data for ${this.props.countryName}`}</ModalHeader>
          <ModalBody>
            <BootstrapTable
              keyField="id"
              data={this.state.data}
              columns={this.columns}
              responsive
              bordered={false}
              noDataIndication={
                this.state.data.length === 0 ? "NO DATA FOUND" : ""
              }
              //expandRow={this.expandRow}
              hover
              condensed
              // pagination={paginationFactory(this.options)}
            ></BootstrapTable>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default StatesTable;
