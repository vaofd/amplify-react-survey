import logo from './logo.svg';
import './App.css';

const iframe = '<iframe src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/589013784134/dashboards/01efec0f-a7e7-4357-b98b-c42986f3167e/sheets/01efec0f-a7e7-4357-b98b-c42986f3167e_63cfefee-7803-4d6d-9e56-cbcc01456335/visuals/01efec0f-a7e7-4357-b98b-c42986f3167e_f3b13e90-c1c2-455e-ba4c-07fd40639414?directory_alias=adpmndev" height="540" width="450" title="SurveyDashBoard"</iframe>';

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  this.props.iframe? this.props.iframe : ""}} />);
}

function App() {
  return (
    <div className="App">
      <h1>Survey App Dashboard</h1>
      <iframe src="https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/40eff87f-18af-47ab-aa37-94ec818a8d5a" height="1000" width="1000" title="SurveyDashBoard" />
    </div>
  );
}

export default App;
