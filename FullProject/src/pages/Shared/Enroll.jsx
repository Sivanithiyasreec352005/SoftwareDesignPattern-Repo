import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function Enroll() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-lg text-gray-700 mb-8 text-center">
        We offer the best services to help you grow. Join us and start your journey towards success.
      </h1>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Course Overview</h3>
              <p className="text-muted-foreground">
                Our course offers a holistic approach to learning essential skills across various domains. Whether you're looking to improve your technical knowledge or enhance your soft skills, this course provides a broad spectrum of insights and practical experience.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What You'll Learn</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>- Understanding fundamental concepts and best practices in your field</li>
                <li>- Building and optimizing effective workflows and processes</li>
                <li>- Techniques for effective problem-solving and decision-making</li>
                <li>- Enhancing communication and collaboration skills</li>
                <li>- Strategies for personal and professional development</li>
                <li>- Applying theoretical knowledge to real-world scenarios and projects</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Course Duration</h3>
              <p className="text-muted-foreground">
                This course is designed to be completed in 8 weeks, with approximately 4 hours of study per week. It includes a mix of lectures, interactive exercises, and assignments to help you apply what you’ve learned in a practical setting.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <img
              src="https://ik.imagekit.io/sns3305/SDPPRO/BLOG_instructor-vs-professor@1X.jpg?updatedAt=1722194654679" // Replace with your actual image path
              width="800"
              height="600" // Adjust height for rectangular aspect ratio
              alt="Instructor"
              className="mx-auto aspect-[4/3] overflow-hidden object-cover object-center" // Aspect ratio of 4:3
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Meet Your Instructor</h2>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-muted-foreground">Senior Software Engineer, Industry Expert</p>
                <p className="text-muted-foreground">
                  With a wealth of experience across various industries, John is an expert in delivering practical and impactful learning experiences. His teaching approach focuses on bridging theoretical concepts with real-world applications, ensuring that you gain relevant and actionable skills.
                </p>
                <p className="text-muted-foreground">
                  John has a proven track record of helping individuals and teams achieve their goals through personalized coaching and hands-on learning. His dedication to student success is reflected in the numerous successful careers and projects he has guided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Card className="w-full max-w-lg mx-auto shadow-md">
            <CardHeader>
              <CardTitle>Enroll in the Course</CardTitle>
              <CardDescription>Fill out the form below to secure your spot and start learning today. Don’t miss this opportunity to advance your skills and career.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment">Payment Information</Label>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry</Label>
                      <div className="flex gap-2">
                        <select
                          id="expiry-month"
                          className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                        >
                          <option value="">MM</option>
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {String(i + 1).padStart(2, "0")}
                            </option>
                          ))}
                        </select>
                        <select
                          id="expiry-year"
                          className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                        >
                          <option value="">YY</option>
                          {Array.from({ length: 10 }, (_, i) => (
                            <option key={i + 2023} value={i + 2023}>
                              {i + 2023}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" type="text" placeholder="XXX" className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Enroll Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Enroll;
