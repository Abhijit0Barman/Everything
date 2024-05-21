import "./App.css";
import { RHFYouTubeForm } from "./components/RHFYouTubeForm";
import { YupYouTubeForm } from "./components/YupYouTubeForm";
import { ZodYouTubeForm } from "./components/ZodYouTubeForm";
import { LoginForm } from "./components/MuiLoginForm";

function App() {
  return (
    <div>
      <RHFYouTubeForm />
      {/* 
      <br />
      <hr />
      <YupYouTubeForm />
      <br />
      <hr />
      <ZodYouTubeForm />
      <br />
      <hr />
      <LoginForm /> 
      */}
    </div>
  );
}

export default App;
