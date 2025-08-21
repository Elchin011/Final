"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { QueryKeys } from "@/constants/QueryKeys";
import { BasicTable } from "@/features/common/BasicTable";
import { CommonDialog } from "@/features/common/Dialog";
import { deleteApi, getAPi, postApi } from "@/http/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { Pencil, Trash2, UploadIcon } from "lucide-react";
import { title } from "process";
import React, { useState } from "react";
import * as yup from "yup";

const BlogList = () => {
    const [openAddDialog, setOpenAddDialog] = useState<boolean>(false);
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: QueryKeys.blogs.All,
        queryFn: async () => {
            return getAPi("/blogs");
        },
    });


    const {
        mutate,
        isPending,
        isError: createIsErr,
        error: createErr,
    } = useMutation({
        mutationKey: QueryKeys.blogs.createBlog,
        mutationFn: async (data: any) => postApi("/blogs/create", data),
        onSuccess: () => {
            formik.resetForm();
            refetch();
            setOpenAddDialog(false);
        },
        onError: () => {
            console.log(createErr);
        },
    });

    const {
        mutate: deleteBlog,
        isPending: deletePending,
    } = useMutation({

        mutationFn: async (id: string) => await deleteApi(`/blogs/${id}`),
        onSuccess: () => {
            refetch();
        },
    });

    const columns = ["Id", "Title", "Date", "Image", "Actions"];

    const rows =
        data &&
        data?.data?.map((item: any) => {
            return {
                id: item?._id,
                title: item?.title,
                date: item?.date,
                image: (
                    <div>
                        <img
                            src={item?.imageUrl}
                            alt={item?.name}
                            className="w-16 h-16 object-cover rounded-md"
                        />
                    </div>
                ),
                actions: (
                    <div className="flex items-center gap-2">
                        <Button
                            className="bg-blue-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white duration-300"
                            variant="outline"
                        >
                            <Pencil />
                        </Button>
                        <Button
                            className="bg-red-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-red-600 hover:text-white duration-300"
                            variant="outline"
                            onClick={() => {
                                if (confirm("Are you sure you want to delete this blog?")) {
                                    deleteBlog(item?._id);
                                }
                            }}
                        >
                            <Trash2 />
                        </Button>
                    </div>
                ),
            };
        });
    const formik = useFormik({
        initialValues: {
            title: "",
            imageUrl: "" as string | File,
            date: "",
        },
        validationSchema: yup.object({
            title: yup.string().required("Title is required"),
            date: yup.string().required("Date is required"),
        }),
        onSubmit: async (values) => {
            console.log(values);
            const formData = new FormData();
            formData.append("title", values?.title ?? "");
            formData.append("file", values?.imageUrl ?? "");
            formData.append("date", values?.date ?? "");
            mutate(formData);
            // mutate({
            //     title: values?.title ?? ""
            // })
        },
    });

    return (
        <div>
            <div className="flex items-center my-5 justify-between">
                <h1 className="text-3xl font-bold text-gray-800">Blog List</h1>
                <Button
                    className="bg-green-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-green-600 hover:text-white duration-300"
                    onClick={() => {
                        setOpenAddDialog(true);
                    }}
                >
                    Add Blog
                </Button>
            </div>
            <BasicTable cols={columns} rows={rows} isLoading={isLoading} />
            {openAddDialog && (
                <CommonDialog
                    open={openAddDialog}
                    onClose={() => {
                        setOpenAddDialog(false);
                    }}
                    title="Create New Blog"
                >
                    <form
                        onSubmit={(e: any) => {
                            e.preventDefault();
                            formik.handleSubmit();
                        }}
                    >
                        {createIsErr && (
                            <div className="bg-red-100 text-red-500 rounded-2xl p-4">
                                {createErr?.message}
                            </div>
                        )}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-2" htmlFor="title">
                                    {" "}
                                    Title
                                </Label>
                                <Input
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                    name="title"
                                    type="text"
                                    placeholder="Enter the Blog Title."
                                />
                                {formik.touched && formik.errors.title ? (
                                    <div className="text-sm mt-1 font-medium text-red-500">
                                        {formik.errors.title}
                                    </div>
                                ) : null}
                            </div>
                            <div>
                                <Label className="mb-2" htmlFor="date">
                                    {" "}
                                    Date
                                </Label>
                                <Input
                                    onChange={formik.handleChange}
                                    value={formik.values.date}
                                    name="date"
                                    type="text"
                                    placeholder="Enter the Blog Title."
                                />
                                {formik.touched && formik.errors.date ? (
                                    <div className="text-sm mt-1 font-medium text-red-500">
                                        {formik.errors.date}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center w-full mt-5">
                                <label
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <UploadIcon className="w-10 h-10 text-gray-400" />
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Click to upload</span> or
                                            drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                                        </p>
                                    </div>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                formik.setFieldValue("imageUrl", file);
                                            }
                                        }}
                                    />
                                </label>
                            </div>
                            {formik.values.imageUrl &&
                                typeof formik.values.imageUrl !== "string" && (
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">
                                                {formik.values.imageUrl.name}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {(formik.values.imageUrl.size / 1024).toFixed(2)} KB
                                            </p>
                                        </div>
                                    </div>
                                )}
                        </div>
                        <Button disabled={isPending} className="my-4 py-4 rounded-md w-full" type="submit">
                            {isPending ? "creating..." : "Create"}
                        </Button>
                    </form>
                </CommonDialog>
            )}
        </div>
    );
};

export default BlogList;
