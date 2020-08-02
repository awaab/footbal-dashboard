import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { connect } from "react-redux";
import { editOptionOne, editOptionTwo } from "../redux/actions";

const options_one = [
    {"value": 1, "label": "one"},
    {"value": 2, "label": "two"},
    {"value": 3, "label": "three"},
];
const options_two = [
    {"value": 1, "label": "ABC"},
    {"value": 2, "label": "DEF"},
    {"value": 3, "label": "HIJ"},
];
class Sidebarmenu extends React.Component {
    onSelectOne = (selction) => {
        console.log("One selected: ", selction.value);
        this.props.editOptionOne(selction.value);
    }
    onSelectTwo = (selction) => {
        console.log("Two selected: ", selction.value);
        this.props.editOptionTwo(selction.value);
    }
    render() {
      return (
      <div>
        <Dropdown options={options_one} onChange={this.onSelectOne} value={options_one[0]} placeholder="Select an option" />
        <Dropdown options={options_two} onChange={this.onSelectTwo} value={options_two[1]} placeholder="Select an option" />
      </div>
      )
    }
}


export default connect(
    null,
    { editOptionOne, editOptionTwo }
)(Sidebarmenu)
