import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import NumberButton from "./components/NumberButton/NumberButton";

function App() {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            <NumberButton number="1" onclick={() => {}} nameClass="key" />
            <NumberButton number="2" onclick={() => {}} nameClass="key" />
            <NumberButton number="3" onclick={() => {}} nameClass="key" />
            <NumberButton number="4" onclick={() => {}} nameClass="key" />
            <NumberButton number="5" onclick={() => {}} nameClass="key" />
            <NumberButton number="6" onclick={() => {}} nameClass="key" />
            <NumberButton number="7" onclick={() => {}} nameClass="key" />
            <NumberButton number="8" onclick={() => {}} nameClass="key" />
            <NumberButton number="9" onclick={() => {}} nameClass="key" />
            <NumberButton number="0" onclick={() => {}} nameClass="key" />
            <NumberButton
              number="delete"
              action={() => {}}
              nameClass="key big"
            />
          </ol>
        </div>
        <div className="actions">
          <Display className="number" number="1working19"></Display>
          <Button className="number" />
        </div>
      </main>
    </div>
  );
}

export default App;
