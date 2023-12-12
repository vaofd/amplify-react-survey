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
      <iframe src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/589013784134/dashboards/506ba3e4-c5f3-41e8-9603-dea646d19582/sheets/506ba3e4-c5f3-41e8-9603-dea646d19582_63cfefee-7803-4d6d-9e56-cbcc01456335/visuals/506ba3e4-c5f3-41e8-9603-dea646d19582_68b50ecb-b62f-4648-a338-c72e56214327?directory_alias=adpmndev" height="540" width="750" title="SurveyDashBoard" />
    </div>
  );
}

export default App;
