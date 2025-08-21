"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QueryKeys } from "@/constants/QueryKeys";
import { BasicTable } from "@/features/common/BasicTable";
import { CommonDialog } from "@/features/common/Dialog";
import { deleteApi, getAPi, postApi } from "@/http/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import * as yup from "yup";

const QuestionsList = () => {
    const [openAddDialog, setOpenAddDialog] = useState<boolean>(false);
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: QueryKeys.questions.All,
        queryFn: async () => {
            return getAPi("/questions");
        },
    });


    const {
        mutate,
        isPending,
        isError: createIsErr,
        error: createErr,
    } = useMutation({
        mutationKey: QueryKeys.questions.createQuestion,
        mutationFn: async (data: any) => postApi("/questions/create", data),
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

        mutationFn: async (id: string) => await deleteApi(`/questions/${id}`),
        onSuccess: () => {
            refetch();
        },
    });

    const columns = ["Id", "Question", "Answer", "Actions"];

    const rows =
        data &&
        data?.data?.map((item: any) => {
            return { 
                Id: item?._id,
                Question: item?.question,
                Answer: item?.answer,

                Actions: (
                    <div className="flex items-center gap-2">
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
            question: "",
            answer: "",
            
        },
        validationSchema: yup.object({
            question: yup.string().required("Question is required"),
            answer: yup.string().required("Answer is required"),
        }),
        onSubmit: async (values) => {
            console.log(values);
            const formData = new FormData();
            formData.append("question", values?.question ?? "");
            formData.append("answer", values?.answer ?? "");
            mutate(formData);
            // mutate({
            //     title: values?.title ?? ""
            // })
        },
    });

    return (
        <div>
            <div className="flex items-center my-5 justify-between">
                <h1 className="text-3xl font-bold text-gray-800">Questions List</h1>
                <Button
                    className="bg-green-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-green-600 hover:text-white duration-300"
                    onClick={() => {
                        setOpenAddDialog(true);
                    }}
                >
                    Add Question
                </Button>
            </div>
            <BasicTable cols={columns} rows={rows} isLoading={isLoading} />
            {openAddDialog && (
                <CommonDialog
                    open={openAddDialog}
                    onClose={() => {
                        setOpenAddDialog(false);
                    }}
                    title="Create New Question"
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
                                <Label className="mb-2" htmlFor="question">
                                    {" "}
                                    Question
                                </Label>
                                <Input
                                    onChange={formik.handleChange}
                                    value={formik.values.question}
                                    name="question"
                                    type="text"
                                    placeholder="Enter the Question."
                                />
                                {formik.touched && formik.errors.question ? (
                                    <div className="text-sm mt-1 font-medium text-red-500">
                                        {formik.errors.question}
                                    </div>
                                ) : null}
                            </div>
                            <div>
                                <Label className="mb-2" htmlFor="date">
                                    {" "}
                                    Answer
                                </Label>
                                <Input
                                    onChange={formik.handleChange}
                                    value={formik.values.answer}
                                    name="answer"
                                    type="text"
                                    placeholder="Enter the Answer."
                                />
                                {formik.touched && formik.errors.answer ? (
                                    <div className="text-sm mt-1 font-medium text-red-500">
                                        {formik.errors.answer}
                                    </div>
                                ) : null}
                            </div>
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

export default QuestionsList;
