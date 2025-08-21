"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { QueryKeys } from '@/constants/QueryKeys'
import { BasicTable } from '@/features/common/BasicTable'
import { CommonDialog } from '@/features/common/Dialog'
import { deleteApi, getAPi, postApi } from '@/http/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import * as yup from "yup"

const PersonSpecialtiesList = () => {
    const [openAddSizeDialog, setOpenAddSizeDialog] = useState<boolean>(false)

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: QueryKeys.persons.specialties,
        queryFn: async () => {
            return getAPi("/persons/specialties")
        }
    })

    const { mutate, isPending, isError: createIsErr, error: createErr } = useMutation({
        mutationKey: QueryKeys.persons.createSpecialty,
        mutationFn: async (data: any) => postApi("/persons/create/specialty", data),
        onSuccess: () => {
            formik.resetForm()
            refetch()
            setOpenAddSizeDialog(false)
        },
        onError: () => {
            console.log(createErr)
        }
    })
    const {
        mutate: deletePersonSpecialty,
        isPending: deletePending,
    } = useMutation({

        mutationFn: async (id: string) => await deleteApi(`/persons/specialties/${id}`),
        onSuccess: () => {
            refetch();
        },
    });


    const colums = [
        "id",
        "name",
        "actions"
    ]

    const rows = data && data?.data?.map((item: any) => {
        return (
            {
                id: item?._id,
                name: item?.name,
                actions: (
                    <div className='flex items-center gap-1.5'>
                        <Button
                            className="bg-red-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-red-600 hover:text-white duration-300"
                            variant="outline"
                            onClick={() => {
                                if (confirm("Are you sure you want to delete this product?")) {
                                    deletePersonSpecialty(item?._id);
                                }
                            }}
                        >
                            <Trash2 />
                        </Button>
                    </div>
                )
            }
        )
    })
    const formik = useFormik({
        initialValues: {
            name: ""
        },
        validationSchema: yup.object({
            name: yup.string().required('Specialty is required'),
        }),
        onSubmit: async (values) => {
            mutate({
                name: values?.name ?? ""
            })
        }
    })

    return (
        <div>
            <div className='flex items-center my-5 justify-between'>
                <h1 className='text-3xl font-bold text-gray-800'>
                    Person Specialties Lists
                </h1>
                <Button
                    onClick={() => {
                        setOpenAddSizeDialog(true)
                    }}
                    className='bg-green-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-green-600 hover:text-white duration-300'
                >
                    Add Specialty
                </Button>

            </div>
            <BasicTable cols={colums} rows={rows} isLoading={isLoading} />
            {
                openAddSizeDialog && <CommonDialog open={openAddSizeDialog} onClose={() => {
                    setOpenAddSizeDialog(false)
                }}
                    title='Add Specialty' >
                    <form
                        onSubmit={(e: any) => {
                            e.preventDefault()
                            formik.handleSubmit()
                        }}
                    >
                        {
                            createIsErr && <div className='bg-red-100 text-red-500 rounded-2xl p-4'>
                                {
                                    createErr?.message
                                }
                            </div>
                        }
                        <Label className='mb-2' htmlFor='name'>Name</Label>
                        <Input
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            name='name' type='text' placeholder='Enter the Specialty' />
                        {

                            formik.touched && formik.errors.name ? <div className='text-sm mt-1 font-medium text-red-500'>
                                {formik.errors.name}
                            </div> : null
                        }
                        <Button
                            disabled={isPending}
                            className='my-4 py-3 w-full rounded-md' type='submit'>

                            {
                                isPending ? "creating..." : "Create"
                            }
                        </Button>
                    </form>
                </CommonDialog>
            }



        </div>
    )
}

export default PersonSpecialtiesList
