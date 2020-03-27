import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
export function SimpleCard(props) {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          BMI:{props.BMI}
        </Typography>

        <Typography variant="body2" component="p">
          Weight:{props.weight} Height: {props.height}
          <br />
        </Typography>
      </CardContent>

    </Card>
  );

}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        height: "", weight: "", BMI: ""
      }
    }


  }
  handleOnchangeWeight = (e) => {
    this.setState({
      obj: { weight: e.target.value, height: this.state.obj.height, BMI: this.state.obj.BMI }
    })
  }
  handleOnchangeHeight = (e) => {
    this.setState({
      obj: {
        height: e.target.value, weight: this.state.obj.weight, BMI: this.state.obj.BMI
      }

    })
  }
  handleSubmit = () => {
    this.setState({
      obj: { BMI: Math.round((this.state.obj.weight) / ((this.state.obj.height) / 100)), weight: this.state.obj.weight, height: this.state.obj.height }

    })
    console.log(this.state.obj.height);
  }
  BMIListing = () => {
    const Arr = this.state.obj
    const SimpleCard=SimpleCard(Arr);
    return (<div className="col md-6 col-sm-12">{Arr.map((height, weight, BMI )=>

      <SimpleCard height={height} weight={weight} BMI={BMI} />

    )}

    </div>);
  }
  render() {
    return (
      <div className="App">
        <h1 className="d-flex align-items-center justify-content-center m-4 p-4"> BMI CALCULATOR</h1>
        <form className="d-flex align-items-center justify-content-center m-4">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <label>Enter Weight in kg</label> <br />
              <input name="weight" type="number" min="1" max="999" value={this.state.weight} onChange={this.handleOnchangeWeight} />
            </div>
            <div className="col-md-6 col-sm-12">
              <label>Enter Heigh in cm</label> <br />
              <input name="height" type="number" min="1" max="999" value={this.state.height} onChange={this.handleOnchangeHeight} />
            </div>

            <div className="col-md-6 col-sm-12 m-4 d-flex text-align-center">
              <button id="bmi-btn" className="calculate-btn" type="button" disabled="" onClick={this.handleSubmit}>Calculate BMI</button>
            </div>
          </div>
        </form>

        <div className="d-flex align-items-center justify-content-center m-4">
          <div className="data-container row">
            this is how it will go
              {this.BMIListing}
            

          </div>

        </div>



      </div >
    );
  }
}

