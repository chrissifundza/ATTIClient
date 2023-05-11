import React from "react";
import { collection, getDocs, doc, deleteDoc,query, getDoc, orderBy  } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase/config";


export const ContextData =createContext();

export const ContextDataProvider =({children})=>{
const [Categories, setCategories] = useState([])
const [CatIDs, setCatIDs] = useState([])
const [AllCourses, setAllCourses] = useState([])
let newArray =[]
useEffect(() => {
  getAllCategories()
  getAllCourses()
}, [])

const getAllCategories =async ()=>{
  console.log("running")

  const q = collection(db, 'ATTI-Course-Categories')
  const snapshot = await getDocs(q,orderBy("Date", "asc"))
  const data = snapshot.docs.map((doc)=>({
      ...doc.data(),id:doc.id
  }))

  setCategories(data)

}
const getAllCourses=async()=>{
  const courseQ = collection(db, `ATTI-Courses`)
  const courseDetails = await getDocs(courseQ)
  const courseInfo = courseDetails.docs.map((doc)=>({
      ...doc.data(), id:doc.id, 
  }))

 setAllCourses(courseInfo);

 
}
      const eachCourseDetail =async (courseID)=>{
       
            const courseQ = doc(db, `ATTI-Courses/${courseID}/details/${courseID}`)
            const courseDetails = await getDoc(courseQ)
            const courseInfo = courseDetails.data()
           
             
          return courseInfo
      }

      const eachCourseOverview =async (courseID)=>{
       
        const courseQ = doc(db, `ATTI-Courses/${courseID}/overview/${courseID}`)
        const courseDetails = await getDoc(courseQ)
        const courseInfo = courseDetails.data()
       
         
      return courseInfo
  }

  const eachCourseUnits =async (courseID)=>{
       
    const courseQ = doc(db, `ATTI-Courses/${courseID}/units/${courseID}`)
    const courseDetails = await getDoc(courseQ)
    const courseInfo = courseDetails.data()
   
     
  return courseInfo
}

const eachCourseInstructor =async (courseID)=>{
       
    const courseQ = doc(db, `ATTI-Courses/${courseID}/Factual/${courseID}`)
    const courseDetails = await getDoc(courseQ)
    const courseInfo = courseDetails.data()
   
     
  return courseInfo
}
    return(
        <ContextData.Provider value={{Categories,AllCourses,getAllCategories,eachCourseDetail,eachCourseOverview,eachCourseUnits,eachCourseInstructor}}>{children}</ContextData.Provider>
    )
}