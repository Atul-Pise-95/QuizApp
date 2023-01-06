import { Button, Paper } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import "./Result.css";

const Result = ({ name, score }) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <CheckCircleOutlinedIcon
        style={{
          color: "green",
          width: "100px",
          height: "100px",
        }}
      />
      <p
        style={{
          color: "green",
          fontSize: "32px",
          lineHeight: 0,
          marginBottom: "30px",
        }}
      >
        <b>Result</b>
      </p>
      <Paper
        style={{
          padding: "30px",
          height: "300px",
          width: "500px",
        }}
      >
        <p style={{ fontSize: "24px" }}>You Need More Practice!</p>
        <br />
        <span style={{ color: "cyan", fontSize: "32px" }}>
          Your Score : {(100 / (10 / score)).toFixed(2)} %
        </span>
        <br />
        <br />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="title">
            Total Number of Questions :&nbsp;&nbsp;&nbsp;&nbsp; 10
          </span>
          <br />
          <span className="title">
            Number of Correct Answers :&nbsp;&nbsp;&nbsp;&nbsp; {score}
          </span>
          <br />

          <span className="title">
            Number of Wrong Answers :&nbsp;&nbsp;&nbsp;&nbsp; {10 - score}
          </span>
        </div>
      </Paper>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
