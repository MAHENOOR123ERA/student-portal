import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "students", user.user.uid), {
      name,
      email,
      courses: []
    });
    navigate("/courses");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "24rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Student Signup</Card.Title>
          <Form>
            <Form.Control className="mb-3" placeholder="Name" onChange={e => setName(e.target.value)} />
            <Form.Control className="mb-3" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <Form.Control className="mb-3" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <Button className="w-100" onClick={signup}>Signup</Button>
          </Form>
          <div className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
