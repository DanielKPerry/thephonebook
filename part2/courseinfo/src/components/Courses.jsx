import Course from "./Course";

const Courses = ({ courses }) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      <div>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </>
  );
};

export default Courses;
