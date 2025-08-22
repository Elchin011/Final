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

const ProductCategoryList = () => {
    const [openAddCategoryDialog, setOpenAddCategoryDialog] = useState<boolean>(false)

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: QueryKeys.products.categories,
        queryFn: async () => {
            return getAPi("/products/categories")
        }
    })

    const {
        mutate: createCategory,
        isPending,
        isError: createIsErr,
        error: createErr
    } = useMutation({
        mutationKey: QueryKeys.products.createCategory,
        mutationFn: async (data: any) => postApi("/products/create/category", data),
        onSuccess: () => {
            formik.resetForm()
            refetch()
            setOpenAddCategoryDialog(false)
        },
        onError: () => {
            console.log(createErr)
        }
    })

    const {
        mutate: deleteProductCategory,
        isPending: deletePending,
    } = useMutation({

        mutationFn: async (id: string) => await deleteApi(`/api/products/categories/${id}`),
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
        return {
            id: item?._id,
            name: item?.name,
            actions: (
                <div className='flex items-center gap-1.5'>
                    <Button
                        className="bg-red-500 text-white p-1.5 px-2.5 rounded-md hover:bg-red-600 hover:text-white duration-300"
                        variant="outline"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this product?")) {
                                deleteProductCategory(item?._id);
                            }
                        }}
                    >
                        <Trash2 />
                    </Button>
                </div>
            )
        }
    })

    const formik = useFormik({
        initialValues: {
            name: ""
        },
        validationSchema: yup.object({
            name: yup.string().required('Category name is required'),
        }),
        onSubmit: async (values) => {
            createCategory({ name: values?.name ?? "" })
        }
    })

    return (
        <div>
            <div className='flex items-center my-5 justify-between'>
                <h1 className='text-3xl font-bold text-gray-800'>
                    Products Category Lists
                </h1>
                <Button onClick={() => setOpenAddCategoryDialog(true)} className='bg-green-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-green-600 hover:text-white duration-300'>
                    Add Category
                </Button>
            </div>

            <BasicTable cols={colums} rows={rows} isLoading={isLoading} />

            {
                openAddCategoryDialog && (
                    <CommonDialog
                        open={openAddCategoryDialog}
                        onClose={() => setOpenAddCategoryDialog(false)}
                        title='Add Category'
                        desc='Category daxil edin'
                    >
                        <form onSubmit={(e: any) => {
                            e.preventDefault()
                            formik.handleSubmit()
                        }}>
                            {createIsErr && (
                                <div className='bg-red-100 text-red-500 rounded-2xl p-4'>
                                    {createErr?.message}
                                </div>
                            )}

                            <Label className='mb-2' htmlFor='name'>Category name</Label>
                            <Input
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                name='name'
                                type='text'
                                placeholder='Enter category name'
                            />
                            {
                                formik.touched.name && formik.errors.name && (
                                    <div className='text-sm mt-1 font-medium text-red-500'>
                                        {formik.errors.name}
                                    </div>
                                )
                            }

                            <Button
                                disabled={isPending}
                                className='my-4 py-3 rounded-md w-full'
                                type='submit'
                            >
                                {isPending ? "Creating..." : "Create"}
                            </Button>
                        </form>
                    </CommonDialog>
                )
            }
        </div>
    )
}

export default ProductCategoryList
