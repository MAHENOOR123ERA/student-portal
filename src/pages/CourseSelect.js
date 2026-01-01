import { Container, Card, Button } from "react-bootstrap";
import { auth, db } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function CourseSelect() {
  const navigate = useNavigate();
  const courses = ["Web Development", "AI", "Data Science"];

  const selectCourse = async (course) => {
    const ref = doc(db, "students", auth.currentUser.uid);
    await updateDoc(ref, {
      courses: arrayUnion(course)
    });
    navigate("/card");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Select Course</h2>
      {courses.map(course => (
        <Card key={course} className="mb-3">
          <Card.Body className="d-flex justify-content-between">
            <span>{course}</span>
            <Button onClick={() => selectCourse(course)}>Register</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
