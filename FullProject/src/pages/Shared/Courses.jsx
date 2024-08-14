
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

 function Courses() {
  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      description: "Learn the fundamentals of web development, including HTML, CSS, and JavaScript.",
      syllabus: [
        "HTML and semantic markup",
        "CSS and responsive design",
        "JavaScript and DOM manipulation",
        
      ],
      schedule: {
        days: ["Monday", "Wednesday"],
        time: "6:00 PM - 8:00 PM",
      },
      prerequisites: ["None"],
      category: "Web Development",
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      description:
        "Dive into the world of data structures and algorithms, essential for problem-solving and efficient programming.",
      syllabus: [
        "Arrays and linked lists",
        "Stacks, queues, and trees",
        "Sorting and searching algorithms"
       
      ],
      schedule: {
        days: ["Tuesday", "Thursday"],
        time: "7:00 PM - 9:00 PM",
      },
      prerequisites: ["Proficiency in a programming language"],
      category: "Computer Science",
    },
    {
      id: 3,
      title: "Introduction to Machine Learning",
      description: "Explore the fundamentals of machine learning and its applications in various domains.",
      syllabus: [
        "Supervised and unsupervised learning",
        "Linear regression and logistic regression",
        "Model evaluation and selection",
      ],
      schedule: {
        days: ["Monday", "Wednesday"],
        time: "6:30 PM - 8:30 PM",
      },
      prerequisites: ["Linear Algebra"],
      category: "Data Science",
    },
    {
      id: 4,
      title: "Introduction to Mobile App Development",
      description: "Learn how to build mobile applications for iOS and Android platforms.",
      syllabus: [
        "Mobile app development frameworks",
        "User interface design for mobile",
        "Publishing and distributing mobile apps",
      ],
      schedule: {
        days: ["Tuesday", "Thursday"],
        time: "7:30 PM - 9:30 PM",
      },
      prerequisites: ["Proficiency in a programming language"],
      category: "Mobile Development",
    },
  ]
  return (
    <section className=" py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Course Catalog</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover a wide range of courses across various disciplines to enhance your knowledge and skills.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 py-12 lg:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">Syllabus</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {course.syllabus.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Schedule</h3>
                    <p className="text-muted-foreground">
                      {course.schedule.days.join(", ")} | {course.schedule.time}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Prerequisites</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {course.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="bg-muted px-4 py-2 rounded-b-lg">
                  <span className="text-muted-foreground">Category: {course.category}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Courses