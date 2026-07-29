"use client";

import { useEffect, useState } from "react";

import {
  getMyReceipts,
  Receipt,
} from "@/services/receipt.service";

export function useReceipts() {

  const [receipts,setReceipts] =
    useState<Receipt[]>([]);

  const [loading,setLoading] =
    useState(true);

  useEffect(()=>{

    load();

  },[]);

  async function load(){

    try{

      const data =
      await getMyReceipts();

      setReceipts(data);

    }finally{

      setLoading(false);

    }

  }

  return {

    receipts,

    loading,

  };

}