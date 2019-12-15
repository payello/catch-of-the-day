import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };
  myInput = React.createRef();

  goToStore = event => {
    // 1 stop form from submitting
    event.preventDefault();
    // 2. get text from that input.
    const storeName = this.myInput.current.value;
    // 3. change the page to /store/whatever
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit store -></button>
      </form>
    );
  }
}

export default StorePicker;
