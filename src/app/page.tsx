import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      title: "IAM Security Implementation",
      description: "Built IAM security solution with CloudFormation, Terraform, and AWS CDK. Established RBAC for 4 teams with MFA enforcement.",
      link: "https://github.com/elnala24/aws-iam-security-project",
    },
    {
      title: "Infrastructure Migration to CDK",
      description: "Migrated AWS infrastructure to CDK with TypeScript. Designed multi-tier VPC with EC2 and Multi-AZ RDS.",
      link: "https://github.com/elnala24/project2-techhealth-cdk",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <Avatar className="w-32 h-32 mb-6 ring-2 ring-border">
            <AvatarImage
              src="/headshot.png"
              alt="Alan Le"
              className="object-cover"
            />
            <AvatarFallback className="text-2xl bg-muted text-muted-foreground">
              AL
            </AvatarFallback>
          </Avatar>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">Alan Le</h1>
          <p className="text-lg text-muted-foreground mb-4">AWS Cloud Engineer</p>

          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/elnala24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://linkedin.com/in/alantommyle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:elnala24@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            AWS Certified Cloud Practitioner with hands-on experience building
            and automating AWS environments using CloudFormation, Terraform,
            and AWS CDK (Python / TypeScript).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-amber-50/50 border-amber-100"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    View Project
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with Next.js and deployed on AWS Amplify
          </p>
        </div>
      </div>
    </div>
  )
}
