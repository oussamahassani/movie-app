import React from "react";




function Star ({ onClickStar, Checked })  {
    return (
      <div
        className={"fa fa-star the-star " + (Checked ? "checked" : "")}
        onClick={onClickStar}
      />
    );
  };





class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.starsNumber = 5;
    this.state = {
      indexChecked: this.props.indexChecked
    };
  }

  render() {
    let array = [];
    for (let i = 1; i <= this.starsNumber; i++) {
      array.push(
        <Star
          Checked={i < this.props.indexChecked + 1}
          onClickStar={() => this.props.onClickFn({ i })}
          onChange = {() => this.props.onchange()}
        />
      );
    }
    return (
      <div className="rating">
        {array}
      </div >
    );
  }
}

export default Rating;
