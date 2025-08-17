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
import React, { useState } from 'react'
import * as yup from "yup"

const ProductColorsList = () => {
    const [openAddcolorDialog, setOpenAddcolorDialog] = useState<boolean>(false)
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: QueryKeys.products.colors,
        queryFn: async () => {
            return getAPi("/products/colors")
        }
    })

    const { mutate, isPending, isError: createIsErr, error: createErr } = useMutation({
        mutationKey: QueryKeys.products.createColor,
        mutationFn: async (data: any) => postApi("/products/create/color", data),
        onSuccess: () => {
            formik.resetForm()
            refetch()
            setOpenAddcolorDialog(false)
        },
        onError: () => {
            console.log(createErr)
        }
    })
    const {
        mutate: deleteProductColor,
        isPending: deletePending,
    } = useMutation({

        mutationFn: async (id: string) => await deleteApi(`/api/products/colors/${id}`),
        onSuccess: () => {
            refetch();
        },
    });


    const colums = [
        "id",
        "name",
        "code",
        "actions"
    ]

    const rows = data && data?.data?.map((item: any) => {
        return (
            {
                id: item?._id,
                name: item?.name,
                code: item?.code,
                actions: (
                    <div className='flex items-center gap-1.5'>
                        <Button
                            className="bg-blue-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white duration-300"
                            variant="outline"
                        >
                            Edit
                        </Button>
                        <Button
                            className="bg-red-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-red-600 hover:text-white duration-300"
                            variant="outline"
                            onClick={() => {
                                if (confirm("Are you sure you want to delete this product?")) {
                                    deleteProductColor(item?._id);
                                }
                            }}
                        >
                            Delete
                        </Button>
                    </div>
                )
            }
        )
    })
    const formik = useFormik({
        initialValues: {
            name: "",
            code: ""
        },
        validationSchema: yup.object({
            name: yup.string().required('Size is required'),
            code: yup.string().required('Color code is required')
        }),
        onSubmit: async (values) => {
            mutate({
                name: values?.name ?? "",
                code: values?.code ?? ""
            })
        }
    })

    return (
        <div>
            <div className='flex items-center my-5 justify-between'>
                <h1 className='text-3xl font-bold text-gray-800'>
                    Products Size Lists
                </h1>
                <Button
                    onClick={() => {
                        setOpenAddcolorDialog(true)
                    }}
                    className='bg-green-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-green-600 hover:text-white duration-300'
                >
                    Add Color
                </Button>

            </div>
            <BasicTable cols={colums} rows={rows} isLoading={isLoading} />
            {
                openAddcolorDialog && <CommonDialog open={openAddcolorDialog} onClose={() => {
                    setOpenAddcolorDialog(false)
                }}
                    title='add Color' desc='color'>
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
                        <div>
                            <Label className='mb-2' htmlFor='name'>Name</Label>
                            <Input
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                name='name' type='text' placeholder='enter the size' />
                            {

                                formik.touched && formik.errors.name ? <div className='text-sm mt-1 font-medium text-red-500'>
                                    {formik.errors.name}
                                </div> : null
                            }
                        </div>
                        <div>
                            <Label className='mb-2' htmlFor='code'>Color code</Label>
                            <Input
                                onChange={formik.handleChange}
                                value={formik.values.code}
                                name='code' type="color" />
                            {

                                formik.touched && formik.errors.code ? <div className='text-sm mt-1 font-medium text-red-500'>
                                    {formik.errors.code}
                                </div> : null
                            }
                        </div>
                        <Button
                            disabled={isPending}
                            className='my-4 w-full' type='submit'>

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

export default ProductColorsList
