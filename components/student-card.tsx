"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { format } from "date-fns"
import type { Student } from "@/data/students"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap, User } from "lucide-react"

interface StudentCardProps {
  student: Student
}

export function StudentCard({ student, index }: StudentCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div
          className={`relative h-48 w-full bg-gradient-to-r ${
            student.gender === "male" ? "from-blue-400 to-indigo-500" : "from-pink-400 to-purple-500"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
              <Image src={student.avatar || "/placeholder.svg"} alt={student.name} fill className="object-cover" />
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <h2 className="mb-1 text-center text-xl font-bold">{student.name}</h2>

          <div className="mb-4 flex justify-center">
            <Badge variant={student.gender === "male" ? "default" : "secondary"}>
              {student.gender === "male" ? "Male" : "Female"}
            </Badge>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <GraduationCap className="h-4 w-4" />
              <span>Class: {student.class}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="h-4 w-4" />
              <span>DOB: {format(new Date(student.dob), "MMMM d, yyyy")}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <User className="h-4 w-4" />
              <span>ID: {index}</span>
            </div>
          </div>

          {isHovered && (
            <motion.div
              className="mt-4 text-center text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              Click to view full profile
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
