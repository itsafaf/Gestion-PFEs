import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Admin Dashboard</h2>
      <Tabs defaultValue="user-management">
        <TabsList>
          <TabsTrigger value="user-management">User Management</TabsTrigger>
          <TabsTrigger value="email-config">Email Configuration</TabsTrigger>
          <TabsTrigger value="project-validation">Project Validation</TabsTrigger>
        </TabsList>
        <TabsContent value="user-management">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button>Import Users</Button>
              <Button>Manage Users</Button>
              <Button>Export User Data</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="email-config">
          <Card>
            <CardHeader>
              <CardTitle>Email Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button>Set Email Schedule</Button>
              <Button>Configure Deadlines</Button>
              <Button>View Email Logs</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="project-validation">
          <Card>
            <CardHeader>
              <CardTitle>Project Validation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button>Review Pending Projects</Button>
              <Button>Approve/Reject Projects</Button>
              <Button>Generate Project Reports</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}