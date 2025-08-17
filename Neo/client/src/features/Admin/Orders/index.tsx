"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QueryKeys } from "@/constants/QueryKeys";
import { BasicTable } from "@/features/common/BasicTable";
import { CommonDialog } from "@/features/common/Dialog";
import { deleteApi, getAPi, patchApi, patchOrderApi } from "@/http/api";
import { OrderStatus } from "@/lib/check-status";
import { Label } from "@radix-ui/react-label";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const OrderList = () => {
  const [openModalIsEditStatus, setIsOpenModalIsEditStatus] =
    useState<boolean>(false);
  const [orderstatus, setStatus] = useState<string>("");
  const [selectOrderId, setSelectOrderId] = useState<string>("");
  const [formStatus, setFormStatus] = useState<string>("");
  const {
    data,
    isLoading,
    isError: dataIsErr,
    error: dataErr,
    refetch,
  } = useQuery({
    queryKey: QueryKeys.orders.all,
    queryFn: async () => {
      return getAPi("/admin/orders");
    },
  });

  const { isLoading: isLoadingOrders, refetch: refetchOrders } = useQuery({
    queryKey: QueryKeys.orders.all,
    queryFn: async () => {
      return getAPi("/admin/orders");
    },
  });

  const {
    mutate: deleteOrder,
    status: deleteStatus,
    isError: deleteError,
  } = useMutation({
    mutationFn: (orderId: string) => deleteApi(`/orders/${orderId}`),
    onSuccess: () => {
      refetch();
    },
  });

  const isDeleting = deleteStatus === "pending";


  const colums = [
    "id",
    "user",
    "address",
    "totalAmount",
    "products",
    "status",
    "actions",
  ];

  const rows =
    data &&
    data?.data?.map((item: any) => {
      return {
        id: item?._id,
        user: item?.user?.name || item?.user?.email,
        status: (
          <Button
            onClick={() => {
              setIsOpenModalIsEditStatus(true);
              setStatus(item?.status);
              setSelectOrderId(item?._id);
            }}
            disabled={item.status === "delivered"}
            className={`text-[14px] px-4 py-2 rounded-md ${OrderStatus(item?.status)}`}
          >
            {item?.status}
          </Button>
        ),
        address: item?.address,
        totalAmount: item?.totalAmount,
        products: item?.products
          .map(
            (product: any) => `${product.product.name} (${product.quantity})`
          )
          .join(", "),
        actions: (
          <div className="flex items-center gap-1.5">
            <Button variant="outline"
              className="bg-blue-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white duration-300"
              onClick={() => {
                setIsOpenModalIsEditStatus(true);
                setStatus(item?.status);
                setSelectOrderId(item?._id);
              }}
            >Edit</Button>
            <Button
              variant="outline"
              className="bg-red-500 text-[14px] text-white px-4 py-2 rounded-md hover:bg-red-600 hover:text-white duration-300"
              onClick={() => {
                deleteOrder(item._id);
              }}
              disabled={isDeleting}
            > Delete
            </Button>
          </div>
        ),
      };
    });

  const status = [
    {
      id: 1,
      value: "paid",
      name: "paid",
    },
    {
      id: 2,
      name: "shipped",
      value: "shipped",
    },
    {
      id: 3,
      name: "delivered",
      value: "delivered",
    },
    {
      id: 4,
      name: "cancelled",
      value: "cancelled",
    },
  ];

  const disabledSelect = status.find((item: any) => item.value === orderstatus);
  const { isPending, mutate, isError, error } = useMutation({
    mutationFn: async (data: any) => {
      return patchOrderApi(`/orders/${selectOrderId}/status`, data);
    },
    mutationKey: QueryKeys.orders.updateOrderStatus(orderstatus),
    onSuccess: () => {
      selectOrderId && refetch();
      setIsOpenModalIsEditStatus(false);
      setStatus("");
      setSelectOrderId("");
    },
  });

  const handleUpdateStatus = () => {
    mutate({
      status: formStatus,
    });
  };
  return (
    <div>
      <div className="flex items-center my-5 justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Orders Lists</h1>
      </div>
      <BasicTable cols={colums} rows={rows} isLoading={isLoading} />
      {openModalIsEditStatus && (
        <CommonDialog
          open={openModalIsEditStatus}
          onClose={() => {
            setIsOpenModalIsEditStatus(false);
            setStatus("");
            selectOrderId && setSelectOrderId("");
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateStatus();
            }}
          >
            <Label className="block mb-2 text-sm font-medium text-gray-700">
              Change Order Status
            </Label>
            <Select
              onValueChange={(value: string) => {
                setFormStatus(value);
              }}
            //   disabled={disabledSelect ? true : false}
            >
              <SelectTrigger className="w-[520px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  {status?.map((item: any) => (
                    <SelectItem key={item.id} value={item.value}

                    >
                      {item?.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button disabled={isPending} className="mt-3 px-4 py-2 bg-white text-black hover border rounded-sm uppercase text-[12px] tracking-[0.4px]" type="submit">
              {isPending ? "Updating..." : "Update Status"}
            </Button>
          </form>
        </CommonDialog>
      )}
    </div>
  );
};

export default OrderList;
