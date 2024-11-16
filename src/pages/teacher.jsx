import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Teacher Dashboard</h2>
      <Tabs defaultValue="project-management">
        <TabsList>
          <TabsTrigger value="project-management">Project Management</TabsTrigger>
          <TabsTrigger value="supervision">Supervision</TabsTrigger>
          <TabsTrigger value="jury-assignments">Jury Assignments</TabsTrigger>
        </TabsList>
        <TabsContent value="project-management">
          <Card>
            <CardHeader>
              <CardTitle>Project Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button>Propose New Project</Button>
              <Button>View My Projects</Button>
              <Button>Edit Existing Projects</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="supervision">
          <Card>
            <CardHeader>
              <CardTitle>Supervision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button>Select Projects to Supervise</Button>
              <Button>View Supervised Projects</Button>
              <Button>Submit Progress Reports</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="jury-assignments">
          <Card>
            <CardHeader>
              <CardTitle>Jury Assignments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button>View Jury Assignments</Button>
              <Button>Submit Availability</Button>
              <Button>Access Evaluation Forms</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}