"use client"
import React from 'react'
import * as yup from 'yup';
import { useFormik } from "formik"
import { RegisterValidation } from '../validate/RegisterValidate';
import { useMutation } from '@tanstack/react-query';
import { postApi } from '@/http/api';
import { QueryKeys } from '@/constants/QueryKeys';
import { useRouter } from 'next/navigation';



const RegisterForm = ({ onRegisterSuccess }: { onRegisterSuccess: () => void }) => {
    const router = useRouter()

    const { mutate, isPending, isError, error } = useMutation({
        mutationKey: QueryKeys.register,
        mutationFn: async (data: any) => postApi('/auth/register', data),
    })

    const initalVAlue = {
        email: "",
        password: "",
        name: ""
    }
    const formik = useFormik({
        initialValues: initalVAlue,
        validationSchema: RegisterValidation,
        onSubmit: () => {
            mutate(formik.values, {
                onSuccess: (data) => {
                    console.log("Registration successful:", data);
                    formik.resetForm()
                    
                    onRegisterSuccess();

                }
            })
        }
    })

    return (
        <div className='flex items-center justify-center '>
            <div className="bg-white p-8 rounded-xl w-md">
                {isError ? <div className='bg-red-100 text-red-500 p-2 rounded-md mb-4'>
                    <p className='text-sm'>{error.message}</p>
                </div> : null
                }

                <form
                    onSubmit={(e: any) => {
                        e.preventDefault()
                        formik.handleSubmit()
                    }}
                    id="loginForm" className="space-y-6">
                    <div>
                        <input
                            name='name'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            type="text" id="name"
                            placeholder="User Name *"
                            className="mt-1 outline-none py-4 px-4 block w-full border border-[#eee] text-center focus:outline-none focus:ring-0" />
                        {
                            formik.touched && formik.errors.name ? <div>
                                <span className='text-red-400 text-sm'>
                                    {
                                        formik.errors.name
                                    }
                                </span>
                            </div>
                                : null
                        }
                    </div>
                    <div>
                        <input
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            type="email" id="email"
                            placeholder="Email *"
                            className="mt-1 outline-none py-4 px-4 block w-full border border-[#eee] text-center focus:outline-none focus:ring-0" />
                        {
                            formik.touched && formik.errors.email ? <div>
                                <span className='text-red-400 text-sm'>
                                    {
                                        formik.errors.email
                                    }
                                </span>
                            </div>
                                : null
                        }
                    </div>

                    <div>
                        <input
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            name='password'
                            type="password" id="password"
                            placeholder="Password *"
                            className="mt-1 block w-full outline-none py-4 px-4 border border-[#eee] text-center focus:outline-none focus:ring-0" />
                        {
                            formik.touched && formik.errors.password ? <div>
                                <span className='text-red-400 text-sm'>
                                    {formik.errors.password}
                                </span>
                            </div> : null
                        }

                    </div>

                    <div className="flex items-center justify-center mt-4">
                        <button type="submit"
                            className=" outline-none flex justify-center py-4 px-16 border border-transparent tracking-[0.15rem] text-[13px] font-medium text-white bg-black hover:bg-black focus:outline-none focus:ring-offset-2 focus:ring-0">
                            {
                                isPending ? "Loading..." : "REGISTER"
                            }
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default RegisterForm
