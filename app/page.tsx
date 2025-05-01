import { StudentGrid } from "@/components/student-grid"
import { students } from "@/data/students"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">Student Directory</h1>
          <p className="text-lg text-gray-600">Browse through our talented students</p>
        </header>
        <StudentGrid students={students} />
      </div>
    </main>
  )
}
