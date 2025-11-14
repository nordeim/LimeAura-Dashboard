'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarGroup } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tag } from "@/components/ui/tag"
import { CircularProgress } from "@/components/ui/progress"
import { NotificationItem } from "@/components/composed/notification-item"
import { IntegrationRow } from "@/components/composed/integration-row"
import { ProfileSummary } from "@/components/composed/profile-summary"
import { Github, Slack, Video } from "lucide-react"

export default function DashboardExample() {
  return (
    <div className="min-h-screen bg-bg-main p-page">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xxl">
          
          {/* Profile Card */}
          <ProfileSummary
            avatar={{
              src: "/avatar-1.jpg",
              fallback: "JD"
            }}
            name="John Doe"
            role="Senior Product Designer"
            skills={["UI Design", "Prototyping", "Research"]}
          />
          
          {/* Milestone Card */}
          <Card>
            <CardHeader>
              <CardTitle>Amber website redesign</CardTitle>
              <Button variant="ghost" size="sm">
                View details
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-bold text-text-primary mb-xs">
                    Due date
                  </p>
                  <p className="text-body text-text-secondary mb-md">
                    Dec 20, 2024
                  </p>
                  <p className="text-body-bold text-text-primary mb-sm">
                    Assignees
                  </p>
                  <AvatarGroup>
                    <Avatar size="sm" fallback="A" />
                    <Avatar size="sm" fallback="B" />
                    <Avatar size="sm" fallback="C" />
                  </AvatarGroup>
                </div>
                <CircularProgress value={65} />
              </div>
            </CardContent>
          </Card>
          
          {/* Notifications Card */}
          <Card>
            <CardHeader>
              <CardTitle>
                Notifications
                <Badge variant="numeric" className="ml-sm">3</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-0">
              <NotificationItem
                avatar={{ fallback: "AB" }}
                title="Anna Baker"
                description="Commented on wireframe.fig"
                timestamp="2h ago"
              />
              <NotificationItem
                avatar={{ fallback: "JS" }}
                title="John Smith"
                description="Wants to join your team"
                timestamp="3h ago"
                actions={[
                  { label: "Accept", variant: "success", onClick: () => {} },
                  { label: "Deny", variant: "secondary", onClick: () => {} }
                ]}
              />
            </CardContent>
          </Card>
          
          {/* Integrations Card */}
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-0">
              <IntegrationRow
                icon={<Slack className="h-5 w-5" />}
                name="Slack"
                description="Send notifications to channel"
                enabled={true}
              />
              <IntegrationRow
                icon={<Video className="h-5 w-5" />}
                name="Google Meet"
                description="Schedule video calls"
                enabled={false}
              />
              <IntegrationRow
                icon={<Github className="h-5 w-5" />}
                name="Github"
                description="Track pull requests"
                enabled={true}
              />
            </CardContent>
          </Card>
          
        </div>
      </div>
    </div>
  )
}
