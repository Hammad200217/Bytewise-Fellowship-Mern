import React from 'react'
import userCourseStore from '../app/courseStore'



export default function CourseForm() {

const Courselist = () =>{
    const {courses, removeCourse,toggleCourseStatus} = userCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus

        })
    )


}
  return (
    <>
        <ul>
            {
                courses.map((courses, i)=>{
                    return(
                        <React.Fragment key={i}>
                            <li>
                             className={'course-item'}
                             style ={(
                                backgoundColor: course.completed ? "#00ff0044" : "White"
                             )}
                            </li>
                        </React.Fragment>
                    )
                })
            }
        </ul>
    </>
  )
}
