"use client"

import { useState } from "react"
import type { Student } from "@/data/students"
import { StudentCard } from "@/components/student-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface StudentGridProps {
  students: Student[]
}

export function StudentGrid({ students }: StudentGridProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="relative mx-auto max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search students..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredStudents.map((student, index) => (
          <StudentCard key={index} student={student} index={index} />
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="mt-8 text-center text-gray-500">No students found matching your search.</div>
      )}
    </div>
  )
}
