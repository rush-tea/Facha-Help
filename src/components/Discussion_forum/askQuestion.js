import Axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import QuestionModel from "./questionModel";

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");

  const quesFun = (e) => {
    setQuestion(e.target.value);
  };

  const nameFun = (e) => {
    setName(e.target.value);
  };

  const submitFun = (e) => {
    e.preventDefault();
    Axios({
      method: "post",
      url: "/questions",
      data: {
        q_body: question,
        writer_name: name,
      },
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    console.log(question, name);
  };

  return (
    <Form onSubmit={submitFun}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter question you wanna ask.."
          onChange={quesFun}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter your first name.."
          onChange={nameFun}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Ask
      </Button>
    </Form>
  );
};

export default AskQuestion;