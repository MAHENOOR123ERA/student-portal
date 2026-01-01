import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../firebase"; // Correct


console.log(auth, db);


 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/courses");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "24rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Student Login</Card.Title>
          <Form>
            <Form.Control className="mb-3" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <Form.Control className="mb-3" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <Button className="w-100" onClick={login}>Login</Button>
          </Form>
          <div className="text-center mt-3">
            New student? <Link to="/">Signup</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;