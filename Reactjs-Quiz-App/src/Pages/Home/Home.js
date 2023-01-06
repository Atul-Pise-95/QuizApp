import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Home.css";

const Home = ({ setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = () => {
    setError(false);
    fetchQuestions(category, difficulty);
    history.push("/quiz");
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 32, marginLeft: "100px" }}>
          <b>Quiz App</b>
        </span>
        <div className="settings__select">
          <TextField
            isRequired="true"
            style={{ marginBottom: 25, width: "300px" }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
            style={{
              background: "green",
              borderRadius: "22px",
              width: "300px",
            }}
            // disabled={name === "" ? true : false}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
