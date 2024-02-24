import Message from "./Message";
import TextBox from "./components/TextBox";
import ListGroup from "./components/ListGroup";
import InputListExample from "./components/InputList";
import CaregiverScheduleInput from "./components/CaregiverScheduleInput";
import DictionaryExample from "./components/CaregiverScheduleInput";
import TimeInputExample from "./components/CaregiverScheduleInput";

function App() {
  return (
    <div>
      <h1>React Text Box</h1>
      <TextBox></TextBox>
      <ListGroup></ListGroup>
      <InputListExample></InputListExample>
      <TimeInputExample></TimeInputExample>
    </div>
  );
}

export default App;
