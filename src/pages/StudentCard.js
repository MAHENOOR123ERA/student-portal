import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function StudentCard() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const ref = doc(db, "students", auth.currentUser.uid);
      const snap = await getDoc(ref);
      setStudent(snap.data());
    };
    fetchStudent();
  }, []);

  return (
    <Container className="d-flex justify-content-center mt-5">
      {student && (
        <Card style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title className="text-center">Student Card</Card.Title>
            <p><b>Name:</b> {student.name}</p>
            <p><b>Email:</b> {student.email}</p>
            <p><b>Courses:</b> {student.courses.join(", ")}</p>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
