const PickLanguage = (props: { setLanguage: (arg0: string) => void }) => (
  <div>
    <h1>Welcome To Unlimited Wordle!</h1>
    <p>Please select your language:</p>
    <div>
      <button onClick={() => props.setLanguage("en")}>العربية</button>
      <button onClick={() => props.setLanguage("ar")}>English</button>
      <button onClick={() => props.setLanguage("fr")}>Français</button>
    </div>
  </div>
);

export default PickLanguage;
