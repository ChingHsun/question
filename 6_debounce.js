/** Please write the sample code to debounce handleOnChange **/
var SearchBox = React.createClass({
  debounceTimeout: null,
  render: function () {
    return <input type="search" name="p" onChange={this.handleOnChange} />;
  },
  handleOnChange: function (event) {
    if (this.debounceTimeout !== null) clearTimeout(this.debounceTimeout);

    this.debounceTimeout = setTimeout(() => {
      // Make ajax call
    }, 500);
  },
});
