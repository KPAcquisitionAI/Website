import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperiencePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/55 via-background to-background/80 -z-10" />
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl transition-transform duration-500 ease-out transform hover:scale-105">Work Experience</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My professional journey and contributions
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle>Full Stack Developer @ Swift Transportation</CardTitle>
                <CardDescription>Dallas, TX, USA</CardDescription>
              </div>
              <div className="text-sm text-muted-foreground">Oct 2025 - Present</div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Architected the GMAdjustment module for the Pricing API using C# and Elasticsearch, enabling efficient management 
                and real-time indexing of complex logistics lane configuration records.
              </li>
              <li>
                Developed responsive interfaces in Vue.js integrated with .NET Core services, streamlining the data synchronization
                pipeline between front-end pricing tools and back-end data stores.
              </li>
              <li>
                Optimized API endpoints for the Global View platform, improving the accuracy of logistics data retrieval and reducing
                latency for high-volume pricing requests.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle>Founding Software Engineer @ Acquisition AI</CardTitle>
                <CardDescription>Dallas, TX, USA</CardDescription>
              </div>
              <div className="text-sm text-muted-foreground">July 2025 - Sep 2025</div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Led full-stack development of a real-time AI phone agent platform, designing scalable APIs and implementing security
                protocols, boosting system reliability by 58%.
              </li>
              <li>
                Developed backend services with Node.js, Express, and Supabase, using Docker, Kubernetes, and CI/CD pipelines to
                cut deployment time by 63% and double request handling capacity.
              </li>
              <li>
                Integrated AI/NLP features including Bland AI and custom LLMs, improving response accuracy by 47% through testing,
                benchmarking, and code optimization.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle>Software Engineer @ LogixHealth</CardTitle>
                <CardDescription>Bedford, MA, USA</CardDescription>
              </div>
              <div className="text-sm text-muted-foreground">Sep 2023 - Feb 2025</div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Led the migration of 20+ tables and 30+ stored procedures to a new MySQL database for the MobilePay application, enhancing query performance by 68%. Updated microservices connection strings and ensured seamless API
                functionality post-deployment.
              </li>
              <li>
                Engineered and integrated RESTful APIs using Swagger, leveraging C# and .NET to ensure secure, scalable communication between microservices, enhancing request handling efficiency by 57%.
              </li>
              <li>
                Implemented Patient email notifications using Orchestrated RabbitMQ and Azure Key Vault integration for secure,
                asynchronous microservice communication, reducing message latency by 60ms and enhancing application responsiveness.
              </li>
              <li>
                 Implemented voucher card functionality in the DoctorPayment application using Angular, TypeScript, and HTML.
                 Developed Angular components to efficiently fetch and display patient balances, optimizing UI performance and reducing
                 page refresh time by 44%.
              </li>
              <li>
                 Optimized CI/CD pipelines by refining YAML configurations, integrating Docker for containerized deployments, and
                 automating DACPAC database deployments, reducing manual effort by 66.67% and cutting deployment time from 30
                 minutes to 10 minutes.

              </li>
              <li>
                Streamlined project management by handling high-priority PBIs in Azure DevOps and designing use case diagrams
                in Azure Wiki with Mermaid to enhance team collaboration and project clarity.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle>Software Engineer @ Code Trade PVT LTD.</CardTitle>
                <CardDescription>Gujarat, India</CardDescription>
              </div>
              <div className="text-sm text-muted-foreground">Nov 2019 - Mar 2021</div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Integrated Angular Front-end, C# and ASP.NET Core backend, and SQL Server database management,
                contributing to the successful launch of 5+ features within sprint cycles and ensuring end-to-end
                functionality across the stack.
              </li>
              <li>
                Applied Java for testing the Web application with Shift-Right techniques, ensuring 90% code coverage and
                enhancing the reliability and performance of data parsing components.
              </li>
              <li>
                Architected RESTful APIs using Spring, enabling efficient system communication and ensuring high
                flexibility in endpoints and payloads for better cross-platform integration.
              </li>
              <li>
                Published optimized SQL queries and customized schema designs in SQL Server, driving performance
                improvements and streamlining database management processes across the application lifecycle.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

