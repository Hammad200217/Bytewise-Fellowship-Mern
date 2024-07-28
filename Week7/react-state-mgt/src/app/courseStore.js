import create from 'zustand'
import { devtools, persist} from 'zustand/middleware'

const courseStore = (set) =>({
    coures: [],
    addCoures: (course)=> {
        set((state)=> ({
            courses: [course, ...state.coures],
        }))
    },
    removeCourse: (courseId) => {
        set((state) =>({
            courses: state.courses.filter((c) => c.id !== courseid)
        }))
    },
    toggleCourseStatus: (courseId) => {
        set((state) =>({
            courses: state.courses.map((course) => course.id === completed ? {
              ...course, completed: !course.completed  
            } : course)
        }))
    }
})

const userCourseStore = create()

export default userCourseStore;