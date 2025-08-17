"use client"

import { addAppointment } from "@/http/api"
import { sourceMapsEnabled } from "process"


export interface IForm {
  name: string
  email: string
  phone: string
  date: string
  status: 'Pending' | 'Approved' | 'Denied'
}

const AppointmentTemplate = () => {
  let loading = false;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get('name') as string
    const email = data.get('mail') as string
    const phone = data.get('phone') as string
    const date = data.get('date') as string

    const formDataObj: IForm = {
      name,
      email,
      phone,
      date,
      status: 'Pending'
    }
    console.log(formDataObj)
    try {
      loading = true
      addAppointment('/', formDataObj)

      alert('You registered successfully');
    } catch (error) {
      console.log(error)
    } finally {
      loading = false;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter your Name" />
        </div>
        <div>
          <label htmlFor="mail">Mail</label>
          <input type="email" name="mail" placeholder="Enter your Email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" placeholder="Enter your Phone" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" placeholder="Enter your Date" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AppointmentTemplate
