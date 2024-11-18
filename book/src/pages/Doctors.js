import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  // Apply filter based on selected speciality
  useEffect(() => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors) // Show all doctors if no speciality is selected
    }
  }, [doctors, speciality])

  return (
    <div>
      <p>Browse through the doctors' specialists</p>
      <div>
        <div>
          <p onClick={() => navigate(`/doctors/General Physician`)}>General Physician</p>
          <p onClick={() => navigate(`/doctors/Gynecologist`)}>Gynecologist</p>
          <p onClick={() => navigate(`/doctors/Dermatologist`)}>Dermatologist</p>
          <p onClick={() => navigate(`/doctors/Pediatrician`)}>Pediatrician</p>
          <p onClick={() => navigate(`/doctors/Neurologist`)}>Neurologist</p>
          <p onClick={() => navigate(`/doctors/Gastroenterologist`)}>Gastroenterologist</p>
        </div>
        <div>
          {filterDoc.map((item) => (
            <div 
              key={item._id} 
              onClick={() => navigate(`/appointment/${item._id}`)} 
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50 w-40" src={item.image} alt={`${item.name}`} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors
