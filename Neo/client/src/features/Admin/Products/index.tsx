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
import { UploadIcon } from "lucide-react";
import React, { useState } from "react";
import * as yup from "yup";

const ProductList = () => {
  const [openAddDialog, setOpenAddDialog] = useState<boolean>(false);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: QueryKeys.products.All,
    queryFn: async () => {
      return getAPi("/products");
    },
  });
  const {
    data: colors,
    isLoading: colorsIsloading,
    isError: colorsIserr,
    error: colorsErr,
  } = useQuery({
    queryKey: QueryKeys.products.colors,
    queryFn: async () => {
      return getAPi("/products/colors");
    },
  });
  const {
    data: categories,
    isLoading: categoryIsLoading,
    isError: categoryIsErr,
    error: categoryErr,
  } = useQuery({
    queryKey: QueryKeys.products.categories,
    queryFn: async () => {
      return getAPi("/products/categories");
    },
  });
  const {
    data: productSizes,
    isLoading: sizeIsLoading,
    isError: sizeIsErr,
    error: sizeErr,
  } = useQuery({
    queryKey: QueryKeys.products.sizes,
    queryFn: async () => {
      return getAPi("/products/sizes");
    },
  });

  const {
    mutate,
    isPending,
    isError: createIsErr,
    error: createErr,
  } = useMutation({
    mutationKey: QueryKeys.products.createSize,
    mutationFn: async (data: any) => postApi("/product/create", data),
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
    mutate: deleteProduct,
    isPending: deletePending,
  } = useMutation({

    mutationFn: async (id: string) => await deleteApi(`/products/${id}`),
    onSuccess: () => {
      refetch(); 
    },
  });

  const {
    mutate: updateProduct,
    isPending: updatePending,
    isError: updateIsErr,
    error: updateErr,
  } = useMutation({

    mutationFn: async (data: any) => await postApi(`/products/${data.id}`, data),
    onSuccess: () => {
      refetch();
    },
  });

  const colums = ["id", "name", "price", "image", "actions"];

  const rows =
    data &&
    data?.data?.map((item: any) => {
      return {
        id: item?._id,
        name: item?.name,
        price: item?.price,
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
              onClick={() => {
                setOpenAddDialog(true);
                updateProduct({
                  id: item?._id,
                  name: item?.name,
                  price: item?.price,
                  imageUrl: item?.imageUrl,
                  stockQuantity: item?.stockQuantity,
                  categories: item?.categories?._id,
                  sizes: item?.sizes?._id,
                  colors: item?.colors?._id,
                });
              }}
            >
              Edit
            </Button>
            <Button
              className="bg-red-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-red-600 hover:text-white duration-300"
              variant="outline"
              onClick={() => {
                if (confirm("Are you sure you want to delete this product?")) {
                  deleteProduct(item?._id);
                }
              }}
            >
              Delete
            </Button>
          </div>
        ),
      };
    });
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      imageUrl: "" as string | File,
      stockQuantity: "",
      categories: "",
      sizes: "",
      colors: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Size is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const formData = new FormData();
      formData.append("name", values?.name ?? "");
      formData.append("price", values?.price ?? "");
      formData.append("file", values?.imageUrl ?? "");
      formData.append("stockQuantity", values?.stockQuantity ?? "");
      formData.append("categories", values?.categories ?? "");
      formData.append("sizes", values?.sizes ?? "");
      formData.append("colors", values?.colors ?? "");


      console.log("file in formData:", formData.get("file"));

      mutate(formData);
      // mutate({
      //     name: values?.name ?? ""
      // })
    },
  });

  return (
    <div>
      <div className="flex items-center my-5 justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Products Lists</h1>
        <Button
        className="bg-green-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-green-600 hover:text-white duration-300"
          onClick={() => {
            setOpenAddDialog(true);
          }}
        >
          Add Product
        </Button>
      </div>
      <BasicTable cols={colums} rows={rows} isLoading={isLoading} />
      {openAddDialog && (
        <CommonDialog
          open={openAddDialog}
          onClose={() => {
            setOpenAddDialog(false);
          }}
          title="Create Product"
          
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
                <Label className="mb-2" htmlFor="name">
                  {" "}
                  Name
                </Label>
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  name="name"
                  type="text"
                  placeholder="Enter the Product Name."
                />
                {formik.touched && formik.errors.name ? (
                  <div className="text-sm mt-1 font-medium text-red-500">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div>
                <Label className="mb-2" htmlFor="price">
                  {" "}
                  Price
                </Label>
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  name="price"
                  type="number"
                  placeholder="Enter the Price"
                />
                {formik.touched && formik.errors.price ? (
                  <div className="text-sm mt-1 font-medium text-red-500">
                    {formik.errors.price}
                  </div>
                ) : null}
              </div>
              <div>
                <Label className="mb-2" htmlFor="name">
                  {" "}
                  Select Colors
                </Label>
                <Select
                  name="colors"
                  onValueChange={(value) => {
                    formik.setFieldValue("colors", value);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {colors &&
                        colors?.data?.map((color: any) => (
                          <SelectItem key={color?._id} value={color?._id}>
                            {color?.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {formik.touched && formik.errors.name ? (
                  <div className="text-sm mt-1 font-medium text-red-500">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div>
                <Label className="mb-2" htmlFor="name">
                  {" "}
                  Select Category
                </Label>
                <Select
                  name="categories"
                  onValueChange={(value) => {
                    formik.setFieldValue("categories", value);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {categories &&
                        categories?.data?.map((category: any) => (
                          <SelectItem key={category?._id} value={category?._id}>
                            {category?.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {formik.touched && formik.errors.name ? (
                  <div className="text-sm mt-1 font-medium text-red-500">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div>
                <Label className="mb-2" htmlFor="name">
                  {" "}
                  Select Sizes
                </Label>
                <Select
                  name="sizes"
                  onValueChange={(value) => {
                    formik.setFieldValue("sizes", value);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {productSizes &&
                        productSizes?.data?.map((size: any) => (
                          <SelectItem key={size?._id} value={size?._id}>
                            {size?.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {formik.touched && formik.errors.name ? (
                  <div className="text-sm mt-1 font-medium text-red-500">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <Label className="mb-2" htmlFor="stockQuantity">
                  {" "}
                  StockQuantity
                </Label>
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.stockQuantity}
                  name="stockQuantity"
                  type="number"
                  placeholder="enter the stockQuantity "
                />
                {formik.touched && formik.errors.stockQuantity ? (
                  <div className="text-sm mt-1 font-medium text-red-500">
                    {formik.errors.stockQuantity}
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-full">
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

export default ProductList;
